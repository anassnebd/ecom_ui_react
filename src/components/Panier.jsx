import React, { useState } from 'react';
import MacImg from '../assets/products/mac.png'
import DeleteIcon from '../assets/icons/delete.png'
import Modal from 'react-modal';
import './card.css';



function Panier() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [ccv, setCcv] = useState('');
    const [numbers, setNumbers] = useState('');
    const [name, setName] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    
    const handleCcvChange = (event) => {
        const inputValue = event.target.value;
        const formattedValue = inputValue
          .replace(/\s/g, '') // Remove existing spaces
          .match(/.{1,4}/g) // Split into groups of 4 characters
          .join(' '); // Join groups with a space
    
        setCcv(formattedValue);
    };

    const handleNumbersChange = (event) => {
        const inputValue = event.target.value;
        const formattedValue = inputValue
          .replace(/\s/g, '') // Remove existing spaces
          .match(/.{1,4}/g) // Split into groups of 4 characters
          .join(' '); // Join groups with a space
    
        setNumbers(formattedValue);
    };

    const handleNameChange = (event) => {
        const inputValue = event.target.value;
        
        setName(inputValue);
    };

    const handleYearChange = (event) => {
        const inputValue = event.target.value;
        
        setYear(inputValue);
    };

    const handleMonthChange = (event) => {
        const inputValue = event.target.value;
        
        setMonth(inputValue);
    };

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };

    const customModalStyles = {
        content: {
          width: '70%',
          height: '70%',
          margin: 'auto',
          overflow: 'auto',
        },
      };
  return (
    <div className='flex mt-12 pr-9 pl-9'>
        <div className='w-8/12'>
            <div className='flex bg-white p-3 rounded-lg '>
                <img src={MacImg} alt="" className='w-56 ml-5' srcset="" />
                <div className='block w-8/12 pl-12'>
                    <h1 className='font-bold mt-5'>Macbook Pro M1 2023</h1>
                    <h1 className='flex'> <p className='font-bold'>Color : </p> <p className='ml-3'>Silver</p> </h1>
                    <h1 className='flex'> <p className='font-bold'>Quantité : </p> <p className='ml-3'>2</p> </h1>
                    <h1 className='text-xl font-bold mt-7'>19,299.00 MAD</h1>
                </div>
                <div>
                    <img src={DeleteIcon} className='w-6 mt-5 ml-7' alt="" srcset="" />
                </div>
            </div>

            <div className='flex bg-white p-3 rounded-lg  mt-5'>
                <img src={MacImg} alt="" className='w-56 ml-5' srcset="" />
                <div className='block w-8/12 pl-12'>
                    <h1 className='font-bold mt-5'>Macbook Pro M1 2023</h1>
                    <h1 className='flex'> <p className='font-bold'>Color : </p> <p className='ml-3'>Silver</p> </h1>
                    <h1 className='flex'> <p className='font-bold'>Quantité : </p> <p className='ml-3'>2</p> </h1>
                    <h1 className='text-xl font-bold mt-7'>19,299.00 MAD</h1>
                </div>
                <div>
                    <img src={DeleteIcon} className='w-6 mt-5 ml-7' alt="" srcset="" />
                </div>
            </div>
        </div>
        <div className='w-4/12 ml-9 bg-white rounded-lg p-5'>
            <div>
                <div className='flex'>
                    <input type="text" className='w-4/12 border-2 border-gray-300 outline-none p-1 rounded-md mt-2' placeholder='Zip' name="" id="" />
                    <input type="text" className='w-8/12 border-2 border-gray-300 outline-none p-1 rounded-md mt-2 ml-3' placeholder='City' name="" id="" />
                </div>
                <input type="text" className='w-full border-2 border-gray-300 outline-none p-1 rounded-md mt-2' placeholder='Country ' />
                <input type="text" className='w-full border-2 border-gray-300 outline-none p-1 rounded-md mt-2' placeholder='Adresse ligne 1' />
                <input type="text" className='w-full border-2 border-gray-300 outline-none p-1 rounded-md mt-2' placeholder='Adresse ligne 2' />
                <input type="text" className='w-full border-2 border-gray-300 outline-none p-1 rounded-md mt-2' placeholder='Adresse ligne 3' />
                
            </div>
            <h1 className='flex mt-7'> <p className=''>Prix Total : </p> <p className='ml-3 font-bold'>25,000.00 Mad</p> </h1>
            
            <div className="container ">
                
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img" alt="Map"/>
            <div className="row">
              <img src="https://i.ibb.co/G9pDnYJ/chip.png" width="60px" alt="Chip"/>
              <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px" alt="Visa"/>
            </div>
            <div className="row card-no">
              <p className='text-3xl'>{numbers? numbers: 'XXXX XXXX XXXX XXXX'}</p>
              
            </div>
            <div className="row card-holder">
              <p>CARD HOLDER</p>
              <p>VALID TILL</p>
            </div>
            <div className="row name">
              <p>Mr/Mrs {name?name:''}</p>
              <p>{month?month:'MM'} / {year?year:'YY'}</p>
            </div>
          </div>
          <div className="back">
            <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img" alt="Map"/>
            <div className="bar"></div>
            <div className="row card-cvv">
              <div>
                <img src="https://i.ibb.co/S6JG8px/pattern.png" alt="Pattern"/>
              </div>
              <p>{ccv}</p>
            </div>
            <div className="row card-text">
              <p></p>
            </div>
            <div className="row signature">
              <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="80px" alt="Visa"/>
            </div>
          </div>
        </div>
      </div>
    </div>
            <div className='block'>
                <div className='flex'>
                    <input value={ccv} onChange={handleCcvChange} type="text" className='w-1/3 mr-3 border-2 border-gray-300 outline-none p-1 rounded-md mt-2' placeholder='CCV' name="" id="" /><br/>
                    <input value={month} onChange={handleMonthChange} type="text" className='w-1/3 mr-3 border-2 border-gray-300 outline-none p-1 rounded-md mt-2' placeholder='Month' name="" id="" /><br/>
                    <input value={year} onChange={handleYearChange} type="text" className='w-1/3 border-2 border-gray-300 outline-none p-1 rounded-md mt-2' placeholder='Year' name="" id="" /><br/>
                </div>
                <input value={numbers} onChange={handleNumbersChange} type="text" className='w-full mr-16 border-2 border-gray-300 outline-none p-1 rounded-md mt-2' placeholder='Card Numbers' name="" id="" /><br/>
                <input value={name} onChange={handleNameChange} type="text" className='w-full mr-16 border-2 border-gray-300 outline-none p-1 rounded-md mt-2' placeholder='Card Name' name="" id="" /><br/>
              
            </div>
            <button  className='bg-primary_color rounded-lg text-white font-semibold w-full pt-3 pb-3 mt-7'>Payer Maintenant</button>

        </div>
        
    </div>
  )
}

export default Panier