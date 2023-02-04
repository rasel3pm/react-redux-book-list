import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../state/counter/bookSlice";
import counterReducer from "../state/counter/counterSlice"

export default configureStore({
    reducer:{
        counter:counterReducer,
        bookReducer:bookReducer
    }
})