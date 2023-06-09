import React from 'react'
import { Link } from 'react-router-dom'
export const NavBar = ({cart}) => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>
          <img src="../img/logo.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/Single">Single</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Admin">Admin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cart">Cart({cart.length})</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
