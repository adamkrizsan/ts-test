import express from "express"
import { userRouter } from "./src/users/user.router"

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express()

app.use(express.json())
app.use("/api/user", userRouter)


app.listen(PORT, () => {
    console.log(`Listening on: https://localhost:${PORT}`)
})