import React from 'react';
import './style.css'

class ColorName extends React.Component {


    render() {
        return (
            <div className="color-name-style">
                <span className="color-text">
                    {
                        this.props.colorValue === '' ? this.props.defaultColor: this.props.colorValue
                    }
                </span>
            </div>
        )
    }
}



export default ColorName;
