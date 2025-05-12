import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from './Views/HomeView';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';
import ErrorView from './Views/ErrorView';
import DetailView from './Views/DetailView';
import MoviesView from './Views/MoviesView';
import GenreView from './Views/GenreView';
import ProtectedRoutes from './Views/ProtectedRoutes';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/movies" element={<MoviesView />} >
            <Route path="genres/:genre_id" element={<GenreView />} />
            <Route path="details/:id" element={<DetailView />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App