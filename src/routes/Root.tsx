// import outlet
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
  return (
    <div className='container mx-auto'>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
