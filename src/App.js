import './App.css';
import Footer from './companents/Footer';
import Navbar from './companents/Navbar';
import { Link, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <header>
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
  );
}

export default App;
