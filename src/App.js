import React from 'react';
import { Route , Routes , Navigate} from 'react-router-dom';
import { Provider } from 'react-redux';
//components
import ProductDetalis from './components/ProductDetalis';
import Store from './components/Store';
import Navbar from './shared/Navbar';
import ShopCart from './components/ShopCart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './shared/Footer';
import Categori from './components/Categori';
//redux
import store from './redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/products/:id" element={<ProductDetalis/>} />
        <Route path="/products" element={<Store/>} />
        <Route path="/cart" element={<ShopCart/>}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/categori/:cat' element={<Categori/>} />
        <Route path='/*' element={<Navigate to='/products'/>} />
      </Routes>
      <Footer />
    </Provider>
  );
};

export default App;