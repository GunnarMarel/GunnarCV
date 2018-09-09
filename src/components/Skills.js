import React, { Component } from 'react';

class Skills extends Component {

    
  render() {
    const dayToDay = ["Java", "Javascript", "HTML", "CSS", "Github", "Agile"];
    const exp = ["Scrum", "Node", "Unity", "React-native", "React", "Python", "C++", "C#", "Android", "SQL"];
    const dayList = dayToDay.map((dayToDay) =><li>{dayToDay}</li>);
    const expList = exp.map((exp) =><li>{exp}</li>);

    return (
        <div className="Skills">
            <div className="column">
                
                    <h3> Day To Day Comfort </h3>
                    <ul>{dayList}</ul>
                
            </div>
            <div className="column">
                
                    <h3> Experince with </h3>
                    <ul>{expList}</ul>
                
            </div>
        </div>
    );
  }
}

export default Skills;