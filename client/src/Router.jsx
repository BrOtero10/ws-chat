import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogInPage from "./pages/LogInPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import ChatPage from "./pages/ChatPage";
import AddFriends from "./pages/AddFriends";
import MyProfile from "./pages/MyProfile";

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage/>} path="/" exact />
        <Route element={<LogInPage/>} path="/login" exact />
        <Route element={<SignUpPage/>} path="/signup" exact />
        <Route element={<ChatPage/>} path="/chat" exact />
        <Route element={<ChatPage/>} path="/chat/:friendId" exact />
        <Route element={<AddFriends/>} path="/add_friends" exact />
        <Route element={<MyProfile/>} path="/my_profile" exact />
      </Routes>
    </BrowserRouter>
  )
}