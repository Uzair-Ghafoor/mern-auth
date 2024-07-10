import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Profile, About, Signin, Signup, Home } from './pages';
import { Header } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
};

export default App;
