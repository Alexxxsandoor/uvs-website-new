import './SendMessage.style.css'
import Alert from 'react-bootstrap/Alert';

const SendMessage = ({message}) => {

    return (
        <div id='send-message'>
            <Alert  variant="warning">
                {message.message}
            </Alert>
        </div>
        
    );
};

export default SendMessage;