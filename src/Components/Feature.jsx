import axios from "axios";
import { useState, useEffect } from "react";
import './style.css';

function Feature() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                setMovie((axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`)).data.results);
            } catch (e) {
                console.log("error");
            }

        };

        getData();
    }, []);

    return (
        <div>
            {movie && movie.map(movie => (
                <div>
                    <h1>{`${movie.title}`}</h1>
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.id}`} />
                </div>
            ))}
        </div>
    );
}

export default Feature;