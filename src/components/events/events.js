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
      <div className="other-events">
        <div className="other-heading">Visit Our Other Events</div>
        <div className="other-event">
          <a
            href="https://aitartexhibition.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Art Exhibition
          </a>
        </div>
        <div className="other-event">
          <a
            href="https://solutions21.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solutions '21
          </a>
        </div>
      </div>
    </div>
  );
}

export default Events;
