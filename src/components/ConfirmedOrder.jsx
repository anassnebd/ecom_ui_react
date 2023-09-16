import React from 'react'
import Header from './Header'
import { Home, User, Search, PieChart,Key, Settings,CreditCard, FolderPlus, Mail, LogOut, X } from 'react-feather';

function ConfirmedOrder() {
  return (
    <div>
        <Header/>
        <div className="p-7">
            <a href="/" className=''>
                <X/>
            </a>
            <h1 className='text-5xl text-center font-bold p-52'>Order Confirmed</h1>
        </div>
    </div>
  )
}

export default ConfirmedOrder