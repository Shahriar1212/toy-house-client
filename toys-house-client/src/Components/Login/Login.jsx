import logo from '../../assets/logo1.png'

import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toast';

const Login = () => {


    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/', { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
                toast.warn(error.message);
            })
    }

    return (
        <div>
            <ToastContainer />
            <section className="h-screen">
                <div className="h-full">
                    <div
                        className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div
                            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <img
                                src={logo}
                                className="w-full"
                                alt="Sample image" />
                        </div>

                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">

                            <div
                                className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="mb-0 mr-4 text-lg">Sign in with</p>
                                <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline mr-3'><FaGoogle></FaGoogle></button>
                                <button className='btn btn-circle btn-outline mr-3'><FaFacebookF></FaFacebookF></button>
                                <button className='btn btn-circle btn-outline mr-3'><FaTwitter></FaTwitter></button>
                            </div>
                            <form onSubmit={handleLogin}>


                                <div
                                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p
                                        className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                        Or
                                    </p>
                                </div>

                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="text" placeholder="Email" name='email' className="input input-bordered input-accent  w-full" />

                                </div>

                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="text" placeholder="Password" name='password' className="input input-bordered input-accent  w-full" />

                                </div>



                                <div className="text-center lg:text-left">
                                    <button className="btn w-full">Login</button>

                                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                        Dont have an account?
                                        <Link to='/register' className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                        > Register</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;