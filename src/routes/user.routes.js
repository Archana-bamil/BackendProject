import { Router } from "express";
import userRegistor from "../controllers/user.controllers.js"

const router=Router();  

router.route("/register").post(userRegistor)


export default router;