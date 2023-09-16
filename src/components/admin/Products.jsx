import React, {useState} from 'react'
import './products.css'
import './admin.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataProducts from './DataProducts';
import Sidebar from './Sidebar';

const initialData = [
    { id: 1, name: 'Eval12', nbr: 13, img:'n'},
    { id: 2, name: 'Evaluation', nbr: 2},
    { id: 3, name: 'Insuffisance Cardiaque', nbr: 3},
    { id: 4, name: 'Test Eval', nbr: 7},
    { id: 4, name: 'Eval42', nbr: 1},
    { id: 4, name: 'Ev', nbr: 7},
];

function Products() {
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
            <DataProducts data={data} onDelete={handleDelete} />
            </div>
        </div>
    </div>
  )
}

export default Products