import axios from "axios";
import { useState, useEffect } from "react";
import './style.css'
import { useLocation, useNavigate } from "react-router-dom";

function Feature() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() { };

        getData();
    }, []);

    return (
        <div>
            {movies && movies.map(movies => (
                <div key={movies.id}>
                    <img src={movies.image} alt={`${movies.id}`} />
                    <h1>{movies.id}</h1>
                </div>
            ))}
        </div>
    )
}

export default Feature