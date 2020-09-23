import React, {Component} from "react";

// import './styles/todoitems.css'

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item, index) {
        return <li   key={item.key}>
            <div style={{
                display:'flex'
            }}
            onClick={() => this.props.deleteItem(index)}

            >
                {item.text}
            </div>
        </li>
    }


    render() {
        let todoEntries = this.props.entries;
        // вернет массив
        let listItems = todoEntries.map(this.createTasks);
        console.log(typeof listItems);
        console.log(listItems)
        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;
