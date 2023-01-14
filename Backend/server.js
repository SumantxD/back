const express = require('express');
 const mongoose = require('mongoose');
const book = require('./Models/book');
 
// const dotenv = require('dotenv');
const app=express();
mongoose.set('strictQuery', false);
 const hello="mongodb+srv://ishikaback:<password>@cluster0.6wobkbs.mongodb.net/Library?retryWrites=true&w=majority"
//const app=express();
mongoose.connect(hello)
    .then(()=>{
        app.listen(3000, ()=>{console.log("server connected to database")});
    })
    .catch(err=>{console.log(err)})
app.get ('/home', (req, res) => {
    res.json({
        name:"ishia"})
})
app.post ('/books', (req, res) => {
    const book2=new book(req.body)
    book2.save()
    .then((resu)=>{
        

    })
    .catch(err=>{console.log(err)})

    
})
app.put ('/books/:id', (req, res) => {
    res.json({name:"is"})
})
app.delete ('/books/:id', (req, res) => {
    res.json({name:"ishi"})
})
//app.listen(3000, ()=>{console.log("server started")});

