import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import PrivateRoute from "../Component/PrivateRoute";
import EmptyPage from "./EmptyPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/empty" element={<EmptyPage />} />
      <Route path="/menu" element={<PrivateRoute><MenuPage/></PrivateRoute>} />
    </Routes>
  );
}

export default AllRoutes;
