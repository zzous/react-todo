import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Route, Link } from 'react-router-dom';

import {
  modalStatus,
  setModalStatus
} from '@/redux/slice/modal';

import Buttons from '@/components/ui/Buttons';

export function Header(props, history) {
  const isModalVisible = useSelector(modalStatus);
  const dispatch = useDispatch();

  return (
    <div id="header">
      header
      {
        isModalVisible && <div id="public-sample-image"></div>
      }

      <Buttons type="button" className="success" onClick={() => dispatch(setModalStatus(true))}>Modal</Buttons>
      <Buttons type="button" className="success" onClick={() => { history.push('/member'); }}>Join</Buttons>
      {/* <Route path='/member'>Route Join</Route> */}
      <Link to='/'>Home</Link>
      <Link to='/member/join'>Join</Link>
    </div>
  );
}

export default Header;