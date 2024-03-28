import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/NavBar'
import Projects from './Components/Projects'
import About from './Components/About'
import Skills from './Components/Skills'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Bio from './Components/Bio'
import Footer from './Components/Footer';
const App = () => {
  return (
    <div>
      <Navbar id='nav-bar'/>
      <About id="about" />
      <Projects id="projects" />      
      <Skills id="skills" />
      <Resume id="resume" />
      <Bio id="bio" />
      <Contact id="contact" />
      <Footer id="footer" />
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default App