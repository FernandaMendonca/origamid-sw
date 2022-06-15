import React from 'react';
import './App.css';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Home from './content/Home/Home';
import Login from './content/Login/Login';
import User from './content/User/User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from '../src/helpers/UserContext'

const App = () => {
  return <div>
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login/*" element={<Login />}></Route>
          <Route path="account/*" element={<User />}></Route>
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  </div >;
};

export default App;
