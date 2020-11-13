const mongoose = require('mongoose');

const MoviesSchema = new mongoose.Schema({
    plot : {
        type : String,
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
    }
}, { autoCreate : true })

module.exports = mongoose.model('movie', MoviesSchema);
