import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const AppModel = (props) => {

  return (
    
    <Modal show={props.show} onHide={props.handleClose} dialogClassName={props.dialogClassName}>
    <Modal.Header closeButton>
      <Modal.Title>{props.modalTitel}</Modal.Title>
    </Modal.Header>
    <Modal.Body>

    {props.children}

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={props.handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
    
  )
}

export default AppModel