import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
    <a className="navbar-brand ml-3 text-white"  href="/">
    AAL   {/* <img src={main} alt="" style={{ width: '2rem' }} /> */}
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span>
        <i className="fas fa-bars" style={{ color: '#fff' }} />
      </span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link text-white ml-4" to="/">
            Home&nbsp;
            <i className="fas fa-home" />
            <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-white  ml-4"
            to="/news"
          >
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-white  ml-4"
            to="/news"
          >
            Industries
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-white ml-4"
            to="/contacts"
          >
            About us
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-white ml-4"
            to="/contacts"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-primary text-white my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  </nav>
  );
}

export default Navbar;
