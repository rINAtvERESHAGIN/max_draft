import React from "react";
import styled from "styled-components";
import Task from "./Task";
import {Droppable} from "react-beautiful-dnd";


const Container = styled.div`
margin: 8px;
border 1px solid lightgrey;
border-radius: 2px
`;

const Title = styled.h3`
    padding: 8px;
`;

const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'lightblue' : 'white')};
`;


const Column = props => {
  return (
    <Container>
      <Title>{props.column.title}</Title>

      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <TaskList
            // innerRef={provided.innerRef}
            ref={provided.innerRef}
            {...provided.droppableProps}

            isDraggingOver={snapshot.isDraggingOver}
          >
            {props.task.map((task, index) => (
              <Task index={index} key={task.id} task={task}/> /// !!!!!!
            ))}

            у

          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}

export default Column;
