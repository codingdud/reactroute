import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
//import About from "./components/About"
import Nav from './components/Nav'
import Order from './components/Order';
import Nomatch from './components/Nomatch';
import Product from './components/Product';
import Feature from './components/Feature';
import User from './components/User';
import New from './components/New';
import Userd from './components/Userd';
import Admin from './components/Admin';
import Profile from './components/Profile';
import {AuthProvider} from './components/Auth';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';

import './App.css';

const LazyAbout = React.lazy(() => import('./components/About'))
function App() {
  return (
    <>

    <AuthProvider>
      <Routes>
      <Route path='/' element={<Nav />}>
      <Route index element={<Home />}/> 
        <Route path='/home' element={<Home />}> </Route>
        <Route path='about' element={
          <React.Suspense fallback='loding..'>
            <LazyAbout />
          </React.Suspense>}>
        </Route>
        <Route path='order' element={<Order />}></Route>
        <Route path='product' element={<Product />}>
          <Route index element={<Feature />} />
          <Route path='feature' element={<Feature />} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path='user' element={<User />}>
          <Route path=':id' element={<Userd />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>}></Route>
        <Route path='login' element={<Login />}></Route>

        <Route path='*' element={<Nomatch />}></Route>
        </Route>
        <Route path='link' element={<>hi</>}></Route>
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
