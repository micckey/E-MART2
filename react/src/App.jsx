import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'

import Login from './views/login';
import Signup from './views/signup';
import Dashboard from './views/dashboard';
import DefaultLayout from './authstates/defaultlayout';
import GuestLayout from './authstates/guestlayout';
import Index from './views';
import Newproduct from './views/newproduct';
import NotFound from './views/notfound';

const App = () => (
  
      <Routes>
        <Route element={<GuestLayout />} >
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Index />} />
        </Route>

        <Route element={<DefaultLayout />} >
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-product" element={<Newproduct />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>    
  
);


export default App
