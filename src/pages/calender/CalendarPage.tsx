import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface CalendarComponentProps {
  onDateSelect?: (date: Date) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ onDateSelect }) => {
  const [date, setDate] = useState<Date>(new Date());

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
    onDateSelect && onDateSelect(newDate);
  };

  return (
    <div>
      <Calendar 
        onChange={()=>handleDateChange}
        onClickDay={handleDateChange}
        value={date}
        locale="ko-KR"
        minDetail="month"
        maxDetail="month"
        formatDay={(locale, date) => date.getDate().toString()}
      />
      <p>선택된 날짜: {date.toLocaleDateString()}</p>
    </div>
  );
};

export default CalendarComponent;