var mongoose = require('mongoose');

//Movie Schema

var movieSchema = mongoose.Schema({
  name :{
        type: String,
        required: true
  },
  release_date:{
    type: Date
  },
  country:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  duration:{
    type: Date,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  imdb_ranking:{
    type: Number
  },
  rotten_tomatoes_ranking:{
    type: Number
  }
});

var Movie = module.exports = mongoose.model('Movie',movieSchema);

// Get movies
module.exports.getMovies = function(callback,limit){
  Movie.find(callback).limit(limit);
}
// Get movie
module.exports.getMovieById = function(id, callback){
  Movie.findById(id,callback);
}
//add Movie
module.exports.addMovie = function( movie, callback){
  Movie.create(movie,callback);
}
//update Movie
module.exports.updateMovie = function(id ,movie, options, callback){
  var query = {_id:id};
  var update = {
      name: movie.name,
      release_date: movie.release_date,
      country: movie.country,
      category: movie.category,
      duration: movie.duration,
      description: movie.description,
      imdb_ranking: movie.imdb_ranking,
      rotten_tomatoes_ranking: movie.rotten_tomatoes_ranking
  }
  Movie.findOneAndUpdate(query, update, options ,callback);
}


//remove Movie
module.exports.removeMovie = function( id, callback){
  var query = {_id:id};
  Movie.remove(query,callback);
}
