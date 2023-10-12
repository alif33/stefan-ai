import React from "react"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NewChat from "./pages/NewChat"
import Chat from "./pages/Chat"

const App:React.FC = ()=>{

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new-chat" element={<NewChat />} />
        <Route path="/c/:id" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
