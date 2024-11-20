import { useState } from "react";
import "./addform.css";
import gettimelist from "../../services/timeMangmentservice/getist";

const UserTaskAdd = () => {
    const [timeList, setTimeList] = useState([]);
    const [errors, setErrors] = useState({}); // To track validation errors

    const [formData, setFormData] = useState({
        firstname: '',
        discrib: '',
        Date: '',
        ftime: '',
        ltime: '',
        user: localStorage.getItem("user") || "",
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Check for time conflicts
    const isTimeConflict = (newStart, newEnd) => {
        return timeList.some((time) => {
            const existingStart = time.ftime;
            const existingEnd = time.ltime;

            return (
                (newStart >= existingStart && newStart < existingEnd) || // New start overlaps existing
                (newEnd > existingStart && newEnd <= existingEnd) || // New end overlaps existing
                (newStart <= existingStart && newEnd >= existingEnd) // New range fully contains existing
            );
        });
    };

    // Fetch available times for the selected date
    const findtime = async () => {
        if (formData.Date) {
            try {
                const result = await gettimelist.getListByDate({
                    user: formData.user,
                    date: formData.Date,
                });
                setTimeList(result.data || []); // Ensure result.data is an array
                console.log("Time List:", result.data);
            } catch (error) {
                console.error("Error fetching time list:", error);
            }
        } else {
            alert("Please select a date first.");
        }
    };

    // Form validation
    const validateForm = () => {
        const { firstname, discrib, Date, ftime, ltime } = formData;
        const newErrors = {};

        if (!firstname.trim()) newErrors.firstname = "Name is required.";
        if (!discrib.trim()) newErrors.discrib = "Description is required.";
        if (!Date) newErrors.Date = "Date is required.";
        if (!ftime) newErrors.ftime = "Start time is required.";
        if (!ltime) newErrors.ltime = "End time is required.";

        if (ftime && ltime && ftime >= ltime) {
            newErrors.timeRange = "Start time must be earlier than end time.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Form is valid if no errors
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form
        if (!validateForm()) return;

        const newStartTime = formData.ftime;
        const newEndTime = formData.ltime;

        // Check for time conflicts
        if (isTimeConflict(newStartTime, newEndTime)) {
            alert("The selected time range conflicts with an existing time range.");
            return;
        }

        console.log("Form Data Submitted:", formData);
        const data = {
            firstname: formData.firstname,
            discrib: formData.discrib,
            Date: formData.Date,
            ftime: formData.ftime,
            ltime: formData.ltime,
            user: formData.user,
        };

        try {
            await gettimelist.createTimeManagement(data);
            alert("Task added successfully.");
            setFormData({
                firstname: '',
                discrib: '',
                Date: '',
                ftime: '',
                ltime: '',
                user: localStorage.getItem("user") || "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <>
            <div className="form1">
                <div className="formhead">
                    <h3 style={{ textAlign: "center" }}>Add Task</h3>
                </div>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">Name</label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Your name.."
                                    value={formData.firstname}
                                    onChange={handleChange}
                                />
                                {errors.firstname && <p className="error">{errors.firstname}</p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="discrib">Description</label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="text"
                                    id="discrib"
                                    name="discrib"
                                    placeholder="Describe.."
                                    value={formData.discrib}
                                    onChange={handleChange}
                                />
                                {errors.discrib && <p className="error">{errors.discrib}</p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="Date">Date</label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="date"
                                    id="Date"
                                    name="Date"
                                    value={formData.Date}
                                    onChange={handleChange}
                                />
                                <button className="button1" type="button" onClick={findtime}>
                                    Find Time
                                </button>
                                {errors.Date && <p className="error">{errors.Date}</p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="ftime">From Time</label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="time"
                                    id="ftime"
                                    name="ftime"
                                    value={formData.ftime}
                                    onChange={handleChange}
                                />
                                {errors.ftime && <p className="error">{errors.ftime}</p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="ltime">To Time</label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="time"
                                    id="ltime"
                                    name="ltime"
                                    value={formData.ltime}
                                    onChange={handleChange}
                                />
                                {errors.ltime && <p className="error">{errors.ltime}</p>}
                            </div>
                        </div>
                        {errors.timeRange && <p className="error">{errors.timeRange}</p>}
                        <br />
                        <div className="row">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="form2">
    <div className="formhead">
        <h3 style={{ textAlign: "center" }}>Time Slots</h3>
    </div>
    <div className="time-list-container">
        {timeList.length > 0 ? (
            timeList.map((value, index) => (
                <div className="time-slot" key={index}>
                    <div className="time-slot-header">Slot {index + 1}</div>
                    <div className="time-slot-detail">
                        <span className="label">From:</span>
                        <span className="value">{value.ftime}</span>
                    </div>
                    <div className="time-slot-detail">
                        <span className="label">To:</span>
                        <span className="value">{value.ltime}</span>
                    </div>
                </div>
            ))
        ) : (
            <div className="no-data">No time slots available. for {formData.Date}</div>
        )}
    </div>
</div>

        </>
    );
};

export default UserTaskAdd;


// import { useState } from "react";
// import "./addform.css"
// import gettimelist from "../../services/timeMangmentservice/getist";

// const UserTaskAdd = () => {
//     const [addvalue, setAddvalue] = useState("")
//     const [on, setOn] = useState(false)
//     const add = () => {
//         setOn(!on)

//     }
//     const [timeList, setTimeList] = useState([]);


//     const [formData, setFormData] = useState({
//         firstname: '',
//         discrib: '',
//         Date: '',
//         ftime: '',
//         ltime:"",
//         user:localStorage.getItem("user") || ""
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//         // Check for time conflicts
//         const isTimeConflict = (newStart, newEnd) => {
//             return timeList.some((time) => {
//                 const existingStart = time.ftime;
//                 const existingEnd = time.ltime;
    
//                 return (
//                     (newStart >= existingStart && newStart < existingEnd) || // New start overlaps existing
//                     (newEnd > existingStart && newEnd <= existingEnd) || // New end overlaps existing
//                     (newStart <= existingStart && newEnd >= existingEnd) // New range fully contains existing
//                 );
//             });
//         };

//     const findtime = async()=>{
//         if (formData.Date) {
//             try {
//                 const result = await gettimelist.getListByDate({
//                     user: formData.user,
//                     date: formData.Date,
//                 });
//                 setTimeList(result.data);
//                 console.log("Time List:", result.data);
//             } catch (error) {
//                 console.error("Error fetching time list:", error);
//             }
//         } else {
//             alert("Please select a date first.");
//         }
//     }

//     const handleSubmit = async(e) => {
//         e.preventDefault();

//         const newStartTime = formData.ftime;
//         const newEndTime = formData.ltime;

//         // Check for conflicts
//         if (isTimeConflict(newStartTime, newEndTime)) {
//             alert("The selected time range conflicts with an existing time range.");
//             return;
//         }
//         console.log('Form Data Submitted:', formData);
//         let data = {
//             firstname: formData.firstname,
//             discrib: formData.discrib,
//             Date: formData.Date,
//             ftime: formData.ftime,
//             ltime:formData.ltime,
//             user:formData.user
//         }
//         // Add any action for form submission, like an API call
//         // await gettimelist.createTimeManagement(data)
//         try {
//             await gettimelist.createTimeManagement(data);
//             alert("Task added successfully.");
//             setFormData({
//                 firstname: '',
//                 discrib: '',
//                 Date: '',
//                 ftime: '',
//                 ltime:"",
//                 user:localStorage.getItem("user") || ""
//             })
//         } catch (error) {
//             console.error("Error submitting form:", error);
//         }
//     };
//     return <>
//         <div className="form1">
//             <div className="formhead"><h3 style={{ textAlign: "center" }}>Head</h3></div>
//             {on && <h1 style={{ color: "black" }}>i love you {addvalue}</h1>}
//             <div className="container">
//                <form onSubmit={handleSubmit}>
//                     <div className="row">
//                         <div className="col-25">
//                             <label htmlFor="fname"> Name</label>
//                         </div>
//                         <div className="col-75">
//                             <input
//                                 type="text"
//                                 id="fname"
//                                 name="firstname"
//                                 placeholder="Your name.."
//                                 value={formData.firstname}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-25">
//                             <label htmlFor="discrib">Discrib</label>
//                         </div>
//                         <div className="col-75">
//                             <input
//                                 type="text"
//                                 id="discrib"
//                                 name="discrib"
//                                 placeholder="Discrib.."
//                                 value={formData.lastname}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-25">
//                             <label htmlFor="Date">Date</label>
//                         </div>
//                         <div className="col-75">
//                             <input
//                                 type="date"
//                                 id="Date"
//                                 name="Date"
//                                 placeholder="Your Date.."
//                                 value={formData.lastname}
//                                 onChange={handleChange}
//                             />
//                             <button className="button1" type="button" onClick={()=>findtime()} >find time</button>

//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-25">
//                             <label htmlFor="ftime">From Time</label>
//                         </div>
//                         <div className="col-75">
//                             <input
//                                 type="time"
//                                 id="ftime"
//                                 name="ftime"
//                                 placeholder="From Time.."
//                                 value={formData.lastname}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-25">
//                             <label htmlFor="ltime">To Time</label>
//                         </div>
//                         <div className="col-75">
//                             <input
//                                 type="time"
//                                 id="ltime"
//                                 name="ltime"
//                                 placeholder="To Time.."
//                                 value={formData.lastname}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>

//                     <br />
//                     <div className="row">
//                         <input type="submit" value="Submit" />
//                     </div>
//                 </form>
//             </div>
//         </div>
//         <div className="form2">
//             <div className="formhead"><h3 style={{ textAlign: "center" }}>Head</h3></div>
//             {on && <h1 style={{ color: "black" }}>i love you {addvalue}</h1>}
//             {/* <div className="container">
//                <form onSubmit={handleSubmit}>
//                     <div className="row">
//                         <div className="col-25">
//                             <label htmlFor="fname"> Name</label>
//                         </div>
//                         <div className="col-75">
//                             <input
//                                 type="text"
//                                 id="fname"
//                                 name="firstname"
//                                 placeholder="Your name.."
//                                 value={formData.firstname}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-25">
//                             <label htmlFor="discrib">Discrib</label>
//                         </div>
//                         <div className="col-75">
//                             <input
//                                 type="text"
//                                 id="discrib"
//                                 name="discrib"
//                                 placeholder="Discrib.."
//                                 value={formData.lastname}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-25">
//                             <label htmlFor="Date">Date</label>
//                         </div>
//                         <div className="col-75">
//                             <input
//                                 type="date"
//                                 id="Date"
//                                 name="Date"
//                                 placeholder="Your Date.."
//                                 value={formData.lastname}
//                                 onChange={handleChange}
//                             />
//                             <button className="button1"  >find time</button>

//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-25">
//                             <label htmlFor="ftime">From Time</label>
//                         </div>
//                         <div className="col-75">
//                             <input
//                                 type="time"
//                                 id="ftime"
//                                 name="ftime"
//                                 placeholder="From Time.."
//                                 value={formData.lastname}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-25">
//                             <label htmlFor="ltime">To Time</label>
//                         </div>
//                         <div className="col-75">
//                             <input
//                                 type="time"
//                                 id="ltime"
//                                 name="ltime"
//                                 placeholder="To Time.."
//                                 value={formData.lastname}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>

//                     <br />
//                     <div className="row">
//                         <input type="submit" value="Submit" />
//                     </div>
//                 </form>
//             </div> */}
//         </div>

//     </>

// }

// export default UserTaskAdd;