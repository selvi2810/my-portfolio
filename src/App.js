import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
 import Home from './component/home';
 import About from './component/about' ;
 import Skills from './component/skills';
 import Project from './component/project ';
 import Resume from './component/Resume';
 import Contact from './component/contact';
import Footer from './component/footer';
// import Image from './component/image';
import profile from "./image/profile.jpeg"


function App() {
  return (
    <>
    <BrowserRouter>
    <div className='app'>
<nav className='navbar'>
  <div className="profile-name">
    <img src={profile}alt="Selvi Profile" />
    <span className='content'>Selvi Saravanakumar</span>
  </div>
  <Link to="/">
  <span>🏠</span> <span>Home</span></Link>
  <Link to="/About"> <span>👩</span>  <span>About</span></Link>
  <Link to="/skills"> <span>💻</span> <span>Skills</span></Link>
  <Link to="/Project"> <span>🚀</span> <span>Project</span></Link>
  <Link to="/Resume"> <span>📄</span> <span>Resume</span></Link>
  <Link to="/Contact"> <span>📞</span> <span>Contact</span></Link>
</nav>
</div>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/About" element={<About></About>}></Route>
  <Route path="/Skills" element={<Skills></Skills>}></Route>
  <Route path="/Project" element={<Project></Project>}></Route>
  <Route path="/Resume" element={<Resume></Resume>}></Route>
  <Route
  path="/Contact"
  element={
    <>
      <Contact />
      <Footer />
    </>
  }
/>
  
</Routes>

</BrowserRouter>
    </>
  );
}

export default App;
