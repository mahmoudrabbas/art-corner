import React, { Component } from 'react';
import './Header.css'
// import Navbar from './Navbar';
import {NavLink} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

class Header extends Component {
    state = {
    } 
    render() { 
        return (
                <Navbar bg="header" variant='light' sticky='top' expand='md' collapseOnSelect>
                    <div className='container'>
                            <Navbar.Brand href="/">
                                {/* {<img src={'demo.png'} width={30} height={25} alt='logo'/>} */}
                                <span data-text="Art Corner" className='logo'>Art Corner</span>
                            </Navbar.Brand>

                            <Navbar.Toggle />
                            <Navbar.Collapse>
                                <Nav className='navlist'>
                                    <Nav.Link as={NavLink} to='/gallary' href='/gallary'>Gallary</Nav.Link>
                                    <Nav.Link as={NavLink} to='/profile' href='/profile'>Profile</Nav.Link>
                                    <Nav.Link as={NavLink} to='/courses' href='/courses'>Courses</Nav.Link>
                                    <Nav.Link as={NavLink} to='/books' href='/books'>Books</Nav.Link>
                                    <Nav.Link as={NavLink} to='/about' href='/about'>About</Nav.Link>
                                    <Nav.Link as={NavLink} to='/login' href='/login'>Login</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </div>
                </Navbar>
                // <div className='header'>
                //     <div className='container'>
                //         <div className='row'>
                //             <Link class="navbar-brand" href="#">Art Corner</Link>
                //             <ul className="nav justify-content-end">
                //                 <li className="nav-item">
                //                     <NavLink className="nav-link active" aria-current="page" to="/gallary">Gallary</NavLink>
                //                 </li>
                //                 <li className="nav-item">
                //                     <NavLink className="nav-link" to="/profile">Profile</NavLink>
                //                 </li>
                //                 <li className="nav-item">
                //                     <NavLink className="nav-link" to="/courses">Courses</NavLink>
                //                 </li>
                //                 <li className="nav-item">
                //                     <NavLink className="nav-link" to='/books'>Books</NavLink>
                //                 </li>
                //                 <li className="nav-item">
                //                     <NavLink className="nav-link" to='/about'>About</NavLink>
                //                 </li>
                //                 <li className="nav-item">
                //                     <NavLink className="nav-link" to='/login'>Login</NavLink>
                //                 </li>
                //             </ul>
                //         </div>
                //     </div>
                // </div>
        );
    }
}


export default Header;