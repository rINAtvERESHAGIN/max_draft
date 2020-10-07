import React, {Component} from "react";
import {Droppable} from "react-beautiful-dnd";
import Item from "./Item";

// import './styles/todoitems.css'

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item, index) {
        return (
            <Droppable droppableId={item.key.toString()}>
                {(provided) => (
                    <Item
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        index={index}
                    >
                        <li key={item.key.toString()}
                            style={{
                                backgroundColor: item.text
                            }}
                            // onClick={() => this.props.handleChangeOnClick(index)}
                        >
                            {item.text}
                        </li>

                        {provided.placeholder}
                    </Item>
                )}

            </Droppable>
        )
    }


    render() {
        let todoEntries = this.props.entries;
        // вернет массив
        let listItems = todoEntries.map(this.createTasks);
        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;
