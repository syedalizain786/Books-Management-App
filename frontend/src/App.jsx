import React from 'react'
import {Routes, Route} from "react-router-dom"
import CreateBooks from './pages/CreateBooks'
import DeleteBooks from './pages/DeleteBooks'
import EditBook from './pages/EditBooks'
import ShowBook from './pages/ShowBooks'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/books/create' element={<CreateBooks/>} />
        <Route path='/books/edit/:id' element={<EditBook/>} />
        <Route path='/books/delete/:id' element={<DeleteBooks/>} />
        <Route path='books/details/:id' element={<ShowBook/>} />
    </Routes>
  )
}

export default App
