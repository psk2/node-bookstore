var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//Genre Schema

var genreSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    country:{
        type:String
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre',genreSchema);

//Get Genres
module.exports.getGenres = (callback) => {
    Genre.find(callback)
}

//Add Genres
module.exports.addGenres = (genre,callback) => {
    Genre.create(genre,callback)
}

//Update Genres

module.exports.updateGenre = (id,genre,options,callback) => {
    var query={_id:id};
    var update = {
        name:genre.name,
        country: genre.country
    }
    Genre.findOneAndUpdate(query, update, options, callback)
}

//Remove Genre

module.exports.deleteGenre = (id,callback) => {
    var query={_id:id};
    Genre.remove(query, callback)
}
