import React, {useState} from 'react'
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
import Avatar from '../assets/images/avatar.png'
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header'

function Seller() {

    const [isModalOpen, setIsModalOpen] = useState(false); 

    const openModal = () => {
        console.log("111")
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const sendClose = () => {
        toast.success("Message Sent");
        setIsModalOpen(false);
    };
  return (
    <div>
        <Header/>
    <div className='products p-14'>
        
        <div className=' p-4 rounded-md flex bg-white w-10/12 center'>    
            <div className='flex '>
                <img src={Avatar} className='h-44' alt="" srcset="" />
                <div className='block  w-96 p-7 mt-5'>
                    <h1 className='text-xl'>Zakaria A.</h1>
                    <a href="mailto:zakaria.ait.11@gmail.com" className='text-blue-500'>zakaria.ait.11@gmail.com</a>
                    <p>Agadir, Morocco</p>
                </div>
                <button onClick={openModal} className='bg-second_royal_blue rounded-md h-10 w-64 mt-7 text-white font-bold ml-72'>
                    Contact Seller
                </button>
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
                <a href="/productinfo/9">
                <button className='see_prod w-full h-9 rounded-lg mt-5 text-primary_color' style={{border:"1px solid #5932EA"}}>Voir le produit</button>

                </a>
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
                <h1 className='font-bold text-sm mt-3'>250.00$</h1>
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
                <h1 className='font-bold text-sm mt-3'>200.00$</h1>
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
                <h1 className='font-bold text-sm mt-3'>100.00$</h1>
                <button className='see_prod w-full h-9 rounded-lg mt-5 text-primary_color' style={{border:"1px solid #5932EA"}}>Voir le produit</button>
            </div>
            <a href="/productinfo">
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
                <h1 className='font-bold text-sm mt-3'>2000.00$</h1>
                <button className='see_prod w-full h-9 rounded-lg mt-5 text-primary_color' style={{border:"1px solid #5932EA"}}>Voir le produit</button>
            </div>
            </a>

            

            
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
                    <h1 className='font-bold text-sm mt-3'>2,100.00$</h1>
                    <button className='see_prod w-full h-9 rounded-lg mt-5 text-primary_color' style={{border:"1px solid #5932EA"}}>Voir le produit</button>
                </div>
            </div>

            <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal} 
        contentLabel="Example Modal" 
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          },
          content: {
            width: '60%', 
            height: '70%', 
            top: '15%', 
            left: '20%', 
            padding:'30px',
          },
        }}
      >
        {/* Modal content goes here */}
        <h2>Full Name</h2>
        <input type="text" className='w-full bg-gray-200 p-3 pl-5 mt-2 rounded-xl' />

        <h2 className='mt-7'>Email</h2>
        <input
            type="email"
            className="w-full bg-gray-200 p-3 pl-5 mt-2 rounded-xl placeholder-gray-400"
            placeholder='Ajouter une question...'
        />
        
        <h2 className='mt-7'>Message</h2>
        <input
            type="text"
            className="w-full bg-gray-200 p-3 pl-5 mt-2 rounded-xl placeholder-gray-400 h-24"
            placeholder='Ajouter une question...'
        />
       

        

        <div>
        
        <div className="flex mt-9">
            <button onClick={sendClose} className="p-2 pl-3 pr-3 bg-second_royal_blue rounded-lg text-white">
                Send a message
            </button>
            <button onClick={closeModal} className="ml-auto text-gray-500">
                Close Modal
            </button>
        </div>
    </div>

      </Modal>
        </div></div>
  )
}

export default Seller