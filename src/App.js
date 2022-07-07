import './App.scss';
import SideNav from './assets/components/SideNav';
import Home from './assets/components/Home'
import AboutMe from './assets/components/AboutMe'
import Resume from './assets/components/Resume'
import Portfolio from './assets/components/Portfolio'
import Blog from './assets/components/Blog'
import Contact from './assets/components/Contact'
import {BrowserRouter,Routes, Route,} from "react-router-dom";

//import react router dom

function App() {
  return (

<div className="App">
<SideNav/>
<BrowserRouter>
  <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/about' element={<AboutMe/>} />
   <Route path='/resume' element={<Resume/>} />
   <Route path='/portfolio' element={<Portfolio/>} />
   <Route path='/blog' element={<Blog/>} />
   <Route path='/contact' element={<Contact/>} />
  </Routes>
</BrowserRouter>
    </div>

  );
}

export default App;
