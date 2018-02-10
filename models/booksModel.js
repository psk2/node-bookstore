var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//Books Schema

var bookSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    pages:{
        type:Number
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});


var Books = module.exports = mongoose.model('Books',bookSchema);

//Get Books
module.exports.getBooks = (callback) => {
    Books.find(callback)
}

//Get Books By Id
module.exports.getBookById = (id,callback) => {
    Books.findById(id,callback)
}

// Add Book
module.exports.addBook = (book,callback) => {
    Books.create(book,callback)
}

//Update Book

module.exports.updateBook = (id,book,options,callback) => {
    var query={_id:id};
    var update = {
        name:book.name,
        pages: book.pages,
        author:book.author,
        price:book.price
    }
    Books.findOneAndUpdate(query, update, options, callback)
}

//Remove Books

module.exports.deleteBook = (id,callback) => {
    var query={_id:id};
    Books.remove(query, callback)
}