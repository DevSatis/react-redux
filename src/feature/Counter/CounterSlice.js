import { createSlice } from "@reduxjs/toolkit";

const initailState = {
    count : 0,
}

export const CounterSlice = ({
    name : "counter",
    initailState,
    reducers:{
        increment: (state)=>{
            state.count +=1;
        },
        decrement: (state)=>{
            state.count -=1;
        }
    }
});

export const {increment , decrement } = CounterSlice.actions;
export default CounterSlice.reducers;