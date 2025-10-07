import React from "react";
import "../styles/StarsMap.css";

function StarsMap({ goal, onClose }) {
  return (
    <div className="star-card-overlay" onClick={onClose}>
      <div className="star-card" onClick={(e) => e.stopPropagation()}>
        <h3>{goal.title}</h3>
        <p><strong>Descripción:</strong> {goal.description}</p>
        <p><strong>Fecha:</strong> {goal.date}</p>
        <p><strong>Tipo:</strong> {goal.type}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default StarsMap;
