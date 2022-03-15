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
    {
      props.buttons ? props.buttons.map(btn=> 
        <Button variant={btn.color} onClick={btn.onClick}>
        {btn.label}
      </Button>
        ) : <Button variant="primary" onClick={props.handleClose}>
        Save Changes
      </Button>
    }
       
    </Modal.Footer>
  </Modal>
    
  )
}

export default AppModel