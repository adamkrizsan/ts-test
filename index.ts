import express from "express"

import { userRouter } from "./src/users/user.router"

const PORT = 8080

const app = express()

app.use(express.json())
app.use("/api/user", userRouter)


app.listen(PORT, () => {
    console.log(`Listening on: https://localhost:${PORT}`)
})