import React, { useEffect, useState } from "react";
import "./styles.css";
import PropTypes from "prop-types";
import { Swipeable } from "react-swipeable";
import Slide from "./Slide";
import Controller from "./Controller";

const IntroSlider = ({
  sliderIsOpen,
  slides,
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
  closeOnOverlayClick,
  sliderStyle,
  handleClose: handeCloseFunction,
  handleDone,
  nextLabel,
  skipLabel,
  doneLabel,
  controllerIconActive,
  controllerIconInactive,
  size
}) => {
  const [activeSlide, useActiveSlide] = useState(0);
  const sliderRef = React.createRef();
  const handleClose = handeCloseFunction || (() => {});
  const documentClicked = e => {
    if (
      e.target === sliderRef.current ||
      sliderRef.current.contains(e.target) ||
      !closeOnOverlayClick
    )
      return;
    handleClose();
  };

  useEffect(() => {
    document.addEventListener("click", documentClicked, false);
    return () => {
      document.removeEventListener("click", documentClicked, false);
    };
  }, []);

  const handleLeftSwipe = () => {
    let newSlide = activeSlide + 1;
    if (newSlide >= slides.length) {
      newSlide = 0;
    }
    useActiveSlide(newSlide);
  };

  const handleRightSwipe = () => {
    let newSlide = activeSlide - 1;
    if (newSlide < 0) {
      newSlide = slides.length - 1;
    }
    useActiveSlide(newSlide);
  };

  const nextSlide = () => {
    const newSlide = activeSlide + 1;
    if (newSlide === slides.length) {
      if (handleDone) {
        handleDone();
      }
      handleClose();
    } else {
      useActiveSlide(newSlide);
    }
  };

  const renderedSlides = slides.map((slide, index) => {
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
  const containerSize = window.innerWidth < 400 ? "fullscreen" : size;
  return (
    sliderIsOpen && (
      <Swipeable
        onSwipedLeft={handleLeftSwipe}
        onSwipedRight={handleRightSwipe}
      >
        <div className="ris-slider-overlay" style={sliderOverlayStyle}>
          <div className="ris-slider-container">
            <div
              className={`ris-slider ris-${containerSize}`}
              style={sliderStyle}
              ref={sliderRef}
            >
              {renderedSlides}
              <Controller
                slides={slides.length}
                activeSlide={activeSlide}
                nextButton={nextButton}
                skipButton={skipButton}
                skipButtonStyle={skipButtonStyle}
                nextButtonStyle={nextButtonStyle}
                nextSlide={nextSlide}
                skipSlider={handleClose}
                orientation={controllerOrientation}
                controllerIconActiveStyle={controllerIconActiveStyle}
                controllerIconInactiveStyle={controllerIconInactiveStyle}
                nextLabel={nextLabel}
                doneLabel={doneLabel}
                skipLabel={skipLabel}
                controllerIconActive={controllerIconActive}
                controllerIconInactive={controllerIconInactive}
              />
            </div>
          </div>
        </div>
      </Swipeable>
    )
  );
};

IntroSlider.propTypes = {
  sliderIsOpen: PropTypes.bool,
  descriptionStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  slides: PropTypes.array,
  size: PropTypes.string,
  nextButton: PropTypes.bool,
  skipButton: PropTypes.bool,
  handleDone: PropTypes.func,
  skipButtonStyle: PropTypes.object,
  nextButtonStyle: PropTypes.object,
  controllerOrientation: PropTypes.string,
  sliderOverlayStyle: PropTypes.object,
  sliderStyle: PropTypes.object,
  handleClose: PropTypes.func,
  closeOnOverlayClick: PropTypes.bool,
  controllerIconActiveStyle: PropTypes.object,
  controllerIconInactiveStyle: PropTypes.object,
  nextLabel: PropTypes.string,
  skipLabel: PropTypes.string,
  doneLabel: PropTypes.string,
  controllerIconActive: PropTypes.node,
  contollerIconInactive: PropTypes.node
};

IntroSlider.defaultProps = {
  sliderIsOpen: false,
  size: "medium",
  slides: [],
  sliderOverlayStyle: null,
  sliderStyle: null,
  closeOnOverlayClick: true,
  activeSlide: 0,
  nextButton: true,
  skipButton: false,
  skipButtonStyle: null,
  nextButtonStyle: null,
  controllerOrientation: "vertical",
  controllerIconActiveStyle: null,
  controllerIconInactiveStyle: null,
  descriptionStyle: null,
  titleStyle: null,
  imageStyle: null
};

export default IntroSlider;
