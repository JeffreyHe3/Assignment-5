import { useNavigate } from "react-router-dom"
import './style.css'

function Genres() {
    const [genres, setGenres] = useState([]);

    return (
        <div>
            {genres && genres.map(genres => (
                <button onClick={() => navigate('/'+genres.id)}>genres.genre</button>
            ))}
        </div>
    )
}

export default Genres