import React, { useState, useEffect } from "react";
import axios from "axios";

import "./eventsDetails.css";

function EventsDetails(id) {
  const [event, setEvent] = useState(null);
  

  useEffect(() => {
    axios
      .get(`http://localhost:5000/event/${id}`)
      .then((response) => {
        const eventData = response.data;
        setEvent(eventData.message);
        // console.log(eventData.message.image);
        
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // Wait for event data to load
  if (!event) {
    return <div className="no-event">Error Retrieve Data</div>;
  }

  

  return (
    <>
    <div className="container-event">
      <div className="section-left">
        <div className="event-image">
          <img alt="EventImage" src={`/home/abdelhadi-arab/Desktop/real-client/backend/${event.image}`} height={350} width={550} />
        </div>
        <p className="event-description">{event.description}</p>
      </div>

      <div className="section-right">
        {/* Type */}
        <dl className="type">
          <dt>
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            {" Type"}
          </dt>
          <dd>{event.type}</dd>
        </dl>

        {/* Status */}
        <dl className="status">
  <dt>
    <i className="fa fa-th-large" aria-hidden="true"></i>
    {" Status"}
  </dt>
  {event.status === "open" && (
    <dd className="text-open">{event.status}</dd>
  )}
  {event.status === "closed" && (
    <dd className="text-closed">{event.status}</dd>
  )}
  {event.status === "canceled" && (
    <dd className="text-canceled">{event.status}</dd>
  )}
</dl>

        {/* Capacity */}
        <dl className="capacity">
          <dt>
            <i className="fa fa-th-large" aria-hidden="true"></i>
            {" Capacity"}
          </dt>
          <dd>{event.capacity}</dd>
        </dl>

        {/* Deadline Date */}
        <dl className="deadline-date">
          <dt>
            <i className="fa fa-th-large" aria-hidden="true"></i>
            {" Deadline Date"}
          </dt>
          <dd>{event.deadline_dateTime}</dd>
        </dl>

        {/* Event Date */}
        <dl className="start-date">
          <dt>
            <i className="fa fa-th-large" aria-hidden="true"></i>
            {" Startup Date"}
          </dt>
          <dd>{event.event_dateTime}</dd>
        </dl>

        {/* Goals */}
        <div className="event-goal">
          <div className="event-goal-label">
            <label>Goals</label>

            </div>
            <div className="event-goal-input">
              <p className="goal-target">
                {event.goals}
              </p>
            </div>
          </div>

          {/* target_audience */}
          <div className="target-audience">
            <div className="target-audience-label">
              <label>Target Audience</label>
            </div>
            <div className="target-audience-input">
              <p className="goal-target">
                {event.target_audience}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventsDetails;
