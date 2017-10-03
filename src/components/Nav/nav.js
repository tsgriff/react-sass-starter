import React, { Component } from 'react';
import mainLogo from '../../img/kruze.png';


class Nav extends Component {
  render() {
    return (
      <header id="nav">
          <div className="logo-contain">
              <img className="logo-pic" alt="" src={mainLogo} />
          </div>
      </header>
    );
  }
}

export default Nav;
