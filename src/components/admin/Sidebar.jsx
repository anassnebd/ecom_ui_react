import React from 'react'
import PersonImg from '../../assets/images/person.png'
import './admin.css'
import { Home, User, Search, PieChart,Key, Settings,CreditCard, FolderPlus, Mail, LogOut } from 'react-feather';
import { FaHome, FaUser, FaSearch } from 'react-icons/fa'; 
import { BsPersonVcard } from 'react-icons/bs'; 
function Sidebar() {
  return (
    <div className='w-2/12 bg-gray-100 h-screen flex flex-col'>
      <div className="flex center w-9/12 pt-10 pb-7">
        <img src={PersonImg} className='w-12 rounded-full' alt="Person" srcset="" />
        <div className='block pl-3'>
          <h1>Zakaria A.</h1>
          <p className='font-sans text-sm -mt-1'>Seller</p>
        </div>
      </div>
      <a href='/admin/dashboard' className='sidebar_links flex w-11/12 center pt-3 pb-3 rounded-md pl-5 mt-7'>
        <PieChart className='' />
        <p className='ml-3 font-extralight'>Dashboard</p>
      </a>
      <a href='/admin/products' className='sidebar_links flex w-11/12 center pt-3 pb-3 rounded-md pl-5 mt-7'>
        <FolderPlus className='' />
        <p className='ml-3'>Products</p>
      </a>
      <a href='/admin/orders' className='sidebar_links flex w-11/12 center pt-3 pb-3 rounded-md pl-5 mt-7'>
        <CreditCard className=''/>
        <p className='ml-3'>Orders</p>
      </a>
      <a href='/admin/inbox' className='sidebar_links flex w-11/12 center pt-3 pb-3 rounded-md pl-5 mt-7'>
        <Mail className='' />
        <p className='ml-3'>Inbox</p>
      </a>
      <div className='mt-auto mb-10'>
        <a href='/' className='sidebar_links flex w-11/12 center pt-3 pb-3 rounded-md pl-5 mt-7'>
          <Settings className='' />
          <p className='ml-3'>Paramètres</p>
        </a>
        <a href='/' className='sidebar_links flex w-11/12 center pt-3 pb-3 rounded-md pl-5 mt-7'>
          <LogOut className='h-5' />
          <p className='ml-3 text-sm'>Déconnexion</p>
        </a>
      </div>
    </div>
  )
}

export default Sidebar