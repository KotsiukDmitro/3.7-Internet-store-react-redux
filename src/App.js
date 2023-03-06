import { Routes, Route, Link, } from "react-router-dom";
import Home from './Home';
import Products from './Products';
import About from './About';
import Bag from "./Bag";
import './App.css';
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductInformation from './ProductInformation'


function App() {

  const [openBag, setOpenBag] = useState()
  function openClose() {
    setOpenBag((prevState => !prevState))
  }

  const ListProduct = useSelector(state => state.products.products)

  return (<div>
    <div className='header'>
      <nav>
        <Link className={Home ? 'link link-active' : 'link'} to='/'>Home</Link>
        <Link className='link' to='/products'>Products</Link>
        <Link className='link' to='/about'>About</Link>
      </nav>
      <i className='fa-brands fa-digg logo'></i>
      <button className="btnCart" onClick={openClose}><i className='fa-solid fa-cart-shopping cart cursor'></i><span className='amountCart'>{ListProduct.length}</span></button>
    </div>

    <Bag openBag={openBag} openClose={openClose} />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="products/:id" element={<ProductInformation />} />
    </Routes>
  </div>
  )
}
export default App;
