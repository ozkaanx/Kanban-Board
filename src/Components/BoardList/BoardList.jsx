import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Card from "../Card/Card";

/* Style */
import "./style.scss";

function BoardList({ id, column }) {
  return (
    <Droppable droppableId={id} key={id}>
      {(provided, snapshot) => {
        return (
          <div
            className="board-column"
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              background: snapshot.isDraggingOver ? "#262626" : "#262626",
            }}
          >
            <div className="board-column-title">
              <p>{column.name}</p>
            </div>
            {column.items.map((item, index) => {
              return <Card key={item.id} item={item} index={index} />;
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
}

export default BoardList;
