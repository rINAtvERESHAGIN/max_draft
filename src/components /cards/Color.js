import React from "react";
import './style.css'

class Color extends React.Component {
constructor(props) {
    super(props);
}

    render() {
        return (

            <div className='color-style'
                 style={{
                 backgroundColor: this.props.colorValue === '' ? this.props.defaultColor : this.props.colorValue
                 }}>
            </div>);

    }
}

export default Color;
