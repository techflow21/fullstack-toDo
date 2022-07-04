import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import AuthBox from "./AuthBox";
import { useGlobalContext } from "../context/GlobalContext";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

const Layout = () => {
  const { fetchingUser } = useGlobalContext();

  return fetchingUser ? (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  ) : (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<AuthBox />} />
        <Route path="/register" element={<AuthBox register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
