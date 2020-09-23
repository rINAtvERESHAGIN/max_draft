import React from "react";
import TodoItems from "./TodoItems";

import './styles/todoitems.css'


class Todo extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }


    addItem = (e) => {
        let itemArray = this.state.items;

        if (this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });
            this.setState({
                items: itemArray
            });
            this._inputElement.value = "";
        }
        console.log(this.printHellow);
        e.preventDefault();

    }

    handleDeleteOnClick = (index) => {
        let qwerty = this.state.items;
        delete qwerty[index];
        this.setState({items: qwerty});
    }

    printHello = (hello) => {
        console.log(hello);
    }

    printHellow = () => {
        console.log("hellow");
    }

    callFun = () => {
        // this.printHello
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                               placeholder="введите задачу"/>
                        <button type="submit">добавить</button>
                    </form>
                </div>
                <TodoItems printHello={this.printHellow} deleteItem={this.handleDeleteOnClick} entries={this.state.items}/>
            </div>
        )
    }
}

/*
* поля
* */

export default Todo;
