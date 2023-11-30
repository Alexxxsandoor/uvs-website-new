import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import emailjs from "@emailjs/browser";
import "./modal.style.css"
import LANGUAGE from '../../language';
import { useSelector } from 'react-redux';
import SendMessage from '../send-message/SendMessage';

const PUBLIC_KEY = "PUBLIC_KEY"
const SERVICE_ID = "SERVICE_ID"
const TEMPLATE_ID = "TEMPLATE_ID"

function ModalWindows({header, packageSelect} ) {
  const language = useSelector(store => store.language.language)
  const contact = LANGUAGE[language].headers.contact
  const buttonName = LANGUAGE[language].button    
  const {title, email, phone, textarea,close, send, name} = LANGUAGE[language].modalWindow

  
  const [showFeedbackMessange, setShowFeedbackMessange] = useState(false)
  const [feedbackMessange, setFeedbackMessange] = useState({
    message:"",
    variant:""
  })
  const [show, setShow] = useState(false);
  const [buttonShow, setButtonShow] = useState(true);
  const [validated, setValidated] = useState(false);
  const [userInputs, setUserInputs] = useState({
    email:"",
    phone: "",
    textarea: "",
    name:"",
    package: packageSelect
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async ()=>{
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
       from_name: userInputs.name,
       from_phone:  userInputs.phone,
       from_email: userInputs.email,
       from_message: userInputs.textarea,
       from_package: userInputs.package,
         recipient: 'alexxxsandoor@gmail.com'
      });
      setFeedbackMessange({
        message:"email successfully sent check inbox",
        variant:"primary"
      });
      setShowFeedbackMessange(true)
    } catch (error) {
      console.error(error);
      setFeedbackMessange({
        message:"email NOT sent check inbox",
        variant:"warning"
      });
      setShowFeedbackMessange(true)
      handleClose()
    } finally {
      setUserInputs({
        email:"",
        phone: "",
        textarea: "",
        name:"",
        package:""
      })
      setTimeout(() => {
        setFeedbackMessange("");
        setShowFeedbackMessange(false)
      }, 3000);
      handleClose()
    }
  }

  useEffect(() => emailjs.init(PUBLIC_KEY), []);

  useEffect(()=>{
    if(userInputs.email && userInputs.phone && userInputs.name) setButtonShow(false)
    else setButtonShow(true)
  },[userInputs])

  return (
    <>
    {showFeedbackMessange && <SendMessage message={feedbackMessange}/>}

    {header ?
    <a style={{cursor:"pointer"}}onClick={handleShow}>{contact}</a> :
    <Button variant="primary" className='custom-btn' onClick={handleShow}>{buttonName}</Button>
  }
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{name}*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={name}
                onChange={e=>setUserInputs({...userInputs, name: e.target.value})}
                value={userInputs.name}
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{email}*</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
                onChange={e=>setUserInputs({...userInputs, email: e.target.value})}
                value={userInputs.email}
                
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="">
              <Form.Label>{phone}*</Form.Label>
              <Form.Control
                required
                type="phone"
                placeholder={phone}
                onChange={e=>setUserInputs({...userInputs, phone: e.target.value})}
                value={userInputs.phone}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>{textarea}</Form.Label>
              <Form.Control as="textarea" rows={3} 
                 onChange={e=>setUserInputs({...userInputs, textarea: e.target.value})}
                 value={userInputs.textarea}
              />
             
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {close}
          </Button>
          <Button disabled={buttonShow} variant="primary" onClick={handleSubmit}>
            {send}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindows;