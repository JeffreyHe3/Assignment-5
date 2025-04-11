import './style.css'
import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate();

    return (
        <div className="header">
            <h1 id="title">Jeffrey's Movies</h1>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
        </div>
    )
}

export default Header