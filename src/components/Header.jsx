import React from 'react'
import BasketIcon from '../assets/icons/panel.png'

function Header() {
  return (
    <div className='header flex mt-7'>
        <h1 className='font-bold ml-44 text-lg'>Logo</h1>
        <div className='flex ml-96 mt-1'>
            <a href="/" className='mr-7'>Home</a>
            <a href="/" className='mr-7'>Category</a>
            <a href="/products" className='mr-7'>Products</a>
            <a href="/" className='mr-7'>About</a>
            <a href="/" className='mr-7'>Contact</a>
        </div>
        <a href="/panier">
            <img src={BasketIcon} alt="" className='h-7 ml-72 cursor-pointer' srcset="" />

        </a>
    </div>
  )
}

export default Header