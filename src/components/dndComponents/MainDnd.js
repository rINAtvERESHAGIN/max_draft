import React, {useState} from "react";
import initialData from "./initialData";
import Column from "./column";
import {DragDropContext} from "react-beautiful-dnd";


const MainDnd = props => {
    const [state, setState] = useState(initialData);

    const onDragEnd = result => {
        // destination == пункт назначения
        // source == источник
        const {
            destination, source, drag,
            draggableId
        } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }
        // ------------------main function for remove data

        const column = state.columns[source.droppableId];
        const newTaskId = Array.from(column.taskIds);

        newTaskId.splice(source.index, 1);
        newTaskId.splice(destination.index, 0, state.tasks[draggableId].id);

        const newColumn = {
            ...column,
            taskIds: newTaskId,
        }

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newColumn.id]: newColumn, // перезапишет эту колонку по такому же id !!!
            }
        }

        setState(newState);
    };


    return (
        <DragDropContext
            onDragEnd={onDragEnd}
        >
            {state.columnOrder.map((columnId, i) => {

                const column = state.columns[columnId];

                const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

                return <Column key={column.id} column={column} task={tasks}/>;
            })}
        </DragDropContext>
    )
};

export default MainDnd;
