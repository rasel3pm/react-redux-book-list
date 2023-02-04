import { createSlice } from "@reduxjs/toolkit";

const initialBook={
    books:[
        {
            id:1,
            title:"Bangladesh",
            author:"Rasel"
        },
        {
            id:2,
            title:"Dhaka",
            author:"Rasel"
        }
    ]
}

export  const bookSlice= createSlice({
    name:"books",
    initialState:initialBook,
    reducers:{
        showBooks:(state)=>state,
        addBook:(state,action)=>{
            state.books.push(action.payload)
        },
        deleteBook:(state,action)=>{
            const id = action.payload;
            state.books =  state.books.filter((book)=>book.id !== id)
        }
    }
})

export const {showBooks,addBook,deleteBook}=bookSlice.actions
export default bookSlice.reducer