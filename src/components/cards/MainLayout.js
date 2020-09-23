import React from "react";

import Color from "./Color";

import ColorName from "./ColorName";

import './style.css'
import Todo from "../todo/Todo";

let obj = {
    name:'objectName',

    state:{
        stateDate:Date.now()
    },

    callMum: () =>{
      console.log('hi mum, i miss you');
    },
};

class MainLayout extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            colorValue:'',
            maxSize:6,
            defaultColor:'#FFD700'
        }
    }


    handleGetColor = (e) => {
        this.setState({colorValue:this._inputElement.value});
        e.preventDefault();
    }

    render(){
        return(
            <div className="main-layout-style">
                <Color defaultColor={this.state.defaultColor} colorValue={this.state.colorValue}/>
                <ColorName defaultColor={this.state.defaultColor} colorValue={this.state.colorValue}/>
                <from>
                    <input ref={(a) => this._inputElement = a}
                           placeholder='enter color to see'
                           onChange={this.handleGetColor}
                    />
                </from>
            </div>
        );
    }
}



export default MainLayout;

