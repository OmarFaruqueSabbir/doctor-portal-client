import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import LogIn from './Pages/Login/LogIn';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import Review from './Pages/Home/Review';
import MyReview from './Pages/Dashboard/MyReview';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/appointment' element={<RequireAuth>
          <Appointment />
        </RequireAuth>
        } />
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard />
        </RequireAuth>
        } >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
