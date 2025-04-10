import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ErrorView from './views/ErrorView';
import DetailView from './views/DetailView';
import MovieView from './views/MovieView';
import GenreView from './views/GenreView';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="*" element={<ErrorView />} />
        <Route path="/movie" element={<MovieView />}>
            <Route path="genre" element={<GenreView />}></Route>
            
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App