import React from "react";
import "./Hero.scss";

const Hero = ({ title, desc, cl, url, buttons, btn_bg, pcl }) => {
  return (
    <div className="container">
      <div
        style={{ background: `url(${url}) no-repeat center/cover`, color: cl }}
        className="hero"
      >
        <h2 style={{ color: pcl }}>{title}</h2>
        <p style={{ color: pcl }}>{desc}</p>
        <div className="hero__buttons">
          {buttons.map((btn, inx) => (
            <button
              key={inx}
              className="hero__btn"
              style={{
                background:
                  btn === "Learn more"
                    ? btn_bg === "blue"
                      ? "#0171E2" 
                      : "white" 
                    : "transparent", 
                color:
                  btn === "Learn more"
                    ? btn_bg === "blue"
                      ? "white" 
                      : "black" 
                    : btn_bg === "blue"
                    ? "#0171E2" 
                    : "white", 
                border:
                  btn === "Learn more"
                    ? btn_bg === "blue"
                      ? "none"
                      : "1px solid #0171E2" 
                    : `1px solid ${btn_bg === "blue" ? "#0171E2" : "white"}`,
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
