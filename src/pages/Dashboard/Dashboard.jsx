import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import ExcelExporter from '../ExcelExporter';

const ShiftScheduler = () => {
  const [shifts, setShifts] = useState({
    Monday: { morning: '', noon: '', night: '' },
    Tuesday: { morning: '', noon: '', night: '' },
    Wednesday: { morning: '', noon: '', night: '' },
    Thursday: { morning: '', noon: '', night: '' },
    Friday: { morning: '', noon: '', night: '' },
    Saturday: { morning: '', noon: '', night: '' },
    Sunday: { morning: '', noon: '', night: '' }
  });

  const handleShiftSelect = (day, period, shift) => {
    setShifts({
      ...shifts,
      [day]: {
        ...shifts[day],
        [period]: shift
      }
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Shifts:', shifts);
    // Call the function to export the shifts data to Excel
    exportToExcel();
  };

  const exportToExcel = () => {
    // Create a new workbook and add a worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(shifts);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Shifts');

    // Export the workbook to a file
    XLSX.writeFile(workbook, 'shifts.xlsx');
    
    // Render the ExcelExporter component with the shifts data
    return <ExcelExporter shifts={shifts} />;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Shift Scheduler</h2>
      {Object.entries(shifts).map(([day, periods]) => (
        <div key={day}>
          <h3>{day}</h3>
          <label>
            <input
              type="radio"
              name={`${day}-shift`}
              value="working"
              checked={shifts[day].morning === 'working'}
              onChange={() => handleShiftSelect(day, 'morning', 'working')}
            />
            Morning
          </label>
          <label>
            <input
              type="radio"
              name={`${day}-shift`}
              value="working"
              checked={shifts[day].noon === 'working'}
              onChange={() => handleShiftSelect(day, 'noon', 'working')}
            />
            Noon
          </label>
          <label>
            <input
              type="radio"
              name={`${day}-shift`}
              value="working"
              checked={shifts[day].night === 'working'}
              onChange={() => handleShiftSelect(day, 'night', 'working')}
            />
            Night
          </label>
        </div>
      ))}
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default ShiftScheduler;
