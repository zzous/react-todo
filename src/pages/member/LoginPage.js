import React, { useState } from 'react';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { authService } from '@/firebaseConfig';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect } from 'react';

import { loginWithEamil } from '@/constants/MemberContext';

import Buttons from '@/components/ui/Buttons';

function Login() {
  useEffect(() => {
    console.log('## render LoginPage');
  });
  
  // const [registEmail, setEmail] = useState('');
  // const [registPassword, setPassword] = useState('');
  // const auth = getAuth();

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
  
  const onSubmit = (event) => {
    event.preventDefault();
    loginWithEamil(email, password);
  };

  // const toggleAccount = () => setNewAccount((prev) => !prev);

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
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
        <input name="password" type="password" placeholder="password" required value={password} onChange={onChange}/>
        {/* <input type="submit" value={ newAccount ? 'Create Account' : 'Login' } /> */}
        <input type="submit" value="Login" />
        {/* <Buttons type="button" className="success" onClick={() => onSubmit()}>Login</Buttons> */}
      </form>
      {/* <span onClick={toggleAccount}>{newAccount ? 'Login' : 'Create Account'}</span> */}
      {/* <button name="google" onClick={onGoogleClick}>구글 계정으로 로그인</button> */}
    </div>
  );
}

export default Login;