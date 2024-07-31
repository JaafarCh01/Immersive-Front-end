import { useState } from 'react'

import { RouterProvider , Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import { CoursesCatalogue } from './pages/CoursesCatalogue'
import { About } from './pages/About'
import Contact from './pages/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(

  <Route path="/" element={<MainLayout/>} >

  <Route path="/" element={<HomePage/>} />
  <Route path="courses" element={<CoursesCatalogue/>} />
  <Route path="about" element={<About/>} />
  <Route path="contact" element={<Contact/>} />
  </Route>
)
    
);


function App() {


  return <RouterProvider router={router} />
}

export default App
