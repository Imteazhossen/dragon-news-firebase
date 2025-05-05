import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200  min-h-screen'>
          <header className='max-w-10/12 mx-auto py-5 '>
            <Navbar></Navbar>
          </header>
          <main className="max-w-10/12 py-5 mx-auto">
          <Outlet></Outlet>
          </main>
        </div>
    );
};

export default AuthLayout;