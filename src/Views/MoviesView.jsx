import Header from "../components/Header";
import Footer from "../components/Footer";
import Genres from "../components/Genres";
import "./MoviesView.css";

function MovieView() {
    return (
        <div>
            <Header />
            <Genres />
            <Footer />
        </div>
    )
}

export default MovieView;