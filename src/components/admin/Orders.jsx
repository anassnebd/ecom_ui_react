import React, {useState} from 'react'
import './products.css'
import './admin.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataProducts from './DataProducts';
import Sidebar from './Sidebar';
import DataOrders from './DataOrders';

const initialData = [
    { id: "15/09/2023", name: 'Eval12', nbr: '1860,00 $', img:'Paid',ads:'Sidi Maarouf, Casablanca'},
    { id: "15/09/2023", name: 'Evaluation', nbr: '1130,00 $', img:'Delivred',ads:'Adrar, Agadir'},
    { id: "10/09/2023", name: 'Insuffisance Cardiaque', nbr: '1500,00 $', img:'Delivred',ads:'Mhamid, Marrakech'},
    { id: "10/09/2023", name: 'Test Eval', nbr: '2500,00 $', img:'Delivred',ads:'Anfa, Casablanca'},
    { id: "10/09/2023", name: 'Eval42', nbr: '2000,00 $', img:'Delivred',ads:'Sidi Maarouf, Casablanca'},
    { id: "10/09/2023", name: 'Ev', nbr: '260,00 $', img:'Paid',ads:'Gueliz, Marrakech'},
    { id: "15/08/2023", name: 'Ev', nbr: '1200,00 $', img:'Paid',ads:'Marina, Casablanca'},
    { id: "15/08/2023", name: 'Ev', nbr: '3000,00 $', img:'Paid',ads:'Daoudiat, Marrakech'},
];

function Orders() {
    const [data, setData] = useState(initialData);

    const handleDelete = (id) => {
      // Filter out the row with the given ID
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      toast.error("Le produit avec l'Id "+id+" est supprimé");
    };
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='w-10/12 overflow-auto overflow-y-scroll h-screen bg-white'>
            {/* <img src={EvaluationImg} className='mx-auto mt-9' alt="" srcSet="" /> */}
            <div className="pb-10 pl-16 pr-16">
            <DataOrders data={data} onDelete={handleDelete} />
            
            </div>
        </div>
    </div>
  )
}

export default Orders