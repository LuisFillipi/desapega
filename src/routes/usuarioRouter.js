import { Router } from "express";
import {checkUser, editUser, getUserById, login, register} from "../controllers/usuarioController.js"
import verifyToken from "../helpers/verify-token.js"
import imageUpload from "../helpers/image-upload.js";


const router = Router()

router.post("/register", register)
router.post("/login", login)
router.get("/checkUser", checkUser)
router.get("/edit/:id", getUserById)
router.put("/edit/:id", verifyToken, imageUpload.single("imagem") , editUser)
//                                nome do campo que vai receber as informações
export default router;
