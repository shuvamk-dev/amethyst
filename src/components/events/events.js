import React from "react";
import { EventData } from "../../data/events-data";
import EventCard from "./event-card";
import "./events.css";

function Events() {
  const data = EventData;
  return (
    <div className="events">
      <div className="events-title">Amethyst '21 Events</div>
      <div className="gigs">
        {data.map((gig) => {
          return <EventCard gig={gig} />;
        })}
      </div>
    </div>
  );
}

export default Events;
