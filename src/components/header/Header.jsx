import logo from '../../images/logo/logo.12.svg'
import Navbar from 'react-bootstrap/Navbar';
import ModalWindows from '../modal-windows/ModalWindows';
import './header.style.css'

const Header = () => {
    return (
            <Navbar fixed="top" >
               <header id='navigate'>
                    <nav className='container'>
                        <div className='d-flex justify-content-between'>
                            <img src={logo}/>
                            <ul className='d-flex'>
                                <li><a href='#title-info'>About</a></li>
                                <li><a href='#cards-products'>Services</a></li>
                                <li><ModalWindows header={true}/></li>
                                
                            </ul>
                        </div>
                    </nav>
                </header>
            </Navbar>
    );
};





export default Header;