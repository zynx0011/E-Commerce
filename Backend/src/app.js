import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// cross origin resource sharing  - it will check the frontend with port
app.use(
  cors({
    // origin: "https://estate-application.vercel.app",
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";
import admin from "./routes/admin.routes.js";
import product from "./routes/product.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/admin", admin);
app.use("/api/v1/product", product);

// http://localhost:8000/api/v1/users/register

export { app };
