import React, { useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { api } from "./utils/axios.js";
import { useDispatch } from "react-redux";
import { Success } from "./store/authSlice.js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/users/current-user");
        dispatch(Success(res.data?.data));
      } catch (error) {
        dispatch(Success(null));
      }
    })();
  }, []);

  return (
    <div className="bg-white text-black  dark:text-white dark:bg-black">
      <div className="min-h-[10vh]">
        {" "}
        <Header />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
      <main className="min-h-screen  bg-white z-50 text-black dark:text-white dark:bg-black">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
