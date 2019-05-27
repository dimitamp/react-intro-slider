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
    this.nextSlide = this.nextSlide.bind(this);
    this.handleLeftSwipe = this.handleLeftSwipe.bind(this);
    this.handleRightSwipe = this.handleRightSwipe.bind(this);
    this.skipSlider = this.skipSlider.bind(this);
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
    const { handleDone } = this.props;
    handleDone();
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
      controllerIconStyle,
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
        <div className={`slides-container ${containerSize}`}>
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
            controllerIconStyle={controllerIconStyle}
          />
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
  controllerIconStyle: PropTypes.object
};

IntroSlider.defaultProps = {
  size: "small",
  slides: []
};
