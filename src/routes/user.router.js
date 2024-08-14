import { Router } from "express";
import { loginuser, logoutUser, registerUser} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
// import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

console.log("Before go on route");


router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
);
router.route("/login").post(loginuser)
router.route("/logout").post(verifyJWT,logoutUser)
export default router