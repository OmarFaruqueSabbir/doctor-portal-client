import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const LogIn = () => {
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
      ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    let signInError;

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    if(loading || loading1){
        return <Loading></Loading>
    }

    if(error || error1){
       signInError = <p className='text-red-500'>{error?.message || error1?.message}</p>
    }

    if (user || user1) {
        // console.log(user)
         navigate(from, {replace: true});

    }

    const onSubmit = data => {
        // console.log(data);
        signInWithEmailAndPassword(data.email,data.password)
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-xl">Log In</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is Required"

                                },
                                pattern:{ value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'}
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is Required"

                                },
                                minLength:{ value: 6,
                                message: 'Provide valid password'}
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                        </label>
                    </div>
                    
                    {signInError}

                    <input className='btn w-full max-w-xs' type="submit" value="Log In" />
                    </form>
                            <p> <small>New To Doctors Portal? <Link className='text-primary' to="/register"> Create a New Accout</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default LogIn;