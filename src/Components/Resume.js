import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skill) {

        // <div class="columns feature-item">
        //       <img class="skill" alt="Git" src="images/tech/git.jpg" />
        //       <h5>Git</h5>
        //       <p>I use Git for all of my projects so far. I have used Git for version control in small teams and
        //           have toyed around with contributing to Open Source Projects.</p>
        //     </div>


        return <div key={skill.name} class="columns feature-item" >
          <img class="skill" alt={skill.name} title={skill.name} src={skill.image} />          
          <h5>{skill.name}</h5>
          <p>{skill.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">

        {/* <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div> */}


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work Experience</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row skill">

          <div className="threea columns header-col">
            <h1><span>I canp help you with</span></h1>
          </div>

          <div class="nine columns main-col">
            <p class="lead center">I'm a tinkerer and am always interested in playing around
          with new technologies but these are the ones that have really won me over</p>
          </div>

          <ul class="bgrid-quarters s-bgrid-thirds cf">
            {skills}            
          </ul>
        </div>
      </section>
    );
  }
}

export default Resume;
