import React, { useState, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import GPTModalComponent from '../../components/modal/GPTModalComponent';
import './CustomCalendar.css';


const style = {
  position: 'absolute',
  display: 'flex',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  minHeight: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};

function CalendarPage() {
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const oneDayPlus = (date: Date) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 1);
    return newDate;
  }

  const onClickDay = (value: Date, event: React.MouseEvent) => {
    onChange(value);  // 날짜 값을 변경
    handleOpen();
  };

  return (
    <Box>
      <Calendar
        onClickDay={onClickDay}
        formatDay={(locale, date) => date.toLocaleString('en', { day: 'numeric' })}
        value={value}
        calendarType="gregory"
        minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
      className={'custom-calendar'}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <GPTModalComponent date={oneDayPlus(value)} />

      </Modal>
    </Box>
  )

}

export default CalendarPage;