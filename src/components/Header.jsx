import React from 'react'

function Header() {
  return (
    <div className='header flex mt-7'>
        <h1 className='font-bold ml-24 text-lg'>Logo</h1>
        <div className='flex ml-96 mt-1'>
            <a href="/" className='mr-7'>Home</a>
            <a href="/" className='mr-7'>Category</a>
            <a href="/" className='mr-7'>Products</a>
            <a href="/" className='mr-7'>About</a>
            <a href="/" className='mr-7'>Contact</a>
        </div>
    </div>
  )
}

export default Header