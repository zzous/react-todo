import React, { useState } from 'react';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '@/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect } from 'react';

import Buttons from '@/components/ui/Buttons';

function Login() {
  useEffect(() => {
    console.log('## render LoginPage');
  });
  
  // const [registEmail, setEmail] = useState('');
  // const [registPassword, setPassword] = useState('');
  const auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true); // 새로운 유저인지 확인(초기값: true)

  const onChange = (event) => {
    const {target: {name, value}} = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        // create account
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // login
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log('## get auth data :', data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  // const onGoogleClick = async (event) => {
  //   const {target: {name}} = event;
  //   let provider;
  //   if (name === 'google') {
  //     provider = new firebaseInstance.auth.GoogleAuthProvider();
  //   }
  //   const data = await authService.signInWithPopup(provider);
  //   console.log(data);
  // };

  return (
    <div>
      Login
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
        <input name="password" type="password" placeholder="password" required value={password} onChange={onChange}/>
        <input type="submit" value={ newAccount ? 'Create Account' : 'Login' } />
      </form>
      <span onClick={toggleAccount}>{newAccount ? 'Login' : 'Create Account'}</span>
      {/* <button name="google" onClick={onGoogleClick}>구글 계정으로 로그인</button> */}
    </div>
  );
}

export default Login;