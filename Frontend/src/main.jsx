import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignIN from "./pages/User/SignIn.jsx";
import SignUp from "./pages/User/SignUp.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store.js";
import Home from "./components/Home/Home.jsx";
import App from "./App.jsx";
import { PersistGate } from "redux-persist/integration/react";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoute.jsx";
import AdminRoutes from "./components/PrivateRoutes/AdminRoutes";
import Profile from "./pages/User/Profile.jsx";
import ChangePass from "./pages/User/ChangePass.jsx";
import { ThemeProvider } from "./utils/theme-provider.jsx";
import NotFound from "./pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllUsers from "./pages/Admin/AllUsers.jsx";
import Setting from "./pages/User/Setting.jsx";
import About from "./pages/Website/About.jsx";
import Contact from "./pages/Website/Contact";
import AllProducts from "./pages/Admin/AllProducts";

const router = createBrowserRouter(
  createRoutesFromElements(
    // Home route
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      // Signin route
      {/* <Route element={<PrivateRoute />}> */}
      <Route path="/api/v1/users/Signup" element={<SignUp />} />
      <Route path="/api/v1/users/SignIn" element={<SignIN />} />
      {/* </Route> */}
      // Profile route
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/Home" element={<App />} />
        <Route path="/change-password" element={<ChangePass />} />
        <Route path="/settings" element={<Setting />} />
      </Route>
      // Not found route
      <Route path="*" element={<NotFound />} />
      // Admin route
      <Route element={<AdminRoutes />}>
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/all-Users" element={<AllUsers />} />
        <Route path="/all-Products" element={<AllProducts />} />
      </Route>
    </Route>
  )
);

const queryClient = new QueryClient({
  // defaultOptions: {
  //   // queries: {
  //   //   staleTime: 60000 * 3,
  //   // },
  // },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </QueryClientProvider>
);
