import React, { Component } from 'react';
import { Zoom } from 'react-reveal';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class Portfolio extends Component {

  constructor() {
    super();
    this.state = {
      showModalOne: false,
      showModalTwo: false,
      showModalThree: false,
      showModalFour: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  handleOpenModal(nameModal) {
    this.setState({ [nameModal]: true });
  }

  handleCloseModal(nameModal) {
    this.setState({ [nameModal]: false });
  }

  openImage(image) {
    window.open(image);
  }

  render() {

    const arrowStyles = {
      position: 'absolute',
      zIndex: 2,
      top: 'calc(85%)',
      width: 65,
      height: 55,
      cursor: 'pointer',
      background: 'rgba(71, 71, 71, 0.5) none repeat scroll 0% 0%',
      color: '#fff',
      border: '2px solid #fff',
    };

    if (this.props.data) {
      var projects = this.props.data.projects.map((projects) => {

        var projectImage = 'images/portfolio/' + projects.image;
        let carouselImages = projects.imagesCarousel.split(',').map((images) => {

          var image = 'images/portfolio/' + images;
          let openImage = 'images/portfolio/full/' + images
          return <div className="open-image-portfolio" key={images} onClick={() => { this.openImage(openImage) }}>
            <img src={image} alt={projects.title} className="open-image-portfolio" />
          </div>
        });

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
                      <button className="learn-more-button" type="button" onClick={() => { this.handleOpenModal(projects.nameModal) }}> Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Zoom>

            <Modal
              shouldCloseOnEsc={true}
              onRequestClose={() => { this.handleCloseModal(projects.nameModal) }}
              shouldCloseOnOverlayClick={true}
              isOpen={this.state[projects.nameModal]}
              overlayClassName="portfolio-modal-overlay"
              className="portfolio-modal"
              contentLabel={projects.title}
            >
              <div className="carousel">
                <Carousel
                  showStatus={false}
                  showThumbs={false}
                  renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                      <button type="button" style={{ ...arrowStyles, left: 15 }}
                        onClick={onClickHandler} title={label} >
                        <i className="fa fa-chevron-left carousel-icon"></i>
                      </button>
                    )
                  }
                  renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                      <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                        <i className="fa fa-chevron-right carousel-icon"></i>
                      </button>
                    )
                  }
                >
                  {carouselImages}
                </Carousel>
              </div>

              <div className="info-box">
                <div className="title">{projects.title}</div>
                <div className="tag">{projects.category}</div>
                <div className="detail">{projects.description}.</div>
                <div style={{marginTop:"5px", position: 'absolute', bottom: 0}}>
                  {projects.url ? <a className="button" type="button" target="_blank"  rel="noopener noreferrer" href={projects.url}>View Site</a>
                    : ''}
                  <button className="close" type="button" onClick={() => { this.handleCloseModal(projects.nameModal) }}><i className="fa fa-times"></i></button>
                </div>
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
