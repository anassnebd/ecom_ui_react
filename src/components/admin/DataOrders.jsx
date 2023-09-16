import React, { useMemo, useState } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import './products.css'
import { FaHome, FaUser, FaSearch, FaRemove } from 'react-icons/fa'; 
import { Home, User, Search, PieChart,Key, Settings, Calendar, Trash, MessageCircle, LogOut, Eye } from 'react-feather';
import Modal from 'react-modal'; // Import the modal library
import TestImg from '../../assets/products/Frame 1.png'
import { useDropzone } from 'react-dropzone';
import Frame1 from '../../assets/products/Frame 1.png'
import Frame2 from '../../assets/products/Frame 2.png'
import Frame3 from '../../assets/products/Frame 3.png'
import Frame4 from '../../assets/products/Frame 4.png'
import StartIcon from '../../assets/icons/star.png'

const DataOrders = ({ data, onDelete }) => {
  const columns = useMemo(
    () => [
      { Header: 'Id', accessor: 'id' },
      { Header: 'Total', accessor: 'nbr' },
      { Header: 'Address', accessor: 'ads' },
      {
        Header: 'Status',
        accessor: 'img',
        Cell: ({ row }) => (
          <select>
            <option value="">{row.original.img}</option>
            <option value="">Livred</option>
            <option value="">Canceled</option>
            <option value="">Paid</option>
          </select>
        ),
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
            <div className='flex'>
                <button className="p-2 rounded-lg" onClick={() => onDelete(row.original.id)}>
                    <Trash className='text-red-600'/>
                </button>
                <button className="p-2 ml-3 rounded-lg" onClick={() => openModal()}>
                    <Eye className='text-gray-700'/>
                </button>
            </div>
          
        ),
      },
    ],
    [onDelete] // Make sure to include onDelete in the dependency array
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    usePagination
  );

  const { pageIndex } = state;

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Function to open the modal
  const openModal = () => {
    console.log("111")
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };


  const [inputList, setInputList] = useState([{ id: 1 }]); // Initial input list with one input


  const [selectedImages, setSelectedImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    // Handle the selected images here, e.g., display them or upload to a server
    setSelectedImages(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*', // Specify accepted file types (images in this case)
    multiple: true, // Allow multiple file selection
  });


  const handleAddInput = () => {
    const newInput = {
      id: inputList.length + 1,
    };
    setInputList([...inputList, newInput]);
  };

  return (
    <div className=''>
      <div className="flex justify-between pt-7">
      <input
        type="text"
        placeholder="Rechercher..."
        className='bg-gray-300 p-3 rounded-lg placeholder-gray-500'
        value={state.globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      {/* <button className='p-3 rounded-lg bg-second_royal_blue text-white'
      onClick={openModal}>
        Add a product +
      </button> */}
    </div>

      
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <td {...column.getHeaderProps()}>{column.render('Header')}</td>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          Page {pageIndex + 1} of {page.length}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
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
        <div className='flex'>
            <img src={Frame2} alt='' className='h-40 mt-2'/>
            <div className=' p-7 mt-3'>
                <h1>Samsung Note'23</h1>
                <div className='stars flex mt-1'>
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />

                </div>
                <h1 className='font-bold text-xl mt-4'>
                    1 x 1,600.00$ = 1,600.00$
                </h1>
            </div>
        </div>
        <div className='flex'>
            <img src={Frame4} alt='' className='h-40 mt-2'/>
            <div className=' p-7 mt-3'>
                <h1>Ipad Pro 9°</h1>
                <div className='stars flex mt-1'>
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />
                    <img src={StartIcon} className='w-4 mr-1' alt="" />

                </div>
                <h1 className='font-bold text-xl mt-4'>
                    1 x 260.00$ = 260.00$
                </h1>
            </div>
        </div>
        <div className='center w-8/12 pt-7 pb-7'>
            <h1>Total Price</h1>
            <h1>______________________________________________</h1>
            <h1 className='font-bold text-xl'>1,860.00$</h1>

            <h1 className='mt-9'>Address</h1>
            <h1>______________________________________________</h1>
            <h1 className='font-bold text-xl'>192B, Qtr Chaymae, Sidi Maarouf</h1>
            <h1 className='font-bold text-xl'>2000</h1>
            <h1 className='font-bold text-xl'>Casablanca, Morocco</h1>
        </div>


      </Modal>
    </div>
  );
};

export default DataOrders;
