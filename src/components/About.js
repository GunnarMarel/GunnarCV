import React, { Component } from 'react';
import Gunnar from '../mynd-gunnar.PNG';

class About extends Component {
  render() {
    return (
      <div className="about">
      <h1> Gunnar Marel Ólafsson </h1>
        <img src={Gunnar} className="main-pic"/>
        <p className="about-intro">I finished my degree in software engineering at Háskóli Íslands in 2018. I am good at communication and I have a lot of experience working in groups. I am a hard worker and I have good initiative.
I have a great interest in programming and I have an easy time learning new programming methods.
The languages I am most familiar with are Java and Javascript, though I also know Python, C, C++, SQL, HTML, CSS, React-native and React.
In my education I have done many projects, for example an app for Gljúfrasteinn museum of Halldór Laxness, a javascript game and and a Java Spring website for peer to peer car renting.</p>
      </div>
    );
  }
}
export default About;