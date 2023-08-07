import React from 'react'
import MacImg from '../assets/products/mac.png'
import StartIcon from '../assets/icons/star.png'
import SearchIcon from '../assets/icons/search.png'

function ProductInfo() {
  return (
    <div className='flex  mt-12'>
        <div className='w-5/12  '>
            <img src={MacImg} className='' alt="" srcset="" />
        </div>
        <div className='w-7/12 h-full mt-9'>
            <h1 className='font-bold text-4xl'>Macbook Pro M2 2023</h1>
            <div className='stars flex mt-3'>
                <img src={StartIcon} className='w-5 mr-1' alt="" />
                <img src={StartIcon} className='w-5 mr-1' alt="" />
                <img src={StartIcon} className='w-5 mr-1' alt="" />
                <img src={StartIcon} className='w-5 mr-1' alt="" />
                <img src={StartIcon} className='w-5 mr-1' alt="" />

            </div>
            <h1 className='font-bold text-2xl mt-7'>19,299.00 MAD</h1>
            <p className=' mr-36 mt-9'>Avec la nouvelle puce M2, le MacBook Pro 13 pouces repousse ses propres limites. Fidèle à son design compact, il offre jusqu’à 20 heures d’autonomie1 et se surpasse en matière de performances, tout en gardant la tête froide grâce à son système de refroidissement. Doté d’un sublime écran Retina, d’une caméra FaceTime HD et de micros de qualité studio, il est le plus portable de nos portables pro.</p>
            <input type="number" name="" className='w-20 rounded-md pl-3 border-2 border-gray-200 mt-7 p-2' placeholder='1' id="" /><br/>
            <button className='bg-primary_color text-white mt-7 p-3 pl-9 pr-9 font-semibold rounded-md'>Ajouter au panier</button>
        </div>
    </div>
  )
}

export default ProductInfo