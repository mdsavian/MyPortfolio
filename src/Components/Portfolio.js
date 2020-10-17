import React, { Component } from 'react';
import { Zoom } from 'react-reveal';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class Portfolio extends Component {

  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map((projects) => {

        var projectImage = 'images/portfolio/' + projects.image;

        return (
          <React.Fragment key={projects.title}>
            <Zoom duration={1500}><div className="columns portfolio-item">
              <div className="item-wrap">
                <div>

                  <img alt={projects.title} src={projectImage} />
                  <div className="overlay">
                    <div className="text">

                      <div className="bold">
                        {projects.title}
                      </div>
                      <span className="highlight">{projects.language}</span>
                      <br />
                      <button className="learn-more-button" type="button" onClick={this.handleOpenModal}> Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Zoom>

            <Modal
              shouldCloseOnEsc={true}
              onRequestClose={this.handleCloseModal}
              shouldCloseOnOverlayClick={true}
              isOpen={this.state.showModal}
              overlayClassName="portfolio-modal-overlay"
              className="portfolio-modal"
              contentLabel={projects.title}
            >
              <div className="carousel">
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  swipeable={true}
                  swipeScrollTolerance={3}
                >
                  <div>
                    <img src={projectImage} />
                    <p className="legend">Legend 1</p>
                  </div>
                  <div>
                    <img src={projectImage} />
                    <p className="legend">Legend 1</p>
                  </div>
                  <div>
                    <img src={projectImage} />
                    <p className="legend">Legend 1</p>
                  </div>
                </Carousel>
              </div>

              <div className="info-box">
                <div className="title">The Mall</div>
                <div className="tag">PEER GUIDED SHOPPING.</div>
                <div className="detail">The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.</div>                
                <button className="button" type="button" >View Site</button>
                <button className="close" type="button" onClick={this.handleOpenModal}><i className="fa fa-times"></i></button>
              </div>
              
            </Modal>
          </React.Fragment>
        )
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
