import React from 'react'
import MacCard from '../assets/icons/macb.jpg'
import './components.css'
import Frame1 from '../assets/products/Frame 1.png'
import Frame2 from '../assets/products/Frame 2.png'
import Frame3 from '../assets/products/Frame 3.png'
import Frame4 from '../assets/products/Frame 4.png'
import Frame5 from '../assets/products/Frame 5.png'
import Frame6 from '../assets/products/Frame 6.png'
import Frame7 from '../assets/products/Frame 7.png'
import Frame8 from '../assets/products/Frame 8.png'
import Frame9 from '../assets/products/Frame 9.png'
import StartIcon from '../assets/icons/star.png'
import SearchIcon from '../assets/icons/search.png'

function Index() {
  return (
    <div>
        <img src={MacCard} className='m-auto mt-24 w-8/12 rounded-md' alt="" srcset="" />
        <h1 className='-mt-44 ml-80 text-white font-semibold'>Get your Laptop with<br/> <p className='text-2xl'>Best Prices in our Store</p></h1>
        <div>
            <h1 className='font-bold text-2xl ml-44 mt-52'>Recommandé pour vous!</h1>
            <div className='flex mt-9 ml-28 mb-16'>
            <div className='card_item bg-white w-72 p-3 pl-7 pr-7 pb-7 rounded-xl ml-7'>
                <div className='flex flex-col items-center'>
                    <img src={Frame1} alt='' className='w-10/12 mt-2'/>

                </div>
                <h1 className='text-xs w-full'>Iphone 14 Pro Max <b className='text-sm text-right'>2023</b></h1>
                <div className='stars flex mt-1'>
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />

                </div>
                <h1 className='font-bold text-sm mt-3'>1,900.00$</h1>
                <button className='see_prod w-full h-9 rounded-lg mt-5 text-primary_color' style={{border:"1px solid #5932EA"}}>Voir le produit</button>
            </div>
            <div className='card_item bg-white w-72 p-3 pl-7 pr-7 pb-7 rounded-xl ml-7'>
                <div className='flex flex-col items-center'>
                    <img src={Frame2} alt='' className='w-10/12 mt-2'/>

                </div>
                <h1 className='text-xs w-full'>Samsung Note'23 <b className='text-sm text-right'>2023</b></h1>
                <div className='stars flex mt-1'>
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />

                </div>
                <h1 className='font-bold text-sm mt-3'>1,600.00$</h1>
                <button className='see_prod w-full h-9 rounded-lg mt-5 text-primary_color' style={{border:"1px solid #5932EA"}}>Voir le produit</button>
            </div>
            <div className='card_item bg-white w-72 p-3 pl-7 pr-7 pb-7 rounded-xl ml-7'>
                <div className='flex flex-col items-center'>
                    <img src={Frame3} alt='' className='w-10/12 mt-2'/>

                </div>
                <h1 className='text-xs w-full'>Samsung S23 Plus <b className='text-sm text-right'>2023</b></h1>
                <div className='stars flex mt-1'>
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />

                </div>
                <h1 className='font-bold text-sm mt-3'>1,200.00$</h1>
                <button className='see_prod w-full h-9 rounded-lg mt-5 text-primary_color' style={{border:"1px solid #5932EA"}}>Voir le produit</button>
            </div>
            <div className='card_item bg-white w-72 p-3 pl-7 pr-7 pb-7 rounded-xl ml-7'>
                <div className='flex flex-col items-center'>
                    <img src={Frame4} alt='' className='w-10/12 mt-2'/>

                </div>
                <h1 className='text-xs w-full'>Ipad Pro 9° <b className='text-sm text-right'>2023</b></h1>
                <div className='stars flex mt-1'>
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />

                </div>
                <h1 className='font-bold text-sm mt-3'>260.00$</h1>
                <button className='see_prod w-full h-9 rounded-lg mt-5 text-primary_color' style={{border:"1px solid #5932EA"}}>Voir le produit</button>
            </div>

            
        </div>
        </div>
    </div>
  )
}

export default Index