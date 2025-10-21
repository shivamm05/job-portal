// import React,{useContext, useEffect, useState} from 'react'
// import { assets } from '../assets/assets'
// import {AppContext} from '../context/AppContent'

// const RecruiterLogin = () => {
//     const[state,setState]=React.useState('Login')
//     const[name,setName]=React.useState('')
//     const[password,setPassword]=React.useState('')
//     const[email,setEmail]=React.useState('')

//     const[image,setImage]=React.useState(false)
//     const[isTextDataSubmitted,setIsTextDataSubmitted]=React.useState(false)
//     const{setShowRecruiterLogin}=useContext(AppContext)
//     const onSubmitHandler = async(e)=>{
//         e.preventDefault()
//         if(state == 'Sign up' && !isTextDataSubmitted){
//             setIsTextDataSubmitted(true)
            
//         }
//     }
//     useEffect(()=>{
//       document.body.style.overflow='hidden'  
//       return()=>{
//         document.body.style.overflow='unset'  
//       }
//     },[])
//   return (
//     <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
//         <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-x1 text-slate-500'>
//             <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recruiter{state}</h1>
//             <p className='text-sm'>Welocme back! Please sign in to continue</p>
//             {state === 'Sign up' && isTextDataSubmitted 
//             ? <>
//                 <div className='flex items-center gap-4 my-10'>
//                    <label htmlFor="image">
//                     <img className='w-16 rounded-full'src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
//                     <input  onChange={e=>setImage(e.target.files[0])}type="file" id="image" hidden/>
//                     </label> 
//                     <p>Upload Company <br/>logo</p>
//                 </div>
//             </>:
//              <>

//             {state!== 'Login' &&(
//                 <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
//                 <img src={assets.person_icon} alt="" />
//                 <input className='outline-none text-sm' onChange={e=>setName(e.target.value)} value={name} type="text"  placeholder='Company Name' required/>
//             </div>
//             )}
            
//             <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
//                 <img src={assets.email_icon} alt="" />
//                 <input className='outline-none text-sm' onChange={e=>setEmail(e.target.value)} value={email} type="email"  placeholder='Email id' required/>
//             </div>
//             <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
//                 <img src={assets.lock_icon} alt="" />
//                 <input className='outline-none text-sm' onChange={e=>setPassword(e.target.value)} value={password} type="password"  placeholder='Password' required/>
//             </div>
           
//             </>}
//             {state==="Login"&& <p className='text-sm text-blue-600 mt-4 cursor pointer'>Forgot password</p>}
             
           
//             <button type='submit' className='bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer mt-4' >{state === 'Login'?'login': isTextDataSubmitted? 'create account' :'next'}</button>
//             {
//                 state === 'Login' 
//                 ? <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState("Sign up")}>Sign up</span></p>
//                 : <p className='mt-5 text-center'>Already have an account?<span className='text-blue-600 cursor-pointer' onClick={()=>setState("Login")}>Login</span></p> 
//             }
//             <img onClick={e=>setShowRecruiterLogin(false)}className='absolute top-5 right-5 cursor-pointer'src={assets.cross_icon} alt=""  />
            
//         </form>
//     </div>
//   )
// }

// export default RecruiterLogin
import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContent';

const RecruiterLogin = () => {
  const [state, setState] = useState('Login');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

  const { setShowRecruiterLogin } = useContext(AppContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (state === 'Sign up' && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true);
    }
  };

  // Disable scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black/30">
      <form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl w-full max-w-md text-slate-500"
      >
        {/* Cross button */}
        <button
          type="button"
          onClick={() => setShowRecruiterLogin(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
        >
          ✕
        </button>

        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Recruiter {state}
        </h1>
        <p className="text-sm text-center mb-4">
          Welcome back! Please sign in to continue
        </p>

        {/* Sign up image upload */}
        {state === 'Sign up' && isTextDataSubmitted && (
          <div className="flex items-center gap-4 my-6">
            <label htmlFor="image">
              <img
                className="w-16 h-16 rounded-full object-cover"
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt="Company Logo"
              />
              <input
                type="file"
                id="image"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
            <p>Upload Company <br />Logo</p>
          </div>
        )}

        {/* Form fields */}
        {state !== 'Login' && !isTextDataSubmitted && (
          <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Company Name"
              className="outline-none text-sm w-full"
              required
            />
          </div>
        )}

        <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
          <img src={assets.email_icon} alt="" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email ID"
            className="outline-none text-sm w-full"
            required
          />
        </div>

        <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
          <img src={assets.lock_icon} alt="" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="outline-none text-sm w-full"
            required
          />
        </div>

        {state === 'Login' && (
          <p className="text-sm text-blue-600 mt-4 cursor-pointer text-right">
            Forgot password?
          </p>
        )}

        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer mt-5"
        >
          {state === 'Login' ? 'Login' : isTextDataSubmitted ? 'Create Account' : 'Next'}
        </button>

        <p className="mt-5 text-center">
          {state === 'Login' ? (
            <>
              Don't have an account?{' '}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setState('Sign up')}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setState('Login')}
              >
                Login
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default RecruiterLogin;
