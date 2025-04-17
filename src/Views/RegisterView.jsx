import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "./RegisterView.css";

function RegisterView() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/movies/now_playing');
    };
    
    return (
        <div id="container">
            <Header />
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName" className="inputLabel">First Name</label>
                <input id="firstName" type="text" className="input" name="firstName" required />
                <label htmlFor="lastName" className="inputLabel">Last Name</label>
                <input id="lastName" type="text" className="input" name="lastName" required />
                <label htmlFor="email" className="inputLabel">Email</label>
                <input id="email" type="email" className="input" name="email" autoComplete="on" required />
                <label htmlFor="1Password" className="inputLabel">Password</label>
                <input id="1Password" type="password" className="input" name="1Password" required />
                <label htmlFor="2Password" className="inputLabel">Re-enter Password</label>
                <input id="2Password" type="password" className="input" name="2Password" required />
                <input type="submit" value="Register" />
            </form>
            <Footer />
        </div>
    )
}

export default RegisterView;