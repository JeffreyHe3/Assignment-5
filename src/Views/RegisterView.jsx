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
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <label className="inputLabel">First Name</label>
                <input type="text" className="input" name="fName" required />
                <label className="inputLabel">Last Name</label>
                <input type="text" className="input" name="lName" required />
                <label className="inputLabel">Email</label>
                <input type="email" className="input" name="email" required />
                <label className="inputLabel">Password</label>
                <input type="password" className="input" name="password" required />
                <label className="inputLabel">Re-enter Password</label>
                <input type="password" className="input" name="password" required />
                <input type="submit" value="Register" />
            </form>
            <Footer />
        </div>
    )
}

export default RegisterView;