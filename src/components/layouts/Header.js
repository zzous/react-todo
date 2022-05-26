import { useSelector, useDispatch } from 'react-redux';
import {
  modalStatus,
  setModalStatus
} from '@/redux/slice/modal';

import Buttons from '@/components/ui/Buttons';

export function Header(props) {
  const isModalVisible = useSelector(modalStatus);
  const dispatch = useDispatch();

  return (
    <div id="header">
      header
      {
        isModalVisible && <div id="public-sample-image"></div>
      }

      <Buttons type="button" className="success" onClick={() => dispatch(setModalStatus(true))}>Modal</Buttons>
    </div>
  );
}

export default Header;