import React from "react";
import { MemoirData } from "../../data/memois-data";
import "./gallery.css";

function Gallery() {
  const data = MemoirData;
  return (
    <div className="gallery">
      {data.map((item) => {
        return (
          <div className="gallery-photo">
            <img src={item.image} alt={item.title} className="gallery-banner" />
            <div className="photo-title">{item.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
