import React, { useRef } from 'react'
import './SignupScreen.css'
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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
      .then()
    }

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type='email' placeholder='Email'/>
        <input ref={passwordRef} type='password' placeholder='Password'/>
        <button onClick={signIn}>Sign In</button>
        <div className='signupScreen_signup'>
          <span className='signupScreen_grey'>New to Netflix? </span>
          <span className='signupScreen_link' onClick={register}>Sign Up now.</span>
        </div>
      </form>
    </div>
  )
}

export default SignupScreen