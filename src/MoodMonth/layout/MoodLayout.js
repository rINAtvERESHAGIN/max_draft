import React, {useState} from "react";
import styled from "styled-components";
import MoodInfo from "../components/MoodInfo";


const Container = styled.div`
    display: flex,
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width:100%;
    height:100%;
    background-color: lightcoral;
`;

const MoodLayout = props => {

    const equelMonth = [
        [1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19, 20, 21],
        [22, 23, 24, 25, 26, 27, 28],
        [29, 30],
    ];

    const finalDayOfMonth = new Date(2020, new Date().getMonth() + 1, 0).getDate();
    const today = new Date().getDate();


    const checkDayInMonth = (finalDayOfMonth) => {
        console.log('call fun');

        if (30 === finalDayOfMonth) {
            return equelMonth;
        } else if (finalDayOfMonth > 30) {
            let newMass = equelMonth;
            newMass[newMass.length - 1].push(31);
            return newMass;
        }
    };

    const [calendarMonth, setCalendarMonth] = useState(checkDayInMonth(finalDayOfMonth));

    const days = () => {
        let mass = [];
        for (let i = 1; i < finalDayOfMonth; i++) {
            mass.push(i);
        }
        return mass;
    };


    return (
        <Container>
            <table border={2}>
                <tbody>
                {equelMonth.map((week, index) => (
                    <tr key={index}>
                        {week.map((day, index) => (
                            <td style={{height: "auto", width: "auto"}}
                                key={index}>
                                <MoodInfo key={index} dayNumber={day}/></td>))}
                    </tr>
                ))}
                </tbody>
            </table>
        </Container>
    );
}

export default MoodLayout;
