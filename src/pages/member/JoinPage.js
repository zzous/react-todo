import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '@/firebaseConfig';
import { useEffect } from 'react';

import Buttons from '@/components/ui/Buttons';

function Join() {
  useEffect(() => {
    console.log('## render joinPage');
  });
  
  const [registEmail, setEmail] = useState('');
  const [registPassword, setPassword] = useState('');

  const register = async () => {
    try {
      // const user = createUserWithEmailAndPassword(
      //   auth,
      //   registEmail,
      //   registPassword
      // );
      console.log('## register user');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="password" />
      <Buttons type="button" className="success" onClick={register}>Join</Buttons>
    </div>
  );
}

export default Join;