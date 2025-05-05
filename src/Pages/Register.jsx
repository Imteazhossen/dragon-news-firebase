import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center py-5'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h2 className="text-2xl font-semibold  text-center">Register Your Account</h2>
                <fieldset className="fieldset">
                    {/* name  */}
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Your Name" />
                     {/* {photo} */}
                     <label className="label">Photo</label>
                    <input type="link" className="input" placeholder="Photo URL" />
                     <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                    <p className="text-center font-semibold pt-5 ">Already Have An Account ? <Link className='text-secondary' to='/auth/login'> Login</Link></p>
                     
                </fieldset>
            </div>
        </div>
    </div>
    );
};

export default Register;