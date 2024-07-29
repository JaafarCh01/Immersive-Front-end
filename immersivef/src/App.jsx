import { useState } from 'react'
import ChipTabs from './components/ChipTabs'
import { RouterProvider , Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<ChipTabs />} />)
)


function App() {


  return <RouterProvider router={router} />
}

export default App
