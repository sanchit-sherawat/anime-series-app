import { useEffect, useState } from "react";
import gettimelist from "../../services/timeMangmentservice/getist";
import "./addform.css";

const UserTaskList = () => {
    const [list, setList] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(null); // Selected month index
    const [selectedMonthhigh, setSelectedMonthhight] = useState([]); // Selected month index
    const [timeList, setTimeList] = useState([]);

    const [highlightedDates, setHighlightedDates] = useState([]);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [years,setYears]= useState([])

    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    

    useEffect(() => {
        const years = Array.from({ length: 15 }, (_, i) => new Date().getFullYear() - i+4);
        setYears(years)
        const fetchList = async () => {
            try {
                const response = await gettimelist.getListByUser({
                    user: localStorage.getItem("user"),
                });
                setList(response.data);

                // Extract unique months from the response
                const months = [
                    ...new Set(
                        response.data.map(item => new Date(item.date).getMonth())
                    ),
                ];
                const yearss = [
                    ...new Set(
                        response.data.map(item => new Date(item.date).getFullYear())
                    ),
                ];
                // alert(years)
                setSelectedMonthhight(months);
                setSelectedYear(yearss)

            } catch (error) {
                console.error("Error fetching the list:", error);
            }
        };

        fetchList();
    }, []);

    useEffect(() => {
        updateHighlightedMonths(list, selectedYear);
        setSelectedMonth(null); // Reset selected month when year changes
        setHighlightedDates([]);
    }, [selectedYear]);

    const updateHighlightedMonths = (data, year) => {
        const monthsForYear = [
            ...new Set(
                data
                    .filter(item => new Date(item.date).getFullYear() === year)
                    .map(item => new Date(item.date).getMonth())
            ),
        ];
        setSelectedMonthhight(monthsForYear);
    };


    const handleDateClick = async(dayindex) =>{
        // alert(dayindex)
        try {
            const result = await gettimelist.getListByDate({
                user: localStorage.getItem("user"),
                date: `${selectedYear}-${selectedMonth<10?`0${selectedMonth+1}`:selectedMonth+1}-${dayindex<10?`0${dayindex}`:dayindex}`,
            });
            setTimeList(result.data || []); // Ensure result.data is an array
            console.log("Time List:", result.data);
        } catch (error) {
            console.error("Error fetching time list:", error);
        }

    }

    const handleMonthClick = (monthIndex) => {
        setSelectedMonth(monthIndex);
        const filteredDates = list
            .map(item => new Date(item.date))
            .filter(date => date.getMonth() === monthIndex && date.getFullYear() === selectedYear);


        setHighlightedDates(filteredDates.map(date => date.getDate())); // Extract days
    };

    const renderCalendar = () => {
        if (selectedMonth === null) return null;

        const now = new Date();
        const year = selectedYear; // Use selected year
        const daysInMonth = new Date(year, selectedMonth + 1, 0).getDate();
        const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
        // alert(selectedYear)

        return (
            <div className="calendar" style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
                {days.map((day,ind) => (
                    <div
                        key={day}
                        className={`calendar-day ${highlightedDates.includes(day) ? "highlighted" : ""}`}
                        style={{
                            padding: "10px",
                            textAlign: "center",
                            border: "1px solid #ddd",
                            borderRadius: "5px",
                            backgroundColor: highlightedDates.includes(day) ? "#007bff" : "#f9f9f9",
                            color: highlightedDates.includes(day) ? "#fff" : "#333",
                        }}
                        onClick={()=> handleDateClick(day)}
                    >
                        {day}
                    </div>
                ))}
            </div>
        );
    };

    return (<>
        <div style={{ fontFamily: "Arial, sans-serif" }}>
            <div style={{ padding: "20px", textAlign: "center" }}>
                <h1 style={{ color: "#4A4A4A", marginBottom: "20px" }}>Task Calendar</h1>
                 {/* Year Dropdown */}
                 <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(Number(e.target.value))}
                        style={{
                            padding: "10px",
                            marginBottom: "20px",
                            fontSize: "16px",
                            borderRadius: "5px",
                            border: "1px solid #ddd",
                        }}
                    >
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                <div className="months-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                    {months.map((month, index) => (
                        <div
                            key={index}
                            className={`month ${selectedMonth === index ? "active-month" : `${selectedMonthhigh.includes(index)? "active-month":""}`}`}
                            onClick={() => handleMonthClick(index)}
                            style={{
                                padding: "15px",
                                backgroundColor: selectedMonth === index ? "#007bff" : "",
                                color: selectedMonth === index ? "#fff" : "#333",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                cursor: "pointer",
                                textAlign: "center",
                                transition: "background-color 0.3s, color 0.3s",
                            }}
                        >
                            {month}
                        </div>
                    ))}
                </div>
            </div>

            {selectedMonth !== null && (
                <div >
                    <h2 style={{ textAlign: "center", color: "#333", marginTop: "20px" }}>
                        {months[selectedMonth]}
                    </h2>
                    <div style={{ gap: "5px", padding: "20px" }}>
                        {renderCalendar()}
                    </div>
                </div>
            )}
        </div>
        <div className="form2">
    <div className="formhead">
        <h3 style={{ textAlign: "center" }}>Time Slots {timeList.length>0&&`of ${timeList[0].date}`}</h3>
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
            <div className="no-data">No time slots available. </div>
        )}
    </div>
</div>
        
        </>
    );
};

export default UserTaskList;
