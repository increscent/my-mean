var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/imdb');

var models = {};

var MovieSchema = mongoose.Schema({
	name: String,
	year: Number,
	mpaa_rating: String,
	director: String,
	actors: [String],
	plot: String,
	user_rating: Number,
	similar_movies: [String]
});

var Movie = mongoose.model('movies', MovieSchema);
models.movie = Movie;

/* initialization code */

// var movie = new Movie({
//     name: 'Tommy Boy',
//     year: 1995,
//     mpaa_rating: 'PG-13',
//     director: 'Peter Segal',
//     actors: ['Chris Farley', 'David Spade'],
//     plot: 'An incompetent, immature, and dimwitted heir to an auto parts factory must save the business to keep it out of the hands of his new, con-artist relatives and big business.',
//     user_rating: 7.0,
//     similar_movies: []
// });

// movie.save();

module.exports = models;