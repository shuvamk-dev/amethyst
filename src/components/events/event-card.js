import React, { useState } from "react";
import "./event-card.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ModalContent from "./modal-content";

function EventCard({ gig }) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const bg = gig.image;
  return (
    <div className="card">
      <Modal open={open} onClose={onCloseModal} center>
        <ModalContent gig={gig} />
      </Modal>
      <div
        onClick={onOpenModal}
        style={{
          backgroundImage: `url(${gig.image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="bannerCard"
      ></div>
      <div className="card-title">{gig.name}</div>
      <div className="card-label">{gig.category}</div>
    </div>
  );
}

export default EventCard;
