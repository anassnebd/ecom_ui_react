import React, { useMemo, useState } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import './products.css'
import { FaHome, FaUser, FaSearch, FaRemove } from 'react-icons/fa'; 
import { Home, User, Search, PieChart,Key, Settings, Calendar, Trash, MessageCircle, LogOut, Eye } from 'react-feather';
import Modal from 'react-modal';
import TestImg from '../../assets/products/Frame 1.png'
import { useDropzone } from 'react-dropzone';
import Frame1 from '../../assets/products/Frame 1.png'
import Frame2 from '../../assets/products/Frame 2.png'
import Frame3 from '../../assets/products/Frame 3.png'
import Frame4 from '../../assets/products/Frame 4.png'
import StartIcon from '../../assets/icons/star.png'

const DataInbox = ({ data, onDelete }) => {
  const columns = useMemo(
    () => [
      { Header: 'From', accessor: 'name' },
      { Header: 'Message', accessor: 'nbr' },
      { Header: 'Email', accessor: 'img' },
    //   { Header: 'Address', accessor: 'ads' },
    //   {
    //     Header: 'Status',
    //     accessor: 'img',
    //     Cell: ({ row }) => (
    //       <select>
    //         <option value="">{row.original.img}</option>
    //         <option value="">Livred</option>
    //         <option value="">Canceled</option>
    //         <option value="">Paid</option>
    //       </select>
    //     ),
    //   },
      {
        Header: 'See More',
        accessor: 'action',
        Cell: ({ row }) => (
            <div className='flex'>
                
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

  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => {
    console.log("111")
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const [inputList, setInputList] = useState([{ id: 1 }]); 


  const [selectedImages, setSelectedImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    setSelectedImages(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*', 
    multiple: true, 
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
        
        <h2>Full Name</h2>
        <input type="text" value='Zakaria pfe' className='w-full bg-gray-200 p-3 pl-5 mt-2 rounded-xl' disabled/>

        <h2 className='mt-7'>Email</h2>
        <input
            type="email"
            value='zakaria.aitkatib@emsi-edu.ma'
            className="w-full bg-gray-200 p-3 pl-5 mt-2 rounded-xl placeholder-gray-400"
            placeholder='Ajouter une question...'
            disabled
        />
        
        <h2 className='mt-7'>Message</h2>
        <input
            type="text"
            value='Hi seller! morocco shipping?'
            className="w-full bg-gray-200 p-3 pl-5 mt-2 rounded-xl placeholder-gray-400 h-24"
            placeholder='Ajouter une question...'
            disabled
        />
       

        

        <div>
        
        <div className="flex mt-9">
            
            <button onClick={closeModal} className="ml-auto text-gray-500">
                Close Modal
            </button>
        </div>
    </div>
      </Modal>
    </div>
  );
};

export default DataInbox;
