import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Layout/Navbar'
import AddBooks from '../pages/AddBooks'
import BooksView from '../pages/BooksView'
import CounterPage from '../pages/CounterPage'
import EditBook from '../pages/EditBook'
import Error from '../pages/Error'
import Home from '../pages/Home'

const Index = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/add-books' element={<AddBooks />} />
                    <Route path='/view-books' element={<BooksView />} />
                    <Route path='/edit-book' element={<EditBook/>}/>
                    <Route path='/counter' element={<CounterPage />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Index