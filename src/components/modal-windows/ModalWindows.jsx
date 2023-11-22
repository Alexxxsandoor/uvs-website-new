import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./modal.style.css"

function ModalWindows(props) {
  const {header} = props

  const [show, setShow] = useState(false);
  const [buttonShow, setButtonShow] = useState("disabled");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userInputs, setUserInputs] = useState({
    email:"",
    phone: "",
    textarea: ""
  })

  useEffect(()=>{
    if(userInputs.email && userInputs.phone) setButtonShow("")
    else setButtonShow("disabled")

  },[userInputs])

  return (
    <>
    {header ?
    <a style={{cursor:"pointer"}}onClick={handleShow}>Message us</a> :
    <Button variant="primary" className='custom-btn' onClick={handleShow}>Request</Button>
  }
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={e=>setUserInputs({...userInputs, email: e.target.value})}
                value={userInputs.email}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Phone"
                onChange={e=>setUserInputs({...userInputs, phone: e.target.value})}
                value={userInputs.phone}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} 
                 onChange={e=>setUserInputs({...userInputs, textarea: e.target.value})}
                 value={userInputs.textarea}
              />
             
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className={buttonShow} variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindows;