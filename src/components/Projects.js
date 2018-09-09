import React, { Component } from 'react';
import Stuttleiga from '../stuttleiga.PNG';
import Patman from '../Patman.PNG';
import Laxness1 from '../laxness1.png';
import Laxness2 from '../laxness2.png';

class Projects extends Component {
    render() {
        return (
          <div className="Projects section flex-container">
            <div className="item">
              <img src={Stuttleiga} className="thumb"/>
            </div>
            <div className="item">
              <div className="text">
                  <h3>Stutt Leiga</h3>
                  <p><strong>Peer to peer car rental a project for HBV</strong></p>
                  <p>Java, Spring Framework, PostgreSQL</p>
                  <a href="https://infinite-mountain-61347.herokuapp.com/welcome" target="_blank" rel="noopener noreferrer"><button className="btn success">Check it out </button></a>
                  <a href="https://github.com/GunnarMarel/Team11Project/tree/master/Team11Project03" target="_blank" rel="noopener noreferrer"><button className="btn success">Github </button></a>
                </div>
            </div>
            <div className="item">
          <img src={Patman} className="thumb"/>
        </div>
        <div className="item">
          <div className="text">
              <h3>Patman</h3>
              <p><strong>A Pacman remake with my teacher</strong></p>
              <p>Javascript, HTML, CSS</p>
              <a href="https://karitassif.github.io/Patman/" target="_blank" rel="noopener noreferrer"><button className="btn success">Check it out </button></a>
              <a href="https://github.com/karitassif/Patman" target="_blank" rel="noopener noreferrer"><button className="btn success">Github </button></a>
          </div>
        </div>
        <div className="item">
          <img src={Laxness1} className="thumb"/>
        </div>
        <div className="item">
          <div className="text">
              <h3>Tilvitnun dagsins</h3>
              <p><strong>A app with Gljúfrasteinn</strong></p>
              <p>React Native, RESTful api, Android, IOS</p>
              <a href="https://expo.io/@mimiqkz/laxness-react" target="_blank" rel="noopener noreferrer"><button className="btn success">Check it out </button></a>
              <a href="https://github.com/mimiqkz/Laxness" target="_blank" rel="noopener noreferrer"><button className="btn success">Github </button></a>
            </div>
          </div>
        </div>
        );
  }
}

export default Projects;