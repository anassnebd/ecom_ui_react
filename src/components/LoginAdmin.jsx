import React from 'react'
import './components.css';

function LoginAdmin() {
  return (
    <div className='flex h-screen'>
        <div className='w-7/12 '>
            <div className='center w-6/12'>
                <h1 className='text-2xl mt-36 text-center'>Authentification</h1>
                <div className='block'>
                    <p className='text-sm mt-9'>Email</p>
                    <input type="text" className='input_login mt-1 rounded-full border-gray-200 outline-none w-full pt-3 pb-3 pl-5'/>
                </div>
                <div className='block'>
                    <p className='text-sm mt-5'>Password</p>
                    <input type="password" className='input_login mt-1 rounded-full border-gray-200 outline-none w-full pt-3 pb-3 pl-5'/>
                </div>

                <div className='mt-16'>
                    <a href="/dieteticien/blog">
                    <button className='rounded-full outline-none w-full pt-3 pb-3 bg-green-500 text-white'>
                        S'authentifier
                    </button>
                    </a>
                    
                </div>
            </div>
        </div>
        <div className="adm_auth w-5/12">

        </div>
    </div>
  )
}

export default LoginAdmin