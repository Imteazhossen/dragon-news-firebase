import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser, setUser, updateUser} = use(AuthContext);
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password =form.password.value;
        const photo = form.photo.value;
        // console.log(name,photo,password,email);
        createUser(email,password)
        .then(result => {
            const user = result.user;
            // console.log(user);
            updateUser({displayName: name , photoURL: photo})
            .then(() => {
                setUser({...user,displayName: name , photoURL: photo});
                navigate('/');
            }).catch(error =>{
                console.log(error);
                setUser(user);
            })
          
        })
        .catch(error => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });

    }
    return (
        <div className='flex justify-center py-5'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h2 className="text-2xl font-semibold  text-center">Register Your Account</h2>
                <form onSubmit={handleRegister} className="fieldset">
                    {/* name  */}
                    <label className="label">Name</label>
                    <input name='name' type="text" className="input" placeholder="Your Name" />
                     {/* {photo} */}
                     <label className="label">Photo</label>
                    <input name='photo' type="link" className="input" placeholder="Photo URL" />
                    {/* email */}
                     <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />
                    {/* password */}
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    <p className="text-center font-semibold pt-5 ">Already Have An Account ? <Link className='text-secondary' to='/auth/login'> Login</Link></p>
                     
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;