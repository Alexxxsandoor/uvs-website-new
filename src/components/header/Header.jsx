import logo from '../../images/logo/logo12.svg'
import ModalWindows from '../modal-windows/ModalWindows';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.style.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../../store/languageStore/languageSlice';
import LANGUAGE from '../../language';

const Header = () => {
    const dispatch = useDispatch()
    const language = useSelector(store => store.language.language)
    const {about, services} = LANGUAGE[language].headers

    return (
            <Navbar fixed="top" >
               <header id='navigate'>
                    <nav className='container'>
                        <div className='d-flex justify-content-between'>
                            <img src={logo}/>
                            <ul className='d-flex align-items-center'>
                                <li><a href='#title-info'>{about}</a></li>
                                <li><a href='#cards-products'>{services}</a></li>
                                <li><ModalWindows header={true} packageSelect={"не вибрано"}/></li>
                                <li>
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title={language}
                                        >
                                            <NavDropdown.Item onClick={()=>dispatch(toggleLanguage("ukr"))}>ukr</NavDropdown.Item>
                                            <NavDropdown.Item onClick={()=>dispatch(toggleLanguage("eng"))}>eng</NavDropdown.Item>
                                            <NavDropdown.Item onClick={()=>dispatch(toggleLanguage("rus"))}>rus</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </Navbar>
    );
};





export default Header;