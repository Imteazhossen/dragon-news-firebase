import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signIn} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value; 
        const password = form.password.value;
        // console.log(email,password); 
        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(`${location.state ? location.state : '/'}`) 
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode,errorMessage)
          });
    }

    return (
        <div className='flex justify-center py-5'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-semibold  text-center">Login Your Account</h2>
                    <form  onSubmit={handleLogin} className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email'  type="email" className="input" placeholder="Email" />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className="text-center font-semibold pt-5 ">Don't Have An Account ? <Link className='text-secondary' to='/auth/register'> Register</Link></p>
                         
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;