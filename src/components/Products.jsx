import React from 'react'
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

function Products() {
  return (
    <div className='products p-12'>

        <div className='filters flex ml-12'>
            <img src={SearchIcon} className='h-4 mt-1' alt="" srcset="" />
            <input type="text" className='bg-transparent outline-none pl-4' placeholder='Rechecher' name="" id="" />
        </div>

        <div className=' ml-12 mr-12 p-4 rounded-md flex bg-white w-11/12'>
            <div className='flex ml-7'>
                <select name="" id="" className='w-16 outline-none'>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                </select>
                <img src={StartIcon} alt="" className='w-5 h-5 mt-1' srcset="" />
            </div>
            <div className='flex ml-7'>
                <select name="" id="" className='w-32 outline-none'>
                    <option value="">Samsung</option>
                    <option value="">Apple</option>
                    <option value="">LG</option>
                    <option value="">Sony</option>
                    <option value="">5</option>
                </select>
            </div>
            <div className='flex ml-7'>
                <select name="" id="" className='w-32 outline-none'>
                    <option value="">Téléphone</option>
                    <option value="">Pc</option>
                    <option value="">Accessoires</option>
                    <option value="">Ecouteurs</option>
                </select>
            </div>
            <div className='flex ml-7'>
                <input type="number" placeholder='Min'  className='price_filter mr-4'/>
                <input type="number" placeholder='Max'  className='price_filter'/>
            </div>
            <div>
                <button className="button_filter pl-9 pr-9 rounded-md ml-10">Filtrer</button>
                
            </div>

            
        </div>


        <div className='flex mt-9 ml-12'>
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
                <h1 className='font-bold text-sm mt-3'>18,599.00 MAD</h1>
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
                <h1 className='font-bold text-sm mt-3'>15,299.00 MAD</h1>
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
                <h1 className='font-bold text-sm mt-3'>12,999.00 MAD</h1>
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
                <h1 className='font-bold text-sm mt-3'>2,699.00 MAD</h1>
                <button className='see_prod w-full h-9 rounded-lg mt-5 text-primary_color' style={{border:"1px solid #5932EA"}}>Voir le produit</button>
            </div>

            
        </div>
        


        <div className='flex mt-9 ml-12'>
            <div className='card_item bg-white w-72 p-3 pl-7 pr-7 pb-7 rounded-xl ml-7'>
                <div className='flex flex-col items-center'>
                    <img src={Frame5} alt='' className='w-10/12 mt-2'/>

                </div>
                <h1 className='text-xs w-full'>Airpods Max <b className='text-sm text-right'>2023</b></h1>
                <div className='stars flex mt-1'>
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />

                </div>
                <h1 className='font-bold text-sm mt-3'>2,699.00 MAD</h1>
                <button className='see_prod w-full h-9 rounded-lg mt-5 text-primary_color' style={{border:"1px solid #5932EA"}}>Voir le produit</button>
            </div>
            <div className='card_item bg-white w-72 p-3 pl-7 pr-7 pb-7 rounded-xl ml-7'>
                <div className='flex flex-col items-center'>
                    <img src={Frame6} alt='' className='w-10/12 mt-2'/>

                </div>
                <h1 className='text-xs w-full'>Airpods Pro Gen 2 <b className='text-sm text-right'>2023</b></h1>
                <div className='stars flex mt-1'>
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />

                </div>
                <h1 className='font-bold text-sm mt-3'>3,699.00 MAD</h1>
                <button className='see_prod w-full h-9 rounded-lg mt-5 text-primary_color' style={{border:"1px solid #5932EA"}}>Voir le produit</button>
            </div>
            <div className='card_item bg-white w-72 p-3 pl-7 pr-7 pb-7 rounded-xl ml-7'>
                <div className='flex flex-col items-center'>
                    <img src={Frame7} alt='' className='w-10/12 mt-2'/>

                </div>
                <h1 className='text-xs w-full'>Apple Watch 8 49mm <b className='text-sm text-right'>2023</b></h1>
                <div className='stars flex mt-1'>
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />

                </div>
                <h1 className='font-bold text-sm mt-3'>4,499.00 MAD</h1>
                <button className='see_prod w-full h-9 rounded-lg mt-5 text-primary_color' style={{border:"1px solid #5932EA"}}>Voir le produit</button>
            </div>
            <div className='card_item bg-white w-72 p-3 pl-7 pr-7 pb-7 rounded-xl ml-7'>
                <div className='flex flex-col items-center'>
                    <img src={Frame8} alt='' className='w-10/12 mt-2'/>

                </div>
                <h1 className='text-xs w-full'>Macbook Pro 13° <b className='text-sm text-right'>2023</b></h1>
                <div className='stars flex mt-1'>
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />

                </div>
                <h1 className='font-bold text-sm mt-3'>19,299.00 MAD</h1>
                <button className='see_prod w-full h-9 rounded-lg mt-5 text-primary_color' style={{border:"1px solid #5932EA"}}>Voir le produit</button>
            </div>

            

            
        </div>



        <div className='flex mt-9 ml-12'>
                <div className='card_item bg-white w-72 p-3 pl-7 pr-7 pb-7 rounded-xl ml-7'>
                    <div className='flex flex-col items-center'>
                        <img src={Frame9} alt='' className='w-10/12 mt-2'/>

                    </div>
                    <h1 className='text-xs w-full'>Lenovo X1 <b className='text-sm text-right'>2022</b></h1>
                    <div className='stars flex mt-1'>
                        <img src={StartIcon} className='w-4 mr-1' alt="" />
                        <img src={StartIcon} className='w-4 mr-1' alt="" />
                        <img src={StartIcon} className='w-4 mr-1' alt="" />
                        <img src={StartIcon} className='w-4 mr-1' alt="" />
                        <img src={StartIcon} className='w-4 mr-1' alt="" />

                    </div>
                    <h1 className='font-bold text-sm mt-3'>21,199.00 MAD</h1>
                    <button className='see_prod w-full h-9 rounded-lg mt-5 text-primary_color' style={{border:"1px solid #5932EA"}}>Voir le produit</button>
                </div>
            </div>
        </div>
  )
}

export default Products