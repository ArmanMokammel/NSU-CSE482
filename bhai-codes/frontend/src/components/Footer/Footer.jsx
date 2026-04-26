import React from "react";

const Footer = () => {
  return <footer className="bg-light text-center text-lg-start mt-auto">
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Footer Content</h5>
        <p>
          Here you can use rows and columns to organize your footer content.
          Bootstrap makes it easy to keep things responsive across all devices.
        </p>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Links</h5>
        <ul className="list-unstyled mb-0">
          <li><a href="#!" className="text-dark">Home</a></li>
          <li><a href="#!" className="text-dark">Features</a></li>
          <li><a href="#!" className="text-dark">Pricing</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Support</h5>
        <ul className="list-unstyled">
          <li><a href="#!" className="text-dark">FAQ</a></li>
          <li><a href="#!" className="text-dark">Contact</a></li>
          <li><a href="#!" className="text-dark">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    © 2026 Copyright:
    <a className="text-dark" href="https://yourwebsite.com/">YourBrand.com</a>
  </div>
</footer>;
};

export default Footer;
