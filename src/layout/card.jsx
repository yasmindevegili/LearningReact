import React from "react";
import './card.css';

export default (props) => {
  
  const style = {
    backgroundColor: props.color || '#511b85a8',
    borderColor: props.color || '#511b85a8',
  }

  return (
    <div className="card" style={style}>
      <div className="title">{props.titulo}</div>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};
