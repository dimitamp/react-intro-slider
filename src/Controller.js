import React from "react";
import PropTypes from "prop-types";

const Controller = props => {
  const {
    activeSlide,
    slides,
    controllerIconActiveStyle,
    controllerIconInactiveStyle,
    nextButton,
    nextButtonStyle,
    nextSlide,
    skipSlider,
    skipButton,
    skipButtonStyle,
    orientation
  } = props;
  const controllerIcons = [];
  for (let i = 0; i < slides; i += 1) {
    controllerIcons.push(
      activeSlide === i ? (
        <div
          key={i}
          style={controllerIconActiveStyle}
          className="bullet bullet-active"
        />
      ) : (
        <div
          key={i}
          style={controllerIconInactiveStyle}
          className="bullet bullet-inactive"
        />
      )
    );
  }
  let buttonText = "NEXT";
  if (activeSlide === slides - 1) {
    buttonText = "DONE";
  }
  const renderVerticalController = () => {
    return (
      <div className="controller-container controller-vertical">
        <div className="slide-icons-container">{controllerIcons}</div>
        {nextButton && (
          <button
            type="button"
            className="control-button button-vertical"
            onClick={nextSlide}
            style={nextButtonStyle}
          >
            {buttonText}
          </button>
        )}
        {skipButton && (
          <button
            type="button"
            className="control-button button-vertical"
            onClick={skipSlider}
            style={skipButtonStyle}
          >
            SKIP
          </button>
        )}
      </div>
    );
  };
  const renderHorizontalController = () => {
    return (
      <div className="controller-container controller-horizontal">
        <div className="slide-icons-container">{controllerIcons}</div>
        {skipButton && (
          <button
            type="button"
            className="control-button button-horizontal"
            onClick={skipSlider}
            style={skipButtonStyle}
          >
            SKIP
          </button>
        )}
        {nextButton && (
          <button
            type="button"
            className="control-button button-horizontal"
            onClick={nextSlide}
            style={nextButtonStyle}
          >
            {buttonText}
          </button>
        )}
      </div>
    );
  };

  return orientation === "vertical"
    ? renderVerticalController()
    : renderHorizontalController();
};

Controller.propTypes = {
  activeSlide: PropTypes.number,
  slides: PropTypes.number,
  nextButton: PropTypes.bool,
  nextSlide: PropTypes.func.isRequired,
  skipButton: PropTypes.bool,
  skipSlider: PropTypes.func.isRequired,
  skipButtonStyle: PropTypes.object,
  nextButtonStyle: PropTypes.object,
  orientation: PropTypes.string,
  controllerIconActiveStyle: PropTypes.object,
  controllerIconInactiveStyle: PropTypes.object
};

Controller.defaultProps = {
  activeSlide: 0,
  slides: [],
  nextButton: true,
  skipButton: false,
  skipButtonStyle: null,
  nextButtonStyle: null,
  orientation: "vertical",
  controllerIconActiveStyle: null,
  controllerIconInactiveStyle: null
};

export default Controller;
