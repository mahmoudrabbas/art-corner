import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Test = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/gallary">Gallary</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/courses" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                courses
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/courses/beginner">Beginner</NavLink></li>
                                <li><NavLink className="dropdown-item" href="/courses/intermediate">Intermediate</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><NavLink className="dropdown-item" href="//courses/advanced">Advanced</NavLink></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to='/books'>Books</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                </nav>
    );
}
export default Test;