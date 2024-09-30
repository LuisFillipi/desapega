// model -> db bd -> regras de negocio
// controller -> controla o vem view e devolve o que vem do model
// view -> paginas

import "dotenv/config"
import express, { request, response } from  "express"
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";

//importar conexão com o banco
import conn from "./config/conn.js";

//importar as rotas
import usuarioRouter from "./routes/usuarioRouter.js" //importar a rota de usuarios
import objetoRouter from "./routes/objetoRoutes.js" //importar a rota de objetos

import "./models/usuarioModel.js" //importação da tabela de usuarios
import "./models/objetomodel.js" //importação da tabela de objetos
import "./models/objetoImagesModel.js" //importação da imagem do objeto


const PORT = process.env.PORT || 3333;
const app = express()

//apontar para a pasta public
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//3 middleware
app.use(cors())//
app.use(express.urlencoded({extended: true}))// permitir que arquivos tipo img
app.use(express.json())//permitir que passe requisitos tipo json

console.log("filename:", __filename)
console.log("dirname:", __dirname)

//pasta para os arquivos estaticos
app.use("/public", express.static(path.join(__dirname), "public"))


//utilizar as rotas
app.use("/usuarios", usuarioRouter)
app.use("/objetos", objetoRouter)

app.get("*", (request, response)=>{
    response.status(404).json({message: "rota nao encontrada"});
})

app.listen(PORT, ()=>{
    console.log(`Servidor on port ${PORT}`)
})
