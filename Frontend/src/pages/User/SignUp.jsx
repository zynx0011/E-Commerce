import OAuth from "@/utils/OAuth";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Success } from "@/store/authSlice";
import { api } from "@/utils/axios";

const SignUp = () => {
  const Navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(
        `/users/SignUp`,
        {
          email,
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      // console.log(res);
      dispatch(Success(res?.data?.data));
      toast.success("User Registered Successfull");
      Navigate("/");
    } catch (err) {
      toast.error("Sign Up Failed");
      console.log(err.message);
    }
  };
  return (
    <div className="flex min-h-[104vh] min-w-screen  w-full items-center justify-center dark:bg-black text-gray-600  bg-gray-50 ">
      <div className="relative">
        <div className="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20">
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
                  strokeWidth="1"
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
        <div className="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20">
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
                  strokeWidth="1"
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

        <div className="relative flex flex-col sm:w-[30rem] rounded-xl border-gray-400 bg-white shadow-lg px-4">
          <div className="flex-auto p-6">
            <div className="mb-4 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
              <Link
                href="#"
                className="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500"
              >
                <span className="flex-shrink-0 text-3xl font-black  tracking-tight opacity-100">
                  E-Commerce
                </span>
              </Link>
            </div>
            <h4 className="mb-2 font-medium text-center text-gray-700 xl:text-xl">
              Welcome to Ecommerce!
            </h4>

            <form id="" classNameName="mb-4" onSubmit={submitHandler}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text font-semibold text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-white py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  id="email"
                  name="email-username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus=""
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text  font-semibold  text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-white py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  autoFocus=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <label
                    className="mb-2 inline-block font-semibold  text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                </div>
                <div className="relative flex w-full flex-wrap items-stretch">
                  <input
                    type="password"
                    id="password"
                    className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg-white py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    name="password"
                    placeholder="············"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <button
                  className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle  text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none text-lg font-semibold"
                  // type="submit"
                >
                  Sign Up
                </button>
                <OAuth />
              </div>
            </form>

            <p className="mb-4 text-center">
              Already Have An Account ?
              <Link
                to="/api/v1/users/SignIn"
                classNameName="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
              >
                {" "}
                Sign In{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
