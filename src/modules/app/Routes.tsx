import { Routes, Route } from "react-router-dom";

import Login from "modules/login";
import Profile from "modules/profile";
import Todo from "modules/todo";
import ErrorPage from "./ErrorPage";
import Posts from "modules/posts";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />;
      <Route path="/profile" element={<Profile />} />;
      <Route path="/todos" element={<Todo />} />;
      <Route path="/posts" element={<Posts />} />;
      <Route path="*" element={<ErrorPage />} />;
    </Routes>
  );
};

export default RoutesComponent;
