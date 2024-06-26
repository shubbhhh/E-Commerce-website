import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Signup } from './pages/signup';
import { Signin } from './pages/signin';
import { Explore } from './pages/explore';
import { Home } from './pages/home';
import { Profile } from './pages/profile';
import { Cart } from './pages/cart';
import { Wishlist } from './pages/wishlist';
import { Orders } from './pages/userOrders';
import { AuthProvider } from './authContext';
import { PrivateRoutes } from './privateRoute';


function App() {
  return <>
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/explore' element={<Explore />} />
        <Route
          path='/profile/*' 
          element={
            <PrivateRoutes>
              <Routes>
                <Route path='/' element={<Profile />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/order' element={<Orders />} />
              </Routes>
            </PrivateRoutes>
          }
        />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
  </>
}

export default App;