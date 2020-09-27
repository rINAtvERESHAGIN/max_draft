import React from "react";

import Color from "./Color";

import ColorName from "./ColorName";

import './style.css'
import Todo from "../todo/Todo";
import TodoItems from "../todo/TodoItems";
import '../todo/styles/todoitems.css';


let obj = {
    name: 'objectName',

    state: {
        stateDate: Date.now()
    },

    callMum: () => {
        console.log('hi mum, i miss you');
    },
};

class MainLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colorValue: '',
            maxSize: 6,
            defaultColor: '#FFD700',
            items: [],
        }
    }


    handleGetColor = (e) => {
        this.setState({colorValue: this._inputElement.value});
        e.preventDefault();
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

    handleChangeOnClick = (index) => {
        console.log(this.state.items);

        let color = this.state.items;

        this.setState({colorValue:color[index].text});
    }

    render() {
        return (
            <div className="main-layout-style todoListMain">
                <Color defaultColor={this.state.defaultColor} colorValue={this.state.colorValue}/>
                <ColorName defaultColor={this.state.defaultColor} colorValue={this.state.colorValue}/>
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a}
                           placeholder='enter color to see'
                           onChange={this.handleGetColor}
                    />

                    <button type="submit">Add color</button>
                </form>

                <TodoItems handleChangeOnClick={this.handleChangeOnClick}  entries={this.state.items}/>

            </div>
        );
    }
}



export default MainLayout;

