import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../../utils/OAuth";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../../../config";
import { api } from "@/utils/axios";

const SignIn = () => {
  const Navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await api.post(`/users/SignIn`, {
        email,
        password,
      });
      // console.log(res.data?.data);
      dispatch(signInSuccess(res));
      toast.success("Sign In Successfull");
      Navigate("/");
    } catch (err) {
      dispatch(signInFailure(err));
      toast.error("Sign In Failed");
      console.log(err);
    }
  };

  return loading ? (
    <h1 className="text-center font-bold text-2xl">Loading...</h1>
  ) : (
    <div class="flex min-h-screen min-w-screen w-full dark:bg-black items-center justify-center text-gray-600  bg-gray-50 ">
      <div class="relative ">
        {/* //svg */}
        <div class="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20">
          <svg
            id="patternId"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="a"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(0.6) rotate(0)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path
                  d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                  stroke-width="1"
                  stroke="none"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="800%"
              height="800%"
              transform="translate(0,0)"
              fill="url(#a)"
            />
          </svg>
        </div>
        <div class="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20">
          <svg
            id="patternId"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="b"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(0.5) rotate(0)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path
                  d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                  stroke-width="1"
                  stroke="none"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="800%"
              height="800%"
              transform="translate(0,0)"
              fill="url(#b)"
            />
          </svg>
        </div>
        {/* // section */}
        <div class="relative flex flex-col sm:w-[30rem] rounded-xl border-gray-400 bg-white shadow-lg px-4 ">
          <div class="flex-auto p-6">
            <div class="mb-6 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
              <Link
                to="/"
                class="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500"
              >
                <span class="flex-shrink-0 text-3xl font-black  tracking-tight opacity-100">
                  E-Commerce
                </span>
              </Link>
            </div>
            <h4 class="mb-2 font-medium text-center text-gray-700 xl:text-xl">
              Welcome to Ecommerce!
            </h4>
            <p class="mb-6 text-gray-500 text-center">
              Please sign in to access your account
            </p>

            <form id="" className="mb-4" onSubmit={submitHandler}>
              <div class="mb-4 ">
                <label
                  for="email"
                  class="mb-2 inline-block text  font-semibold  text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="block w-full bg-white  cursor-pointer rounded-md border border-gray-400 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:shadow"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  // autofocus=""
                />
              </div>
              <div class="mb-4">
                <div class="flex justify-between">
                  <label
                    class="mb-2 inline-block font-semibold  text-gray-700"
                    for="password"
                  >
                    Password
                  </label>
                  <a
                    href="auth-forgot-password-basic.html"
                    class="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
                  >
                    <small class=" ">Forgot Password?</small>
                  </a>
                </div>
                <div class="relative flex w-full flex-wrap items-stretch">
                  <input
                    type="password"
                    id="password"
                    class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg-white py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    name="password"
                    placeholder="············"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div class="mb-4">
                <button
                  class="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle  text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none text-lg font-semibold"
                  // type="submit"
                >
                  Sign in
                </button>
                <>
                  <OAuth />
                </>
              </div>
            </form>

            <p class="mb-4 text-center">
              Don't Have An Account?
              <Link
                to="/api/v1/users/Signup"
                className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
              >
                {" "}
                Create an account{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
