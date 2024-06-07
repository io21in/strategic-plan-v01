// src/components/Calendar.js
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';
import '@fullcalendar/common/main.css';
//import '@fullcalendar/daygrid/main.css';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const handleDateClick = (info) => {
    const title = prompt('Enter event title');
    if (title) {
      setEvents([...events, { title, start: info.dateStr }]);
    }
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      dateClick={handleDateClick}
    />
  );
};

export default Calendar;
