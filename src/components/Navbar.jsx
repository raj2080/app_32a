import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <>

      <div className='container'>


        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Hamro <span className='text-danger'>Market </span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>

              </ul>


              <form className="d-flex" role="search">
                <Link to={'/register'} className="btn btn-success" type="submit">Register</Link>
                <Link to={'/login'} className="btn btn-primary ms-2" type="submit">Login</Link>
              </form>

            </div>
          </div>
        </nav>

      </div>



    </>
  )
}

export default Navbar;
