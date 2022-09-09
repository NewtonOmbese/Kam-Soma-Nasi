import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./Home"
import About from "./About"
import Students from "./StudentsForm"
import Course from "./Course"
import ContactUs from "./ContactUs"
import NavBar from './NavBar';
import Hero from './Hero';
import StudentsForm from './TeachersForm';

function App() {
  return (
  
      <div>
      <NavBar />
      <StudentsForm />
      </div>

  );
}

export default App;