import React, { useState } from 'react';
import { useEffect } from 'react';

import { createUserWithEamil } from '@/constants/MemberContext';

import Buttons from '@/components/ui/Buttons';

function Join() {
  useEffect(() => {
    console.log('## render joinPage');
  });
  
  const [registEmail, setEmail] = useState('');
  const [registPassword, setPassword] = useState('');

  const register = async (event) => {
    try {
      event.preventDefault();
      createUserWithEamil(registEmail, registPassword);
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
      <h1>Join</h1>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="password" />
      <Buttons type="button" className="success" onClick={register}>Join</Buttons>
    </div>
  );
}

export default Join;