import React from "react";
import './styles/number-style.css'

const Number = (props) => {
    const {number, returnNumber} = props;

    const handleOnClick = () => {
        /*будет возвращать номер для того что бы сделать
        * с ним действие*/

    }
    return (
        <td className="main-style"
             onClick={() => {
                 returnNumber(number)
             }}
        >
            {number}
        </td>
    )
}


export default Number;
