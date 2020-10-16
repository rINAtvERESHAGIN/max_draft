import {createAction, handleAction} from "redux-actions";

import {createActions, handleActions} from "redux-actions";


// export const increment = createAction("INCREMENT");
// export const decrement = createAction("DECREMENT");

export const {increment, decrement} = createActions({
    INCREMENT: (amount = 1) => ({amount: amount}),
    DECREMENT: (amount = 1) => ({amount: -amount})
});

export const {getImage} = createActions({
    GET_IMAGE: (src = "") => ({src: src}),
});

const initialState = {
    counter: 0,
    imageSrc: "https://images.unsplash.com/photo-1492979423821-7193e8938424?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600",
}

const reducerTest = handleActions(
    {
        [increment]: (state, {payload: {amount}}) => ({...state, counter: state.counter + amount,}),
        [decrement]: (state, {payload: {amount}}) => ({...state, counter: state.counter + amount}),
        [getImage]: (state, {payload: {src}}) => ({...state, imageSrc: src}),
    },
    initialState
)

export default reducerTest;
