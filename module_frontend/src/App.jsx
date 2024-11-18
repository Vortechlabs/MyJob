import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar'
import About from './pages/about';
import Home from './pages/home';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Reqruiters from './pages/Reqruiters';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div className='pt-32'></div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Jobs' element={<Jobs />}/>
          <Route path='/Reqruiters' element={<Reqruiters />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Login' element={<Login />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
