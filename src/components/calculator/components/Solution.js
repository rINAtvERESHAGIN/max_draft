import React from "react";
import './styles/main-style.css';

const Solution = (props) => {
    const {value} = props;

    return (
        <tr>
            <td className="solution" colSpan={4}>
                <span>{value}</span>
            </td>
        </tr>
    )
}

export default Solution;
