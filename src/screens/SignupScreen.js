import React, { useRef } from 'react'
import './SignupScreen.css'
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

function SignupScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then(({user}) => {
        console.log(user)
      })
      .catch((err) => alert(err.message));
    }

    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then(({user}) => {
        console.log(user)
      })
      .catch(err => alert(err.message))
    }

    const signInWithGoogle = async (e) => {
      e.preventDefault();
      try{
        await signInWithPopup(auth, googleProvider);
      }
      catch (err){
        console.error(err.message);
      }
    }

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type='email' placeholder='Email'/>
        <input ref={passwordRef} type='password' placeholder='Password'/>
        <button onClick={signIn}>Sign In</button>
        <span>or</span>
        <button onClick={signInWithGoogle} className='signupScreen_google'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png' alt=''/>
          <span>Sign in with Google</span>
        </button>

        <div className='signupScreen_signup'>
          <span className='signupScreen_grey'>New to Netflix? </span>
          <span className='signupScreen_link' onClick={register}>Sign Up now.</span>
        </div>
      </form>
    </div>
  )
}

export default SignupScreen