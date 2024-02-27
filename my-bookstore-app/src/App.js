
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { ToastContainer } from 'react-toastify';
import ViewBooksPage from './components/ViewBooksPage';
import UpdateBookPage from './components/UpdateBookPage';
import DeleteBookPage from './components/DeleteBookPage';
import LandingPage from './components/LandingPage';
import SaveBookPage from './components/SaveBookPage';
import AboutPage from './components/AboutPage';
import NavBar from './components/NavBar';
// import Login from './components/Login';



function App() {
  return (
    <Router>
    <NavBar/>
    <Routes>

                {/* <Route path="/login" element={<Login/>} /> */}
                <Route  path="/" element={<LandingPage/>} />
                <Route path="/view-books" element={<ViewBooksPage/>} />
                <Route path="/update-book" element={<UpdateBookPage/>} />
                <Route path="/delete-book" element={<DeleteBookPage/>} />
                <Route path="/save-book" element={<SaveBookPage/>} />
                <Route path="/about" element={<AboutPage/>} />
       </Routes>
  </Router>
);
}
export default App;

