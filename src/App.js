import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import TodoList from "./pages/todoList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
          {/* 메인 */}
          <Route path="/signin" element={<SignIn />} />
          {/* 로그인 */}
          <Route path="/signup" element={<SignUp />} />
          {/* 회원가입 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
