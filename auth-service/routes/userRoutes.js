import { createUser, loginUser } from "../controller.js/userController.js";
import e from "express";

const userRouter = e.Router();

// Signup route
userRouter.post("/signup", createUser);

// Login route
userRouter.post("/login", loginUser);

export default userRouter;