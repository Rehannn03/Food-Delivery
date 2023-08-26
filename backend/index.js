const express=require('express')
const cors=require('cors')
const app=express()
const port=5000
const mongoDB=require('./db')
mongoDB()

app.use(cors())
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-Type,Accept'
    )
    next()
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use(express.json())

app.use('/api',require('./Routes/NewUser'))
app.use('/api',require('./Routes/LoginUser'))
app.use('/api',require('./Routes/Display'))
app.listen(port,()=>{
    console.log('Port Started')
})