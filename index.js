const express=require('express')
const mongoose=require('mongoose')
const url="mongodb://localhost/cbit"
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection
const app=express()
const r=require('./router/controller')

app.use(express.json())
app.use('/student',r)
con.on('open',function(){
    console.log('abc')
})


con.on('open',()=>{
    console.log('abc')
})

const names=['mani','anu','aaku','loki']
function x(names){
for(let i=0;i<4;i++){
    console.log(names[i])
}}
x(names)
app.listen(9000,()=>{
    console.log('axy')
})