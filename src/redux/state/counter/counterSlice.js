import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        incriment: (state) => {
            state.value = state.value + 1
        },
        decriment: (state) => {
            state.value = state.value - 1
        },
        reset:(state)=>{
            state.value=state.value=0
        }
    }
})

export const {incriment,decriment,reset}=counterSlice.actions
export default counterSlice.reducer