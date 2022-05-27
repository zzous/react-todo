import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { authService } from '@/firebaseConfig';
import { useEffect } from 'react';

import { modalStatus, setModalStatus } from '@/redux/slice/modal';
import { userStatus, setUserStatus } from '@/redux/slice/member';

import Buttons from '@/components/ui/Buttons';

export function Header() {
  useEffect(() => {
    console.log('## render header', authService);
  });
  const isModalVisible = useSelector(modalStatus);
  const isLogin = useSelector(userStatus);
  const dispatch = useDispatch();

  return (
    <div id="header">
      logo
      {
        isModalVisible && <div id="public-sample-image"></div>
      }

      <Buttons type="button" className="success" onClick={() => dispatch(setModalStatus(true))}>Modal</Buttons>
      
      <Link to='/'>Home</Link>
      
      {
        isLogin ?
          <>
            <Link to='/member'>Member</Link><Buttons type="button" className="success" onClick={() => dispatch(setUserStatus(false))}>Logout</Buttons>
          </> : <>
            <Link to='/member/login'>Login</Link>
            <Link to='/member/join'>Join</Link>
          </>
      }
    </div>
  );
}

export default Header;