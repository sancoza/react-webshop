import React from 'react'

export const Footer = () => {
  return (
    <footer className="py-5 bg-dark text-white">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <h4>About</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            maiores aperiam fugit officiis unde ex?
          </p>
        </div>
        <div className="col-md-3 col-sm-6">
          <h4>Top Products</h4>
          <ul className="list-unstyled">
            <li><a href="/">Jeans</a></li>
            <li><a href="/">Rags</a></li>
            <li><a href="/">Accesories</a></li>
            <li><a href="/">Phones</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h4>Quick links</h4>
          <ul className="list-unstyled">
            <li><a href="/">Home</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">Kontakt</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="index.html">
            <img
              className="img-fluid rounded shadow-lg border border-white border-5"
              src="../img/logo.png"
              alt="logo"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}
