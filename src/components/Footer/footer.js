import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="footer-container">
              <div>
                <ul className="footer-link-list">
                  <li>About us</li>
                  <li>Contact</li>
                  <li>Terms</li>
                  <li>Privacy</li>
                </ul>
              </div>
              <div className="footer-copyright-contain">
                <div className="footer-copyright">Copyright &copy; Kruze Consulting</div>
                <div className="footer-copyright-date">2017</div>
              </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
