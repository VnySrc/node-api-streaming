import express from "express"
import http from "http"
import cors from "cors"
import apiRoutes from "./routes/apiRoutes"
import dotenv from "dotenv"

dotenv.config()
const app = express()
const httpServer = http.createServer(app)

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(apiRoutes)

httpServer.listen(process.env.PORT, () => {
    console.log(`Servidor na Porta: ${process.env.PORT}`)
})