import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer-2">
          <h3>Contact</h3>
          <p><a href="mailto:gunnarm8@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/> gunnarm8@gmail.com</a></p>
          <p><a href="https://github.com/GunnarMarel" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/> Github</a></p>
          <h3>This Site</h3>
          <p>Made by <strong>Gunnar Marel Ólafsson</strong> using React, JavaScript and custom CSS</p>
          <p>Check out the repo <strong><a href="https://github.com/GunnarMarel" target="_blank" rel="noopener noreferrer">here on github</a></strong> © 2017</p>
        </div>
      </div>
    );
  }
}

export default Footer;