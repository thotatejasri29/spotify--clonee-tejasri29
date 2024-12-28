import React from "react"
import DispalyHome from "./DisplayHome"
import { Route, Routes } from 'react-router-dom'
const Display = () => {
  return (
    <div className="w-[100] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0" >
     <Routes>
      <Route path='/' element={<DispalyHome/>} />
     </Routes>
    </div>
  )
}

export default Display