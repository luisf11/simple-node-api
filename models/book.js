var mongoose = require('mongoose');

//Book Schema

var bookSchema = mongoose.Schema({
  tittle :{
        type: String,
        required: true
  },
  genre:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true
  },
  publisher:{
    type: String
  },
  pages:{
    type: String
  },
  create_date:{
        type: Date,
        default: Date.now
  }
});

var Book = module.exports = mongoose.model('Book',bookSchema);

// Get books
module.exports.getBooks = function(callback,limit){
  Book.find(callback).limit(limit);
}
// Get book
module.exports.getBookById = function(id, callback){
  Book.findById(id,callback);
}
//add Book
module.exports.addBook = function( book, callback){
  Book.create(book,callback);
}
//update Book
module.exports.updateBook = function(id ,book, options, callback){
  var query = {_id:id};
  var update = {
      tittle: book.tittle,
      genre: book.genre,
      author: book.author,
      description: book.description,
      publisher: book.publisher,
      pages: book.pages
  }
  Book.findOneAndUpdate(query, update, options ,callback);
}
