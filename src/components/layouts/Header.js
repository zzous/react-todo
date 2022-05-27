import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { auth } from '@/firebaseConfig';
import { useEffect } from 'react';

import {
  modalStatus,
  setModalStatus
} from '@/redux/slice/modal';

import Buttons from '@/components/ui/Buttons';

export function Header(props, history) {
  useEffect(() => {
    console.log('## render joinPage', auth);
  });
  const isModalVisible = useSelector(modalStatus);
  const dispatch = useDispatch();

  return (
    <div id="header">
      h1
      {
        isModalVisible && <div id="public-sample-image"></div>
      }

      <Buttons type="button" className="success" onClick={() => dispatch(setModalStatus(true))}>Modal</Buttons>
      {/* <Buttons type="button" className="success" onClick={() => { history.push('/member'); }}>Join</Buttons> */}
      {/* <Route path='/member'>Route Join</Route> */}
      <Link to='/'>Home</Link>
      <Link to='/member'>Member</Link>
      <Link to='/member/login'>Login</Link>
      <Link to='/member/join'>Join</Link>
    </div>
  );
}

export default Header;