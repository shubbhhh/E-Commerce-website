import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Signup } from './pages/signup';
import { Signin } from './pages/signin';
import { Explore } from './pages/explore';
import { Home } from './pages/home';
import { Profile } from './pages/profile';
import { Cart } from './pages/cart';
import { Wishlist } from './pages/wishlist';
import { UserOrders } from './pages/userOrders';


function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/cart' element={<Cart />} />
        <Route path='/profile/wishlist' element={<Wishlist />} />
        <Route path='/profile/order' element={<UserOrders />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;