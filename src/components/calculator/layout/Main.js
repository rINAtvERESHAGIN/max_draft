import React, {useState} from "react";
import Number from "../components/Number";
import Solution from "../components/Solution";
import '../components/styles/main-style.css';
import '../components/styles/number-style.css';


const Main = () => {

    const [value, setValue] = useState('0');

    const allNumber = [
        [7, 8, 9, '-'],
        [4, 5, 6, '*'],
        [1, 2, 3, '/'],
    ];

    const returnNumber = (number) => {

        const numberStr = number.toString();
        // есть value

        if (value === '0') {
            setValue(numberStr);
        } else {
            setValue(value.toString() + numberStr)
        }

    }

    const clear = () => {
        setValue('0');
    }

    const getAnswer = () => {
        setValue(eval(value));
    }

    return (
        <div>
            {/*
        будет таблица которая будет отображать
        номера
        действия

        */}


            <table border={0}
                   cellSpacing={0}
                   cellPadding={0}
                   className="table-style"
            >
                <tbody>

                {<Solution value={value}/>}

                <tr>
                    <td className="clear" colSpan={2} onClick={clear}>
                        clear
                    </td>

                    <td className="main-style" onClick={getAnswer} >=</td>

                    <td className="main-style">+</td>

                </tr>

                {allNumber.map((numberSet, index) => (
                    <tr>
                        {numberSet.map((number, index) => {
                            return (
                                <Number number={number}
                                        returnNumber={returnNumber}
                                />
                            )
                        })}
                    </tr>
                ))}


                </tbody>
            </table>
        </div>
    )
}

export default Main;
