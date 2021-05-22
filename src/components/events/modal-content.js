import React from "react";
import "./modal-content.css";

function ModalContent({ gig }) {
  return (
    <div className="modal-content">
      <div className="gig-name">{gig.name}</div>
      <div className="modal-image-conatiner">
        <img src={gig.image} className="modal-banner" alt={gig.name} />
      </div>
      <div className="gig-description">{gig.description}</div>
      <div className="gig-icons">
        <div className="gig-box">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/achievement-3141974-2617511.png"
            className="gig-icon"
            alt="icon"
          />

          <div className="gig-prize">Prizes Worth Rs. {gig.prize}</div>
        </div>
        <div className="gig-box">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/calendar-3141977-2617514.png"
            className="gig-icon"
            alt="icon"
          />

          <div className="gig-date">Date of Event: {gig.date}</div>
        </div>
        <div className="gig-box">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/business-and-security-3141981-2617518.png"
            className="gig-icon"
            alt="icon"
          />

          <div className="gig-rule">
            <a href={gig.ruleBook} target="_blank" rel="noopener noreferrer ">
              Rule Book
            </a>
          </div>
        </div>
      </div>
      <div className="event-heads"> Event Heads</div>
      <div className="gig-judges">
        {gig.head.map((item) => {
          return (
            <div
              className="gig-judge"
              //   style={{
              //     backgroundImage: `url(${item.image})`,
              //     backgroundSize: "contain",
              //     backgroundRepeat: "no-repeat",
              //   }}
            >
              <img
                src={item.image.default}
                className="judge-image"
                alt="imag"
              />
              <div className="judge-name">{item.name}</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <img
                  src="https://cdn.iconscout.com/icon/free/png-128/whatsapp-135-493160.png"
                  className="team-icon"
                  alt="facebook"
                />
                <div className="judge-number"> {item.contact}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="register">
        <a
          href="https://hij8lgvvmue.typeform.com/to/utPDgrTb"
          target="_blank"
          rel="noopener noreferrer"
        >
          REGISTER
        </a>
      </div>
    </div>
  );
}

export default ModalContent;
