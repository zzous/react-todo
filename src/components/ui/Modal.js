import React, { useEffect } from 'react';

import Portal from '@/components/hoc/Portal';
import Buttons from '@/components/ui/Buttons';

import '@/assets/styles/ui/Modal.scss';

const Modal = props => {
  const {
    children,
    modalStatus,
    setModalStatus
  } = props;

  useEffect(() => {
    document.body.setAttribute('style', 'overflow: hidden; position:fixed;');

    return () => {
      document.body.removeAttribute('style');
    };
  }, [modalStatus]);

  return (
    <Portal elementId="modal-root">
      <div className={'modal' + (modalStatus ? ' active' : '')}>
        <div className="inner">
          <Buttons type="button" className="modalClose" onClick={() => setModalStatus(false)}>X</Buttons>
          {children}
        </div>

        <div className="dimmed" onClick={() => setModalStatus(false)}></div>
      </div>
    </Portal>
  );
};

export default React.memo(Modal, (prevProps, nextProps) => prevProps.modalStatus === nextProps.modalStatus);
