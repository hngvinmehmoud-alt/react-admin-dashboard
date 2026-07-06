import "./calendar.css"
import FullCalendar    from '@fullcalendar/react'
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
// import themePlugin from '@fullcalendar/themes/classic'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Paper from "@mui/material/Paper"


function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}


function Calendar() {

  // eslint-disable-next-line no-unused-vars
  const [weekendsVisible , setWeekendsVisible]=useState(true)
  const [currentEvents , setCurrentEvents]=useState([])
  let eventGuid = 0
  // const todayStr = new Date().toISOString().replace(/T.*$/, '')
  //  const INITIAL_EVENTS = [
  //   {
  //     id: createEventId(),
  //     title: 'All-day event',
  //     start: todayStr
  //   },
  //   {
  //     id: createEventId(),
  //     title: 'Timed event',
  //     start: todayStr + 'T12:00:00'
  //   }
  // ]
  
  function createEventId() {
    return String(eventGuid++)
  }

  
   const handleDateSelect = (selectInfo) => {
      let title = prompt('Please enter a new title for your event')
      let calendarApi = selectInfo.view.calendar
  
      calendarApi.unselect() // clear date selection
  
      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
    }
  
   const handleEventClick = (clickInfo) => {
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    }
  
   const handleEvents = (events) => {
     
      setCurrentEvents(events)
    }
  




  return (
    <Stack direction={"row"}>

      <Paper className='demo-app-sidebar'>
        
        
        
          <h2 style={{textAlign:"center"}}>All Events ({currentEvents.length})</h2>
          <ul>
            {currentEvents.map(renderSidebarEvent)}
          </ul>
        
      </Paper>

       <div className='demo-app-main'>
                <FullCalendar
                  id='fullcalendar'
                  plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                  }}
                  initialView='dayGridMonth'
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  weekends={weekendsVisible}
                  // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                  select={handleDateSelect}
                  eventContent={renderEventContent} // custom render function
                  eventClick={handleEventClick}
                  eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                  /* you can update a remote database when these fire:
                  eventAdd={function(){}}
                  eventChange={function(){}}
                  eventRemove={function(){}}
                  */
                />
              </div>
    </Stack>
  )
}

export default Calendar