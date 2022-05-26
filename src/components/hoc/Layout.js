import React from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';

// import Header from '@/components/layouts/Header';
// import Footer from '@/components/layouts/Footer';

// Components
import Modal from '@/components/ui/Modal';

// Actions
import {
  setModalStatus
} from '@/redux/slice/modal';

class Layout extends React.Component {
  render() {
    const {
      modalStatus,
      setModalStatus
    } = this.props;

    return (
      <div id="wrap">
        {/* <Header /> */}
        <div id="contents">
          <Outlet />
          {
            modalStatus &&
            <Modal modalStatus={modalStatus} setModalStatus={setModalStatus}>
              Modal
            </Modal>
          }
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalStatus: state.modalSlice.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setModalStatus: status => dispatch(setModalStatus(status))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
