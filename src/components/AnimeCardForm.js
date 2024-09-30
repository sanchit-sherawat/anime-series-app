// components/AnimeCardForm.jsx
import React, { useState } from 'react';
import animeService from '../services/animeService';

const AnimeCardForm = () => {
  const [formData, setFormData] = useState({
    animename: '',
    description: '',
    totalEpisode: '',
    posterURL: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)

    animeService.createAnimeCard(formData)
      .then(response => console.log('Anime card added:', response.data))
      .catch(error => console.error('Error adding anime card:', error));

    setFormData({
      animename: '',
      description: '',
      totalEpisode: '',
      posterURL: '',
    });
  };

  return (
    <>
      <h2>Add Anime Card</h2>
      <form onSubmit={handleSubmit}>
        {/* Form input fields */}
        <div className="form-group">
          <label htmlFor="animename">Anime Name:</label>
          <input
            className='inputep'

            type="text"
            id="animename"
            name="animename"
            onChange={(e) => handleChange(e)}
            // onBlur={handleBlur}
            value={formData?.animename}
          />
          {/* {errors.animename && <div className="error-message">{errors.animename}</div>} */}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea

            id="description"
            name="description"
            onChange={(e) => handleChange(e)}
            // onBlur={handleBlur}
            value={formData.description}

          />
          {/* {errors.description && <div className="error-message">{errors.description}</div>} */}
        </div>

        <div className="form-group">
          <label htmlFor="totalEpisode">total Episode:</label>
          <input
            className='inputep'

            type="text"
            id="totalEpisode"
            name="totalEpisode"
            onChange={(e) => handleChange(e)}
            // onBlur={handleBlur}
            value={formData.totalEpisode}

          />
          {/* {errors.count && <div className="error-message">{errors.count}</div>} */}
        </div>
        <div className="form-group">
          <label htmlFor="posterURL">Anime posterURL:</label>
          <input
            className='inputep'

            type="text"
            id="posterURL"
            name="posterURL"
            onChange={(e) => handleChange(e)}
            // onBlur={handleBlur}
            value={formData.posterURL}
          />
          {/* {errors.animename && <div className="error-message">{errors.animename}</div>} */}
        </div>

        {/* <></> */}
        <button type="submit">Add Anime Card</button>
      </form>
    </>
  );
};

export default AnimeCardForm;
