import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';
const Navbar = () => {

    const { user , logout } = use(AuthContext);
    const  handleLogout =() => {
        logout().then(() => {
           alert('User logged out successfully')
          }).catch((error) => {
            console.log(error);
          });

    }
    return (
        <div className='flex justify-between items-center'>
            <div className=" px-25">{user && user.email}</div>
            <div className="flex gap-5">
                <NavLink to='/'>
                Home</NavLink>
                <NavLink to='/about'>
                About</NavLink>
                <NavLink to='/career'>
                Career</NavLink>
            </div>
            <div className="flex gap-5">
                <img className='w-12 rounded-full' src={`${user ? user.photoURl : userIcon}`} alt="" />
                {
                    user ? <button onClick={handleLogout} className='btn btn-primary px-10' >Logout</button> :   <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
                }
              
            </div>
        </div>
    );
};

export default Navbar;