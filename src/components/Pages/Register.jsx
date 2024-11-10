import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import auth from '../../firebase/firebase.init';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



const Register = () => {
    const [error, setError] = useState('')
    const [successed, setSuccessed] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const emailRef = useRef()


    const handelSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photoUrl = e.target.url.value
        const terms = e.target.terms.checked

        console.log(email, password, name, photoUrl)

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          console.log(result.user)
            setSuccessed(true)

            //for email verification
            sendEmailVerification(auth.currentUser)
            .then(() => {
              console.log('email verified')
            })

            const profile = {
              displayName: name,
              photoURL: photoUrl
            }
            updateProfile(auth.currentUser, profile)
            .then(() => {
              console.log('profile updated')
            })
            
        })
        .catch(err => {
            // console.error('error occurred during sign up', error)
            setError(err.message)
            setSuccessed(false)
        })
     
        setError('')
        setSuccessed(false)

        if(password.length < 6){
            setError('Password should be at least 6 characters long')
            return
        }
        if(!terms){
          setError('Please agree to the terms and conditions')
            return
        }
        // var expression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        // if (!expression.test(password)) {
        //     setError('Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character')
        //     return
        // }
        //crate user with email and password
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
            setSuccessed(true)

        })
        .catch(err => {
            // console.error('error occurred during sign up', error)
            setError(err.message)
            setSuccessed(false)
        })
    }


    return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
        <form onSubmit={handelSignUp}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
            ref={emailRef}
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
            ref={emailRef}
              type="text"
              name="url"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            ref={emailRef}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-6 relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
            <p className='absolute top-[52px] right-4 cursor-pointer'
            onClick={() => setShowPassword(!showPassword)}
            >{showPassword ? <FaEyeSlash/> : <FaEye/>}
            
            </p>
          </div>
          <div className="form-control">
          <label className="cursor-pointer flex items-center space-x-4 mb-4">
            <input type="checkbox" name='terms' className="checkbox checkbox-primary" />
            <span className="label-text">Accept our tearms and conditon</span>
          </label>
        </div>
          <button type="submit" className="btn btn-primary w-full">
            Sign Up
          </button>
        </form>
        {
            error &&
            <div className="text-red-500 text-center">{error}</div>
        }
        {
            successed &&
            <div className="text-green-500 text-center">Registration Successful</div>
        }
      </div>
    </div>
    );
};

export default Register;