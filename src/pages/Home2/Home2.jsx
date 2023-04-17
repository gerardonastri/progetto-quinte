import React, {useState, useRef} from 'react'
import './Home2.css'

import FullCalendar from "@fullcalendar/react";
// import interactionPlugin from "@fullcalendar/interaction";
// import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from '@fullcalendar/daygrid' 

const Home2 = () => {
    const [events, setEvents] = useState([])
    const calendarRef = useRef(null)

    const handleDateClick = () => {

    }

    const today = new Date()

  return (
    <div className='container'>
        <div className="wrapper">
            <div className="home__calendar">
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                weekends={false}
                validRange={{start: today}}
            />
            </div>
        </div>
    </div>
  )
}

export default Home2