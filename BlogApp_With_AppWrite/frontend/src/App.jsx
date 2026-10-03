import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./app.css";
import AuthService from "./Appwrite/Auth";
import { login, logout } from "./Store/authSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AuthService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between justify-center bg-gray-400">
      <div className="w-full block">
        <Header />
        <Footer />
      </div>
    </div>
  ) : null;
};

export default App;
