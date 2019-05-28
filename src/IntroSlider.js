import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import { Swipeable } from "react-swipeable";
import Slide from "./Slide";
import Controller from "./Controller";

export default class IntroSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeSlide: 0 };
    this.sliderRef = React.createRef();
    this.nextSlide = this.nextSlide.bind(this);
    this.handleLeftSwipe = this.handleLeftSwipe.bind(this);
    this.handleRightSwipe = this.handleRightSwipe.bind(this);
    this.skipSlider = this.skipSlider.bind(this);
    this.documentClicked = this.documentClicked.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.documentClicked, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.documentClicked, false);
  }

  handleLeftSwipe() {
    const { activeSlide } = this.state;
    const { slides } = this.props;
    let newSlide = activeSlide + 1;
    if (newSlide >= slides.length) {
      newSlide = slides.length - 1;
    }
    this.setState({ activeSlide: newSlide });
  }

  handleRightSwipe() {
    const { activeSlide } = this.state;
    let newSlide = activeSlide - 1;
    if (newSlide < 0) {
      newSlide = 0;
    }
    this.setState({ activeSlide: newSlide });
  }

  nextSlide() {
    const { activeSlide } = this.state;
    const { slides, handleDone } = this.props;
    const newSlide = activeSlide + 1;
    if (newSlide === slides.length) {
      handleDone();
    } else {
      this.setState({ activeSlide: activeSlide + 1 });
    }
  }

  skipSlider() {
    const { handleClose } = this.props;
    handleClose();
  }

  documentClicked(e) {
    const { handleClose, closeOnOverlayClick } = this.props;
    if (
      e.target === this.sliderRef.current ||
      this.sliderRef.current.contains(e.target) ||
      !closeOnOverlayClick
    )
      return;
    handleClose();
  }

  render() {
    const {
      slides: sl,
      imageStyle,
      titleStyle,
      descriptionStyle,
      nextButton,
      skipButton,
      skipButtonStyle,
      nextButtonStyle,
      controllerOrientation,
      controllerIconActiveStyle,
      controllerIconInactiveStyle,
      sliderOverlayStyle,
      sliderStyle,
      size
    } = this.props;
    const containerSize = window.innerWidth < 500 ? "fullscreen" : size;
    const { activeSlide } = this.state;
    const slides = sl.map((slide, index) => {
      const { title, description, image, background } = slide;
      return (
        <Slide
          active={index === activeSlide}
          key={title}
          title={title}
          description={description}
          image={image}
          imageStyle={imageStyle}
          titleStyle={titleStyle}
          descriptionStyle={descriptionStyle}
          background={background}
        />
      );
    });
    return (
      <Swipeable
        onSwipedLeft={this.handleLeftSwipe}
        onSwipedRight={this.handleRightSwipe}
      >
        <div className="slider-overlay" style={sliderOverlayStyle}>
          <div className="slider-container">
            <div
              className={`slider ${containerSize}`}
              style={sliderStyle}
              ref={this.sliderRef}
            >
              {slides}
              <Controller
                slides={slides.length}
                activeSlide={activeSlide}
                nextButton={nextButton}
                skipButton={skipButton}
                skipButtonStyle={skipButtonStyle}
                nextButtonStyle={nextButtonStyle}
                nextSlide={this.nextSlide}
                skipSlider={this.skipSlider}
                orientation={controllerOrientation}
                controllerIconActiveStyle={controllerIconActiveStyle}
                controllerIconInactiveStyle={controllerIconInactiveStyle}
              />
            </div>
          </div>
        </div>
      </Swipeable>
    );
  }
}

IntroSlider.propTypes = {
  descriptionStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  slides: PropTypes.array,
  size: PropTypes.string,
  nextButton: PropTypes.bool,
  skipButton: PropTypes.bool,
  handleDone: PropTypes.func.isRequired,
  skipButtonStyle: PropTypes.object,
  nextButtonStyle: PropTypes.object,
  controllerOrientation: PropTypes.string,
  sliderOverlayStyle: PropTypes.object,
  sliderStyle: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  closeOnOverlayClick: PropTypes.bool,
  controllerIconActiveStyle: PropTypes.object,
  controllerIconInctiveStyle: PropTypes.object
};

IntroSlider.defaultProps = {
  size: "small",
  slides: [],
  sliderOverlayStyle: null,
  sliderStyle: null,
  closeOnOverlayClick: true
};
