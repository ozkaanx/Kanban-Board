import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { listData } from "../../data";
import BoardList from "../BoardList/BoardList";

/* Style */
import "./style.scss";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceColumn, items: sourceItems },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copyItems = [...column.items];
    const [removed] = copyItems.splice(source.index, 1);
    copyItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: { ...column, items: copyItems },
    });
  }
};

function Board() {
  const [columns, setColumns] = useState(listData);
  return (
    <div className="board">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column]) => {
          return (
            <div className="board-list" key={id}>
              <BoardList id={id} column={column} />
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default Board;
