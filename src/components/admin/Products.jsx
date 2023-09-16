import React, {useState} from 'react'
import './products.css'
import './admin.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataProducts from './DataProducts';
import Sidebar from './Sidebar';

const initialData = [
    { id: 1, name: 'Iphone 14 Pro Max', nbr: 13, img:'1,900.00$'},
    { id: 2, name: "Samsung Note'23", nbr: 7, img:'1,600.00$'},
    { id: 3, name: "Samsung S23 Plus", nbr: 24, img:'1,200.00$'},
    { id: 4, name: "Ipad Pro 9°", nbr: 10, img:'260.00$'},
    { id: 5, name: "Airpods Max", nbr: 12, img:'250.00$'},
    { id: 6, name: "Airpods Pro Gen 2", nbr: 39, img:'200.00$'},
    { id: 7, name: "Apple Watch 8 49mm", nbr: 2, img:'100.00$'},
    { id: 8, name: "Macbook Pro M2", nbr: 47, img:'2,000.00$'},
    { id: 9, name: "Lenovo X1", nbr: 1, img:'2,100.00$'},
    
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