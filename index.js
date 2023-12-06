const express= require('express')
const app= express()
require('dotenv').config()
  

app.get('/',(req, res)=>{
    res.send('This is Home page')
})

app.listen(process.env.PORT,()=>{
    console.log(`THe server is start at $(PORT)`)
})