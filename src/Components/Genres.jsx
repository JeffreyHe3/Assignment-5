import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import './style.css'

function Genres(props) {
    const navigate = useNavigate();
    return (
        <div>
            <h1 id="heading">Genres</h1>
            {props.genre && props.genre.map(genreList => (
                <div key={genreList.id}>
                    <button onClick={() => navigate(`genres/${genreList.id}`)} className="genreButtons" >{genreList.genre}</button>
                </div>
            ))}
        </div>
    )
}   

export default Genres