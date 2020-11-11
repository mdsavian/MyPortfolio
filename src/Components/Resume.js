import React, { Component } from 'react';
import { LightSpeed, Bounce } from 'react-reveal';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;

      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}>
          <LightSpeed right>
            <h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
          </LightSpeed>

        </div>
      })
      var skills = this.props.data.skills.map(function (skill) {
        return <div key={skill.name} className="columns feature-item" >
          <Bounce bottom>
            <img className="skill" alt={skill.name} title={skill.name} src={skill.image} />
            <h5>{skill.name}</h5>
            <p>{skill.description}</p>
          </Bounce>
        </div>
      })
      var skillsTwo = this.props.data.skillsTwo.map(function (skill) {
        return <div key={skill.name} className="columns feature-item" >
          <Bounce bottom>
            <img className="skill" alt={skill.name} title={skill.name} src={skill.image} />
            <h5>{skill.name}</h5>
            <p>{skill.description}</p>
          </Bounce>
        </div>
      })
    }

    return (
      <section id="resume">

        <div className="row work">

          <Bounce bottom>
            <div className="three columns header-col">
              <h1><span>Work Experience</span></h1>
            </div>
          </Bounce>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row skill">

          <Bounce bottom>
            <div className="threea columns header-col">
              <h1><span>I canp help you with</span></h1>
            </div>

            <div className="nine columns main-col">
              <p className="lead center">I'm always interested in search and test new technologies 
              but these are the ones that have really won me over</p>
            </div>
          </Bounce>

          <ul className="bgrid-quarters s-bgrid-quarters cf">
            {skills}
          </ul>
          <ul className="bgrid-quarters s-bgrid-quarters cf">
            {skillsTwo}
          </ul>
        </div>
      </section >
    );
  }
}

export default Resume;
