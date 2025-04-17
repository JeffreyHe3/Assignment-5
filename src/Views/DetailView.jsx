import "./DetailView.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailView() {
    const param = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function getData() {
            setMovie((await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${import.meta.env.VITE_TMDB_KEY}`)).data);
        };

        getData();
    }, []);

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
            <h1>Title: {movie.title}</h1>
            <h2>{movie.tagline}</h2>
            <h1>Collection: {movie.belongs_to_collection.name}</h1>
            <h1>Release Date: {movie.release_date}</h1>
            <h1>Runtime: {movie.runtime}</h1>
            <h1>Original Language: {movie.original_language}</h1>
            <h1>Spoken Languages: {movie.spoken_languages}</h1>
            <h1>Genres: {movie.genres}</h1>
            <h1>Production Companies: {movie.production_companies}</h1>
            <h1>Production Countries: {movei.production_countries.name}</h1>
        </div>
    )
}

export default DetailView;