import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import { Back } from './';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">

      <Back></Back>

      <p className="logo">
        <Link href="/">Leedey Floral and Gifts</Link>
      </p>

      <p className="about">
        <Link href="/info/about">About Us</Link>
      </p>

      <p className="contact">
        <Link href="/info/contactUs">Contact Us</Link>
      </p>
    

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}
export default Navbar