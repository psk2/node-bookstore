var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Genre = require('./models/genresModel')
var Books = require('./models/booksModel')

app.use(bodyParser.json())


mongoose.connect("mongodb://localhost/bookstore");
var db = mongoose.connection;

app.get('/', (req,res)=>{
    res.send("Use /api/genres and /api/books for accessing");
});


// ===================== Books =====================

app.get('/api/books', (req,res)=>{
    Books.getBooks((err,genres)=>{
        if(err)
        throw err;
        res.json(genres);
    })
});

app.get('/api/book/:id', (req,res)=>{
    Books.getBookById(req.params.id,(err,book)=>{
        if(err)
        throw err;
        res.json(book);
    })
});

app.post('/api/book', (req,res)=>{
    var book = req.body;
    Books.addBook(book,(err,book)=>{
        if(err)
        throw err;
        res.json(book);
    })
});

app.put('/api/book/:id', (req,res)=>{
    var id = req.params.id
    var book = req.body;
    Books.updateBook(id,book,{},(err,book)=>{
        if(err)
        throw err;
        res.json(book);
    })
});

app.delete('/api/book/:id', (req,res)=>{
    var id = req.params.id
    Books.deleteBook(id,(err,book)=>{
        if(err)
        throw err;
        res.json(book);
    })
});


//-================= Genres ===========================

app.get('/api/genres', (req,res)=>{
    Genre.getGenres((err,genres)=>{
        if(err)
        throw err;
        res.json(genres);
    })
});

app.post('/api/genre', (req,res)=>{
    var genre = req.body
    Genre.addGenres(genre,(err,genres)=>{
        if(err)
        throw err;
        res.json(genres);
    })
});

app.put('/api/genre/:id', (req,res)=>{
    var id = req.params.id;
    var genre = req.body
    Genre.updateGenre(id,genre,{},(err,genres)=>{
        if(err)
        throw err;
        res.json(genres);
    })
});

app.delete('/api/genre/:id', (req,res)=>{
    var id = req.params.id;
    Genre.deleteGenre(id,(err,genres)=>{
        if(err)
        throw err;
        res.json(genres);
    })
});

app.listen(3000);
console.log('Node is running on port 3000....');
