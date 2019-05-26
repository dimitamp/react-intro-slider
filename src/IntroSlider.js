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

  render() {
    const {
      slides: sl,
      imageStyle,
      titleStyle,
      descriptionStyle,
      button,
      size
    } = this.props;
    const { activeSlide } = this.state;
    const slides = sl.map(slide => {
      const { title, description, image, background } = slide;
      return (
        <Slide
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
        <div className={`slides-container ${size}`}>
          {slides[activeSlide]}
          <Controller
            slides={slides.length}
            activeSlide={activeSlide}
            button={button}
            nextSlide={this.nextSlide}
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
  button: PropTypes.bool,
  handleDone: PropTypes.func.isRequired
};

IntroSlider.defaultProps = {
  size: "small",
  slides: [],
  descriptionStyle: {},
  titleStyle: {},
  imageStyle: {},
  button: true
};
