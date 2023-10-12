import React from "react"
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NewChat from "./pages/NewChat"
import Chat from "./pages/Chat"

const App:React.FC = ()=>{

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new-chat" element={<NewChat />} />
        <Route path="/c/:id" element={<Chat />} />
      </Routes>
    </HashRouter>
  )
}

export default App
