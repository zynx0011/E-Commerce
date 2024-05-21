import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "./FireBase.js";
import { useDispatch } from "react-redux";
import { Success } from "../store/authSlice.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { api } from "./axios.js";
const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandlerWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const response = await signInWithPopup(auth, provider);
      // console.log(response.user);
      const res = await api.post("/users/google", {
        name: response.user.displayName,
        email: response.user.email,
        profilePicture: response.user.photoURL,
      });
      // console.log(res);
      // console.log(res.data);
      const data = res.data;
      toast.success("Sign In Successfull with Google Auth");
      dispatch(Success(data));
      navigate("/");
    } catch (error) {
      console.log("error with google sign in", error);
      toast.error("Sign In Failed with Google Auth");
    }
  };

  return (
    <div>
      {/* <button
        type="button"
        className=" text-white p-2 rounded-lg w-full hover:bg-red-800"
        onClick={submitHandlerWithGoogle}
      >
        Sign in with Google{" "}
      </button> */}
      <button
        onClick={submitHandlerWithGoogle}
        className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"
      >
        <img
          className="mr-2 h-5"
          src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
          alt="google-icon"
        />{" "}
        Log in with Google
      </button>
    </div>
  );
};

export default OAuth;
