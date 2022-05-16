import Header from "./header";
import { Routes, Route } from "react-router-dom";
// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";
import ToDoList from "../routes/todo/TodoList";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/todo" element={<ToDoList />} />
      </Routes>
      <Routes>
        <Route path="/profile" user="me" element={<Profile />} />
      </Routes>
      <Routes>
        <Route path="/profile/:user" element={<Profile />}></Route>
      </Routes>
    </div>
  );
};

export default App;
