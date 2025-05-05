import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-3'>
           <img src={logo} alt="" />
           <p className='text-accent'>Journalism Without Fear or Favour</p>
           <p className='text-accent font-semibold'>{format(new Date() , 'EEEE, MMMM MM, yyyy')}</p>
        </div>
    );
};

export default Header;