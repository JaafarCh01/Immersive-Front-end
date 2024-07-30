import { useState } from 'react'

import { RouterProvider , Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import { CoursesCatalogue } from './pages/CoursesCatalogue'

const router = createBrowserRouter(
  createRoutesFromElements(

  <Route path="/" element={<MainLayout/>} >

  <Route index element={<HomePage/>} />
  <Route path="Courses" element={<CoursesCatalogue/>} />

  </Route>
)
    
);


function App() {


  return <RouterProvider router={router} />
}

export default App
