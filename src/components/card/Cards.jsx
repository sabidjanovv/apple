import React from "react";
import "./Cards.scss";

function Cards({ cards }) {
  const cardItems = cards.map((card, index) => (
    <div
      style={{
        background: `url(${card.imageUrl}) no-repeat center/cover`,
      }}
      className="card"
      key={index}
    >
      <div className="card-content">
        {/* Agar 'buttons' mavjud bo'lsa, h2 va p ni pastga joylashtiring */}
        {!card.buttons || card.buttons.length === 0 ? (
          <>
            <h2 style={{ color: card.pcl }} className="card-title">
              {card.title}
            </h2>
            <p className="card-description">{card.description}</p>
          </>
        ) : (
          <>
            <div className="card-text">
              <h2 style={{ color: card.pcl }} className="card-title">
                {card.title}
              </h2>
              <p className="card-description">{card.description}</p>
            </div>
            {/* Buttons */}
            <div className="card-buttons">
              {card.buttons.map((buttonText, idx) => (
                <button
                  key={idx}
                  className="card-button"
                  style={{
                    background:
                      buttonText === "Learn more" ||
                      buttonText === "Get your estimate" ||
                      buttonText === "Find your deal"
                        ? card.cl === "white"
                          ? "#0171E2" 
                          : "#0171E2" 
                        : "transparent", 
                    color:
                      buttonText === "Learn more" ||
                      buttonText === "Get your estimate" ||
                      buttonText === "Find your deal"
                        ? card.cl === "white"
                          ? "white" 
                          : "white" 
                        : card.cl === "white"
                        ? "white" 
                        : "#0171E2",
                    border:
                      buttonText === "Learn more" ||
                      buttonText === "Get your estimate" ||
                      buttonText === "Find your deal"
                        ? card.cl === "white"
                          ? "none" // No border for white button background
                          : "1px solid #0171E2"
                        : `1px solid ${
                            card.cl === "white" ? "white" : "#0171E2"
                          }`,
                  }}
                >
                  {buttonText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="cards-grid">{cardItems}</div>
    </div>
  );
}

export default Cards;
