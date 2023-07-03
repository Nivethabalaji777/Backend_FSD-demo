const express = require('express');
const app =express();
const cors =require('cors');
const bodyParser =require('body-parser');
const booksRouter =require('./routes/books');
const mongoose =require('mongoose')


app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/books', booksRouter);

mongoose.connect('mongodb+srv://guvib46:guvib46wdtamil@guvib46.t8m4dry.mongodb.net/?retryWrites=true&w=majority');

const con =mongoose.connection;
try{
    con.on('open', () => {
        console.log("Mongodb connected!!!");
    });
} catch (error) {
    console.log("Error: " +error);
 }

app.get('/', (req, res) =>{
res.send("Hello!!! - from get method!!");
})

   app.listen(3001);