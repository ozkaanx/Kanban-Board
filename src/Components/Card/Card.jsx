import React from "react";
import { Draggable } from "react-beautiful-dnd";

import "./style.scss";

function Card({ item, index }) {
  return (
    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
      {(provided, snapshot) => {
        return (
          <div 
            className="list-card"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              backgroundColor: snapshot.isDragging ? "goldenrod" : item.color,
              color: "white",
              ...provided.draggableProps.style,
            }}
          >
            <div className="card-title">{item.title}</div>
            {(item.text === "" && <> </>) || (
              <div className="card-description">{item.text}</div>
            )}
          </div>
        );
      }}
    </Draggable>
  );
}

export default Card;
