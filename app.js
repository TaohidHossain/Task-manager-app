const express = require("express")
const app = express()
const tasks = require("./routes/tasks.js")

// Middleware
app.use(express.json())


// Server 
app.listen(3000, ()=>{
    console.log(`Server is listening on port 3000`)
})


// Routes
app.get("/", (req, res)=>{
    res.status(200).send("Working")
})

app.use("/api/tasks", tasks)