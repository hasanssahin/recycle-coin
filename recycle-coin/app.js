const express = require('express')
require('./database/dbConnection')
const hataMiddleware = require('./middleware/hataMiddleware')

//ROUTERS
const userRouter = require('./routers/userRouter')
const kategoriRouter = require('./routers/kategoriRouter')


const app = express()

app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/kategoriler', kategoriRouter)

app.use(hataMiddleware)

app.listen(3000, () => {
    console.log("Server 1 3000 portundan ayaklandırıldı");
})