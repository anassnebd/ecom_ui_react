import React, {useState} from 'react'
import Sidebar from './Sidebar'
import { ResponsiveContainer, PieChart,CartesianGrid, Pie, Cell,BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';
import { Home, User, Search, DollarSign,Key,ShoppingBag,ShoppingCart, Settings,CreditCard, FolderPlus, Mail } from 'react-feather';
import Modal from 'react-modal';

const data = [
    { name: 'Paid', value: 6 },
    { name: 'Delivred', value: 23 },
    
  ];
  
  const data_bar = [
    { name: 'Mai', value: 4 },
    { name: 'June', value: 7 },
    { name: 'July', value: 2 },
    { name: 'August', value: 10 },
    { name: 'September', value: 6 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill={COLORS[index % COLORS.length]}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {data[index].name}
      </text>
    );
  };

  
function Dashboard() {
    const [progress, setProgress] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const openModal = () => {
        console.log("111")
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const fileUrl = '/report_from_01-09-2023_to_10-09-2023.pdf';

  const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'report_from_01-09-2023_to_10-09-2023.pdf';

    anchor.click();
  };

  return (
    <div className='flex'>
        <Sidebar/>
        <div className='w-10/12 overflow-y-auto h-screen'>
            <div className='flex p-10'>
                <div className='w-4/12 flex bg-white rounded-md h-28 p-7 pl-12'>
                    <div className='h-12 rounded-full bg-second_royal_blue text-white p-3'>
                        <DollarSign/>
                    </div>
                    <div className='block ml-7'>
                        <h1 className='font-semibold'>Total Sales</h1>
                        <h1 className='text-second_royal_blue text-xl font-bold'>21,240.00$</h1>
                    </div>
                </div>

                <div className='w-4/12 ml-7 flex bg-white rounded-md h-28 p-7 pl-12'>
                    <div className='h-12 rounded-full bg-green-500 text-white p-3'>
                        <ShoppingCart/>
                    </div>
                    <div className='block ml-7'>
                        <h1 className='font-semibold'>Total Orders</h1>
                        <h1 className='text-green-500 text-xl font-bold'>29</h1>
                    </div>
                </div>

                <div className='w-4/12 ml-7 flex bg-white rounded-md h-28 p-7 pl-12'>
                    <div className='h-12 rounded-full bg-red-500 text-white p-3'>
                        <ShoppingBag/>
                    </div>
                    <div className='block ml-7'>
                        <h1 className='font-semibold'>Total Products</h1>
                        <h1 className='text-red-500 text-xl font-bold'>14</h1>
                    </div>
                </div>

                
            </div>
        <button className='p-3 bg-second_royal_blue text-white hover:border-2 hover:border-royal_purple hover:bg-white hover:text-royal_purple ml-16'
        onClick={openModal}>Generate reports</button>

        <div style={{ width: '400px', height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  dataKeyswzsq="value"
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={60}
                  fill="#8884d8"
                  paddingAngle={5}
                  label={renderCustomizedLabel}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                  
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
        </div>

          <div style={{ width: '90%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={data_bar}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
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
            width: '40%', 
            height: '50%', 
            top: '25%', 
            left: '30%', 
            padding:'30px',
          },
        }}
      >
        <h1 className='text-xl text-second_royal_blue font-bold'>Report Sales</h1>
        <div className="flex mt-5 w-full">
            <div className=''>
                <p>From</p>
                <input type="date" className='bg-gray-200 p-3 w-64 rounded-md' />
            </div>
            <div className='ml-7'>
                <p>To</p>
                <input type="date" className='bg-gray-200 p-3 w-64 rounded-md ' />
            </div>
        </div>
        

        <button className='p-3 bg-second_royal_blue text-white hover:border-2 hover:border-royal_purple hover:bg-white hover:text-royal_purple mt-9'
        onClick={handleDownload}>Generate Reports</button>
        {/* <a href="./report_from_01-09-2023_to_10-09-2023.pdf" download>ss</a> */}
        
        


      </Modal>
    </div>
  )
}

export default Dashboard