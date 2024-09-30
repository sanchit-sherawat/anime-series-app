import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import "./Anime.css"
import { useLocation } from 'react-router-dom';
import animeSeriesService from '../services/animeSeriesService';
import animeService from '../services/animeService';

// Define validation schema using Yup
const validationSchema = Yup.object({
  animename: Yup.string().required('Anime name is required'),
  description: Yup.string().required('Description is required'),
  count: Yup.string().required('Count is required'),
  scries: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Episode name is required'),
      url: Yup.string().required('Episode URL is required'),
    })
  ),
});

// Define the AnimeForm component
const AnimeForm = (e) => {
  const location = useLocation();
  const todos = location?.state?.todos;
  console.log("todo", todos)
  const [values, setValues] = useState({
    animename: todos ? todos.animename : "",
    description: todos ? todos.description : '',
    count: todos ? todos.totalEpisode : "",
    server: '',
    language: '',
    scries: [{ name: '', url: '' }],
  });

  const [errors, setErrors] = useState({
    animename: '',
    description: '',
    count: '',
    server: '',
    language: '',
    scries: [{ name: '', url: '' }],
  });


  const handleSChange = (index, field, value) => {
    const newValues = { ...values };
    newValues[field] = value;
    setValues(newValues);
  };

  const handleChange = (index, field, value) => {
    const newValues = { ...values };
    newValues.scries[index][field] = value;
    setValues(newValues);
  };

  const handleBlur = () => {
    if (!values?.animename) {
      // alert(values)
      // return

    }
    // let { animename, description, count, server,language, scries } = values || {};
    let { animename, description, count, server, language, scries } = values || {
      animename: todos ? todos.animename : "",
      description: todos ? todos.description : '',
      count: todos ? todos.totalEpisode : "",
      server: '',
      language: '',
      scries: [{ name: '', url: '' }],
    };
    scries = scries || [{ name: '', url: '' }];

    validationSchema
      .validate({ animename, description, count, server, language, scries }, { abortEarly: false })
      .then(() => {
        setErrors({ animename: '', description: '', count: '', server: '', language: '', scries: [] });
      })
      .catch((err) => {
        const newErrors = { animename: '', description: '', count: '', server: '', language: '', scries: [] };
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;

          if (error.path === 'scries') {
            newErrors.scries[error.index] = {
              name: error.path === 'scries' ? error.message : '',
              url: error.path === 'scries' ? error.message : '',
            };
          }
        });
        setErrors(newErrors);
      });
  };

  const handleAddEpisode = () => {
    if (!values) {
      setValues({
        ...values,
        scries: [{ name: '', url: '' }],
      });
    } else {
      setValues({
        ...values,
        scries: [...values?.scries, { name: '', url: '' }],
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await animeSeriesService.getAnimeSeriesById(todos).then((res) => {
          return res
        })
        console.log(response.data, "serise")
        if(response?.data[0].scries.length<1){
        setValues({...response?.data[0],scries: [{ name: '', url: '' }],});

        }else{
          setValues(response?.data[0])
        }
        // setUrl(response.data[0]?.scries[0]?.url)
      } catch (error) {
        console.error('Error fetching Anime Series:', error);
        // Handle error, e.g., show an error message
      }
    };

    if (todos) { fetchData() }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(todos.animename){
      const res = await animeSeriesService.createAnimeSeries(values)

      
    }

    try {
      const res = await animeSeriesService.createAnimeSeries(values)
      console.log(res)
    } catch (err) {

    }

    // Perform form submission logic here
    console.log('Form submitted:', values);
  };
  const handleRemoveEpisode = (index) => {
    const updatedScries = [...values.scries];
    updatedScries.splice(index, 1);
    setValues({ ...values, scries: updatedScries });
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="animename">Anime Name:</label>
            <input
              className='inputep'

              type="text"
              id="animename"
              name="animename"
              onChange={(e) => handleSChange(0, 'animename', e.target.value)}
              onBlur={handleBlur}
              value={values?.animename}
            />
            {errors.animename && <div className="error-message">{errors.animename}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea

              id="description"
              name="description"
              onChange={(e) => handleSChange(0, 'description', e.target.value)}
              onBlur={handleBlur}
              value={values?.description}
            />
            {errors.description && <div className="error-message">{errors.description}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="count">Count:</label>
            <input
              className='inputep'

              type="text"
              id="count"
              name="count"
              onChange={(e) => handleSChange(0, 'count', e.target.value)}
              onBlur={handleBlur}
              value={values?.count}
            />
            {errors.count && <div className="error-message">{errors.count}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="server">Server:</label>
            <input
              className='inputep'

              type="text"
              id="server"
              name="server"
              onChange={(e) => handleSChange(0, 'server', e.target.value)}
              onBlur={handleBlur}
              value={values?.server}
            />
            {errors.count && <div className="error-message">{errors.count}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="language">Language:</label>
            <input
              className='inputep'

              type="text"
              id="language"
              name="language"
              onChange={(e) => handleSChange(0, 'language', e.target.value)}
              onBlur={handleBlur}
              value={values?.language}
            />
            {errors.count && <div className="error-message">{errors.count}</div>}
          </div>

          <div className="form-group">

            {values?.scries?.map((scrie, index) => (

              <>
                <div key={index} className="episode-group">
                  <label key={index + "ass"}>Episodes:{index + 1}</label>

                  <input
                    // className='inputep'
                    type="text"
                    id={`scries[${index}].name`}
                    name={`scries[${index}].name`}
                    placeholder="Episode Name"
                    onChange={(e) => handleChange(index, 'name', e.target.value)}
                    onBlur={handleBlur}
                    value={scrie?.name}
                  />
                  <input
                    // className='inputep'

                    type="text"
                    id={`scries[${index}].url`}
                    name={`scries[${index}].url`}
                    placeholder="Episode URL"
                    onChange={(e) => handleChange(index, 'url', e.target.value)}
                    onBlur={handleBlur}
                    value={scrie?.url}
                  />
                  {errors.scries[index]?.name && <div className="error-message">{errors.scries[index]?.name}</div>}
                  <button type="button" onClick={() => handleRemoveEpisode(index)}>
                    Remove Episode
                  </button>
                </div>
                {/* <br/> */}
              </>
            ))}
            <button type="button" onClick={handleAddEpisode} className="add-episode-btn">
              Add Episode
            </button>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnimeForm;
