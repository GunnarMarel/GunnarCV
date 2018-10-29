import React, { Component } from 'react';

class Welcome extends Component {

  render() {

    return (
      <div class="Welcome">
        <div class="Welcome-text">
        <h1>Gunnar Marel Ólafsson</h1>
        <p>My CV </p>
        <a href="https://drive.google.com/open?id=1NnaoW_gDxnRgJB99odDZJ-f0YCAWFM7C" target="_blank" rel="noopener noreferrer"><button className="btn success">Resume </button></a>
      </div>
    </div>
    );
  }
}

export default Welcome;