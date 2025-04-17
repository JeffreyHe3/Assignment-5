import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from './Views/HomeView';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';
import ErrorView from './Views/ErrorView';
import DetailView from './Views/DetailView';
import MoviesView from './Views/MoviesView';
import GenreView from './Views/GenreView';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/movies" element={<MoviesView />}>
            <Route path="genre" element={<GenreView />}></Route>
            <Route path="detail" element={<DetailView />}></Route>
            <Route path=":id" element={<DetailView />}></Route>
            <Route path=":genre_id" element={<GenreView />}></Route>
          </Route>
      </Routes>
      <Route path="*" element={<ErrorView />} />
    </BrowserRouter>
  )
}

export default App