const express = require('express');
 const mongoose = require('mongoose');

const Book = require('./models/book');

const app=express();

mongoose.set('strictQuery', false);


const hello="mongodb+srv://ishikaback:<password>@cluster0.6wobkbs.mongodb.net/Library?retryWrites=true&w=majority"

mongoose.connect(hello)
    .then((result)=>{
        console.log('connected to the database')
        app.listen(3000);
    })
    .catch((err)=>{console.log(err)})


app.get ('/home', (req, res) => {
    res.json({
        name:"ishia"
    })
})


app.post ('/books', (req, res) => {

    const book = new Book(req.body)

    book.save()
        .then((result)=>{
            res.redirect('/home')
        })
        .catch((err)=>{
            console.log(err)
        })

    
})

app.use((req,res) => {
    res.json({
        log: "404 not found"
    })
})

