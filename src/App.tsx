import { useState } from "react"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NewChat from "./pages/NewChat"
import Chat from "./pages/Chat"

function App() {
  const [count, setCount] = useState(0)

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
