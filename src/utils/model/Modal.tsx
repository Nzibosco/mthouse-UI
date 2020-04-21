import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MyModal = (props: any) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{props.modalBtn}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} backdrop='static'>
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>
          {props.body}
        </ModalBody>
        <ModalFooter>
          {props.footer}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MyModal;