import React,{useState} from 'react'
import MacImg from '../assets/products/Frame 4.png'
import StartIcon from '../assets/icons/star.png'
import SearchIcon from '../assets/icons/search.png'
import MaIcon from '../assets/flag/ma.png'
import UkIcon from '../assets/flag/uk.png'
import FrIcon from '../assets/flag/france.png'
import axios from 'axios';
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header'

function IpadInfo() {
  const [textT, setTextT] = useState('');
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPropositions, setShowPropositions] = useState(true);

  const handleAi =async(prompt,language)=>{
    console.log('text');
    setTextT('')
    setLoading(true);
    setShowPropositions(false)
    // toast("Wow so easy!");
    try {
        // event.stopPropagation(); // Add this line to stop event propagation
        // event.preventDefault();
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: `Traduire ce text en ${language} : ${prompt}`}
        ],
        max_tokens: 2000,
        temperature: 0.8,
        n: 1,
        stop: 'CODE:'
      }, {
        headers: {
          'Authorization': `Bearer `,
          'Content-Type': 'application/json'
        }
      });

      const answer_gpt = response.data.choices[0].message.content;
      setAnswer(answer_gpt);
      console.log(answer_gpt)
      setLoading(false);
    } catch (error) {
      if (error.response) {
        console.error('Error:', error.response.data);
        setError(error.response.data.message);
      } else {
        console.error('Error:', error);
        setError('An error occurred');
      }
      setAnswer('');
    }
  };
  
  const Addpanel=()=>{
    toast.success('Added to cart')
  }

  return (
    <div>
    <Header/>
    <div className='flex  mt-12'>
        <div className='w-5/12  '>
            <img src={MacImg} className='' alt="" srcset="" />
        </div>
        <div className='w-7/12 h-full mt-9'>
            <h1 className='font-bold text-4xl'>Ipad Pro 9°</h1>
            <p className='flex'>Published by : <a href="/sellerʔ12" className='text-blue-600 underline ml-2'>Zakaria A.</a></p>
            <div className='stars flex mt-3'>
                <img src={StartIcon} className='w-5 mr-1' alt="" />
                <img src={StartIcon} className='w-5 mr-1' alt="" />
                <img src={StartIcon} className='w-5 mr-1' alt="" />
                <img src={StartIcon} className='w-5 mr-1' alt="" />
                <img src={StartIcon} className='w-5 mr-1' alt="" />

            </div>
            <h1 className='font-bold text-2xl mt-7'>260.00$</h1>
            <div className='flex'>
              <button className='mr-1' 
              onClick={() => handleAi("iPad Pro se distingue par son design élégant et épuré, avec des bords fins et un boîtier en aluminium ou en acier inoxydable, selon le modèle. Il est disponible en deux tailles d'écran principales : 11 pouces et 12,9 pouces. L'écran Retina Liquid Retina offre une qualité d'image exceptionnelle avec des couleurs vives et une grande netteté, ainsi qu'une compatibilité avec le ProMotion, une technologie qui permet un taux de rafraîchissement d'écran de 120 Hz pour une expérience fluide.", "Arabe")}
              >
                <img src={MaIcon} className='h-12' alt="" srcset="" />
              </button>
              <button className='mr-1'
              onClick={() => handleAi("iPad Pro se distingue par son design élégant et épuré, avec des bords fins et un boîtier en aluminium ou en acier inoxydable, selon le modèle. Il est disponible en deux tailles d'écran principales : 11 pouces et 12,9 pouces. L'écran Retina Liquid Retina offre une qualité d'image exceptionnelle avec des couleurs vives et une grande netteté, ainsi qu'une compatibilité avec le ProMotion, une technologie qui permet un taux de rafraîchissement d'écran de 120 Hz pour une expérience fluide.", "Anglais")}
              >
                <img src={UkIcon}  className='h-12' alt="" srcset="" />
              </button>
              {/* <button className='mr-1'>
                <img src={FrIcon} className='h-12' alt="" srcset="" />
              </button> */}
            </div>
            <p className=' mr-36 mt-9'>iPad Pro se distingue par son design élégant et épuré, avec des bords fins et un boîtier en aluminium ou en acier inoxydable, selon le modèle. Il est disponible en deux tailles d'écran principales : 11 pouces et 12,9 pouces. L'écran Retina Liquid Retina offre une qualité d'image exceptionnelle avec des couleurs vives et une grande netteté, ainsi qu'une compatibilité avec le ProMotion, une technologie qui permet un taux de rafraîchissement d'écran de 120 Hz pour une expérience fluide.</p>
            {loading ? <ReactLoading type={'spin'} color={'#000000'} height={'50px'} width={'50px'} className='m-auto pt-1'/> : <p className=' mr-36 mt-3'>{answer}</p>}
  
            <input type="number" name="" className='w-20 rounded-md pl-3 border-2 border-gray-200 mt-7 p-2' placeholder='1' id="" /><br/>
            <button className='bg-primary_color text-white mt-7 p-3 pl-9 pr-9 font-semibold rounded-md' onClick={Addpanel}>Ajouter au panier</button>
        </div>
    </div></div>
  )
}

export default IpadInfo