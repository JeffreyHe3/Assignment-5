import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "./LoginView.css";

function LoginView() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/movies/now_playing');
    };
    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <label className="inputLabel">Email</label>
                <input type="email" className="input" name="email" required />
                <label className="inputLabel">Password</label>
                <input type="password" className="input" name="password" required />
                <input type="submit" value="Login" />
            </form>
            <Footer />
        </div>
    )
}

export default LoginView;