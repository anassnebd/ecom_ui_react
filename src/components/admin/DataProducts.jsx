import React, { useMemo, useState } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import './products.css'
import { FaHome, FaUser, FaSearch, FaRemove } from 'react-icons/fa'; 
import { Home, User, Search, PieChart,Key, Settings, Calendar, Trash, MessageCircle, LogOut } from 'react-feather';
import Modal from 'react-modal'; // Import the modal library
import TestImg from '../../assets/products/Frame 1.png'
import { useDropzone } from 'react-dropzone';

const DataProducts = ({ data, onDelete }) => {
  const columns = useMemo(
    () => [
      { Header: 'Products', accessor: 'name' },
      { Header: 'Quantity', accessor: 'nbr' },
      { Header: 'Price', accessor: 'img' },
    //   {
    //     Header: 'Image',
    //     accessor: 'img',
    //     Cell: ({ row }) => (
    //       <select>
    //         <option value="">{row.original.img}</option>
    //         <option value="">Livred</option>
    //         <option value="">Livred</option>
    //         <option value="">Livred</option>
    //       </select>
    //     ),
    //   },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
          <button className="p-2 rounded-lg" onClick={() => onDelete(row.original.id)}>
            <Trash className='text-red-600'/>
          </button>
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
      <button className='p-3 rounded-lg bg-second_royal_blue text-white'
      onClick={openModal}>
        Add a product +
      </button>
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
        <h2>Product Title</h2>
        <input type="text" className='w-full bg-gray-200 p-3 pl-5 mt-2 rounded-xl' />

        <h2 className='mt-7'>Quantity</h2>
        <input
            type="number"
            className="w-full bg-gray-200 p-3 pl-5 mt-2 rounded-xl placeholder-gray-400"
            placeholder='Ajouter une question...'
        />
        
        <h2 className='mt-7'>Description</h2>
        <input
            type="text"
            className="w-full bg-gray-200 p-3 pl-5 mt-2 rounded-xl placeholder-gray-400 h-24"
            placeholder='Ajouter une question...'
        />
       

        

        <div>
        <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p className='cursor-pointer border-2 border-royal_purple mt-7 mb-3 rounded-md p-3'>Click or drag images here to upload</p>
        </div>
        {selectedImages.length > 0 && (
            <div className="selected-images flex space-x-3">
            {selectedImages.map((file) => (
                <img
                key={file.name}
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="selected-image h-44"
                />
            ))}
            </div>
        )}
        <div className="flex mt-9">
            <button onClick={closeModal} className="p-2 pl-3 pr-3 bg-second_royal_blue rounded-lg text-white">
                Create Product
            </button>
            <button onClick={closeModal} className="ml-auto text-gray-500">
                Close Modal
            </button>
        </div>
    </div>

      </Modal>
    </div>
  );
};

export default DataProducts;
