import React from 'react';
import LandingPage from './screens/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import Signup from './screens/Signup';
import CrispChat from './components/CrispChat';
import OrganizationSetting from './screens/OrganizationSetting';


function App() {

  return (
    <BrowserRouter>
    <CrispChat />
    <Routes>
      <Route exact path="/" Component={LandingPage} />
      <Route exact path='/dashboard' Component={Dashboard} />
      <Route exact path='/login' Component={Login} />
      <Route exact path='/signup' Component={Signup} />
      <Route exact path="/setting" Component={OrganizationSetting} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
