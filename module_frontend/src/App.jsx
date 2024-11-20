import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar'
import About from './pages/about';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Reqruiters from './pages/Reqruiters';
import Footer from './components/Footer';
import Register from './pages/Register';
import Users from './components/UsersTable'
import UpdateUser from './components/UpdateUser'
import { AuthProvider } from '../src/components/AuthContext';
import CreateJob from './pages/CreateJob';

function App() {

  return (
    <>
    <AuthProvider>
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
          <Route path='/Register' element={<Register />}/>
          <Route path='/CreateJob' element={<CreateJob />}/>
          <Route path='/Users' element={<Users />}/>
          <Route path='/UpdateUser/:id' element={<UpdateUser />}/>
          <Route path='/users/:id' element={<UpdateUser />}/>
        </Routes>
        <Footer />
      </Router>
      </AuthProvider>
    </>
  )
}

export default App
