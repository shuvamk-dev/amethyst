import React from "react";
import "./bottom.css";
import masks from "../../../assets/videos/mask.mp4";

function Bottom() {
  return (
    <div className="bottom">
      <div className="bottom-desc">
        Mardi Gras is a New Orlean’s Carnival and includes parades, costume
        balls and a tradition that empowers different cultures. It’s a way of
        life for the New Orleanians: to fight tough times with joy and laughter
        and if you are reading this, we believe you want to do exactly the
        same.We are here to rejuvenate all you lovely people who want to feel
        the happiness of your good old times while accepting the harsh changes
        this pandemic has brought. With the fest revolving around this theme, we
        intend to spread positivity and propagate the idea that we have taken a
        break from the pandemic to celebrate and party as we used to. Yesterday
        wasn't happy and tomorrow might not be too. But today, as long as we
        have you with us, we promise to give you an amazing time, and get away
        from the sickening pandemic which has exhausted the positivity in all of
        us. Let’s Pardi Gras!!
      </div>
      <div>
        <video src={masks} autoPlay loop muted className="masks" />
      </div>
    </div>
  );
}

export default Bottom;
