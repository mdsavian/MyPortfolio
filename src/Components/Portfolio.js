import React, { Component } from 'react';
import { Zoom } from 'react-reveal';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {

        var projectImage = 'images/portfolio/' + projects.image;

        return <Zoom duration={2000}><div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <div>

              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="text">

                  <div className="bold">
                    {projects.title}
                  </div>
                  <span class="highlight">React JS / Python</span>
                  <br/>
                  <button className="learn-more-button"> Learn more</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        </Zoom>
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Projects</h1>
            <h2>Here are a few projects I've worked on recently.</h2>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
