import React from "react";
import PropTypes from "prop-types";

const Controller = props => {
  const { activeSlide, slides, button, buttonStyle, nextSlide } = props;
  const slideIcons = [];
  for (let i = 0; i < slides; i += 1) {
    slideIcons.push(
      <div
        key={i}
        className={`bullet ${activeSlide === i ? "active" : "inactive"}`}
      />
    );
  }
  let buttonText = "NEXT";
  if (activeSlide === slides - 1) {
    buttonText = "DONE";
  }
  return (
    <div className="controller-container">
      <div className="slide-icons-container">{slideIcons}</div>
      {button && (
        <button
          type="button"
          className="control-button"
          onClick={nextSlide}
          style={buttonStyle}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

Controller.propTypes = {
  activeSlide: PropTypes.number,
  slides: PropTypes.number,
  button: PropTypes.bool,
  buttonStyle: PropTypes.object,
  nextSlide: PropTypes.func.isRequired
};

Controller.defaultProps = {
  activeSlide: 0,
  slides: [],
  button: true,
  buttonStyle: {}
};

export default Controller;
