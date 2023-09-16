import React,{useState} from 'react'
import Sidebar from './Sidebar'
import DataInbox from './DataInbox'
import './products.css'
import './admin.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialData = [
    { id: 1, name: 'Zakaria pfe', nbr: 'Hi seller! morocco shipping?', img:'zakaria.aitkatib@emsi-edu.ma',ads:'192B, Qtr Chaymae, Sidi Maarouf'},
   
];


function Inbox() {
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
        <div className="w-10/12 overflow-auto h-screen bg-white p-12">
            <DataInbox data={data} onDelete={handleDelete} />
        </div>
    </div>
  )
}

export default Inbox