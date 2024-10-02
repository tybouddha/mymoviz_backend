var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

const M_API_KEY = process.env.M_API_KEY;

router.get("/movies", (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${M_API_KEY}`)
    .then(response => response.json())
        .then(apiData => { 
    // const movies = apiData.results
    const moviesArray=[]
    for (let element of apiData.results){
        const newMovie = {
            title : element.title,
            overview : element.overview,
            poster_path: element.poster_path,
            vote_average: element.vote_average,
            vote_count: element.vote_count
        }
        moviesArray.push(newMovie)
        }
    res.json({movies : moviesArray})
    })
})

module.exports = router;
