import logo from '../../assets/logo1.png'

import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { getAuth } from 'firebase/auth';

import { Link, useNavigate } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../Providers/AuthProviders';
import { toast } from 'react-toast';
import { useContext, useState } from 'react';


const Register = () => {

    const { user, createUser, update, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleregister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const displayName = form.name.value;
        const photoURL = form.photo.value;
        const password = form.password.value;

        console.log(displayName, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                update(displayName, photoURL);
                navigate('/', { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                toast.warn(error.message);
            })

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
                            <form onSubmit={handleregister}>


                                <div
                                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p
                                        className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                        Or
                                    </p>
                                </div>

                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="text" placeholder="Name" name='name' className="input input-bordered input-accent  w-full" />
                                </div>


                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="email" placeholder="Email" name='email' className="input input-bordered input-accent  w-full" />
                                </div>

                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="password" autoComplete="on" placeholder="Password" name='password' className="input input-bordered input-accent  w-full" />
                                </div>

                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered input-accent  w-full" />
                                </div>


                                <div className="text-center lg:text-left">
                                    <button className="btn w-full">Register</button>

                                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                        Already have an account?
                                        <Link to='/login' className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                        > Login</Link>
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

export default Register;