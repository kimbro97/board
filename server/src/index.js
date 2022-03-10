import express from "express";
import cors from "cors"
import cookiePraser from "cookie-parser"
import mongoose from "mongoose"
import routes from "./routes/index.js"

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cookiePraser())
app.use(cors())
app.use(routes)


app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => {
    console.log('Server Running')
})

mongoose.connection.on("error", console.error)
mongoose.connection.once("open", async () => {
    console.log("Database Connected")
})

mongoose.connect("mongodb+srv://kimbro97:hp01300130!@board-app.ri3p5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})