import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar'
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
import JobDetails from './pages/JobDetails';
import { Question } from './pages/Question';
import Spinner from './components/Spinner';
import User from './pages/admin/User';
import Dashboard from './pages/admin/Dashboard';

function App() {

  return (
    <>
    <AuthProvider>
      <Router>
        <Navbar />
        <div className='pt-32'></div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/Question' element={<Question />}/>
          <Route path='/Jobs' element={<Jobs />}/>
          <Route path='/Reqruiters' element={<Reqruiters />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Register' element={<Register />}/>
          <Route path='/Users' element={<Users />}/>
          <Route path='/UpdateUser/:id' element={<UpdateUser />}/>
          <Route path='/users/:id' element={<UpdateUser />}/>
          <Route path='/JobDetails/:id' element={<JobDetails />}/>
          <Route path='/AdminPanel' element={ <Dashboard /> }/>
          <Route path='UserData' element={<User />}/>
          
          
          <Route path='/Spinner' element={<Spinner />}/>
        </Routes>
        <Footer />
      </Router>
      </AuthProvider>
    </>
  )
}

export default App
