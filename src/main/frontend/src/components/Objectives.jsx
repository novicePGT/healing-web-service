import React from 'react';
import { Link } from 'react-router-dom';

const Objectives = () => {
  return (
    <div className='max-w[900px] m-auto px-4 py-12 pt-24 pb-20 pl-20 pr-20 flex flex-wrap justify-between'>
      <Link to="/brazil" className='text-xl font-bold text-gray-700 hover:text-gray-500 border border-transparent'>Brazil</Link>
      <Link to="/russia" className='text-xl font-bold text-gray-700 hover:text-gray-500 border border-transparent'>Russia</Link>
      <Link to="/sweden" className='text-xl font-bold text-gray-700 hover:text-gray-500 border border-transparent'>Sweden</Link>
      <Link to="/france" className='text-xl font-bold text-gray-700 hover:text-gray-500 border border-transparent'>France</Link>
      <Link to="/argentina" className='text-xl font-bold text-gray-700 hover:text-gray-500 border border-transparent'>Argentina</Link>
    </div>
  );
};

export default Objectives;
