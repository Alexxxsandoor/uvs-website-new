import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import emailjs from "@emailjs/browser";
import "./modal.style.css"
import LANGUAGE from '../../language';
import { useSelector } from 'react-redux';
import SendMessage from '../send-message/SendMessage';
import { faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const PUBLIC_KEY = "NewgKFFuJ9gIrgylr"
const SERVICE_ID = "service_iqq3rz7"
const TEMPLATE_ID = "template_4r2cqty"

function ModalWindows({header, packageSelect} ) {
  const language = useSelector(store => store.language.language)
  const contact = LANGUAGE[language].headers.contact
  const buttonName = LANGUAGE[language].button    
  const {title, email, phone, textarea,close, send, name,emailSendedTrue,emailSendedFalse} = LANGUAGE[language].modalWindow

  
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
       name: userInputs.name,
       phone:  userInputs.phone,
       email: userInputs.email,
       message: userInputs.textarea,
       package: userInputs.package,
         recipient: 'uvsautobot@gmail.com'
      });
      setFeedbackMessange({
        message:emailSendedTrue,
        variant:"primary"
      });
      setShowFeedbackMessange(true)
    } catch (error) {
      console.error(error);
      setFeedbackMessange({
        message:emailSendedFalse,
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
          <div className='w-100 d-flex align-items-center justify-content-between'>
            <div className='social-links'>
              <a className='mr-1'><FontAwesomeIcon icon={faTelegram} size="xl" /></a>
              <a className='mr-1'><FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
              <a ><FontAwesomeIcon icon={faEnvelope}  size="xl" /></a>
            </div>
            <div>
              <Button variant="secondary" className='mr-1' onClick={handleClose}>
                {close}
              </Button>
              <Button disabled={buttonShow} variant="primary" onClick={handleSubmit}>
                {send}
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindows;