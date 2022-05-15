import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import useToken from '../../hooks/useToken';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [updateProfile, updating, error2] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [token] = useToken(user || user1)

    const navigate = useNavigate();

    let signInError;

    if (loading || loading1 || updating) {
        return <Loading></Loading>
    }

    if (error || error1 || error2) {
        signInError = <p className='text-red-500'>{error?.message || error1?.message || error2?.message}</p>
    }

    if (token) {
        navigate('/appointment')
    }
    // if (user || user1) {
    //     console.log(user || user1)
    //     //navigate('/appointment')
    // }

    const onSubmit = async data => {
        // console.log(data);
        createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        console.log('update done');

    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-xl">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required"

                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>
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
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
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
                                    minLength: {
                                        value: 6,
                                        message: 'Provide valid password'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>

                        {signInError}

                        <input className='btn w-full max-w-xs' type="submit" value="Sign Up" />
                    </form>
                    <p> <small>Already have an account? <Link className='text-primary' to="/login"> Please Login</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Register;