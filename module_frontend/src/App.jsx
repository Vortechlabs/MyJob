import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar'
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Reqruiters from './pages/Reqruiters';
import Register from './pages/Register';
import UpdateUser from './components/UpdateUser'
import { AuthProvider } from '../src/components/AuthContext';
import JobDetails from './pages/JobDetails';
import { Question } from './pages/Question';
import Spinner from './components/Spinner';
import User from './pages/admin/User';
import Dashboard from './pages/admin/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './pages/UserProfile';
import FooterSection from './components/Footer';
import JobCategories from './components/JobCategories';

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
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Register' element={<Register />}/>
          <Route path='/JobDetails/:id' element={<JobDetails />}/>
          <Route path='/UpdateUser/:id' element={<ProtectedRoute element={<UpdateUser/>} />} />
          <Route path='Reqruiters' element={<ProtectedRoute element={<Reqruiters/>} />} />
          <Route path='AdminPanel' element={<ProtectedRoute element={<Dashboard/>} />} />
          <Route path='UserData' element={<ProtectedRoute element={<User/>} />} />
          <Route path='UserProfile' element={<UserProfile />}/>
          <Route path='test' element={<JobCategories />}/>


          
          <Route path='/Spinner' element={<Spinner />}/>
        </Routes>
        <FooterSection />
      </Router>
      </AuthProvider>
    </>
  )
}

export default App
