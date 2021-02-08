const mongoose = require('mongoose');

const MoviesSchema = new mongoose.Schema({
    plot : {
        type : String,
        required : false
    },
    poster:{
        type : String,
        required : false
    },
    fullplot : {
      type : String,
      required : false
    },
    rated : {
      type : String,
      required : false
    },
    type : {
      type : String,
      required : false
    },
    runtime : {
      type : Number,
      required : false
    },
    year : {
      type : Number,
      required : false
    },
    genres: {
        type: Array,
        required: false
    },
    cast :{
        type: Array,
        required: true,
        select: false
    },
    title: {
      type: String
    },
    countries: {
      type: Array
    },
    director: {
      type: Array
    },
    directors: {
      type: Array
    }
}, { autoCreate : true })
MoviesSchema.index({'$**': 'text'});
module.exports = mongoose.model('movie', MoviesSchema);
