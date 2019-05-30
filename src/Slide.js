import React from "react";
import PropTypes from "prop-types";

const Slide = props => {
  const {
    background,
    title,
    image,
    description,
    imageStyle,
    titleStyle,
    descriptionStyle,
    active
  } = props;
  return (
    <div
      className={`slide ${active ? "slide-active" : "slide-inactive"}`}
      style={{ background }}
    >
      <div className="slide-title-container">
        <div className="slide-title" style={titleStyle}>
          {title}
        </div>
      </div>
      <div className="slide-image-container">
        <img
          className="slide-image"
          alt="slide"
          src={image}
          style={imageStyle}
        />
      </div>
      <div className="slide-description-container">
        <div className="slide-description" style={descriptionStyle}>
          {description}
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  descriptionStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  description: PropTypes.string,
  imageStyle: PropTypes.object,
  background: PropTypes.string,
  active: PropTypes.bool
};

Slide.defaultProps = {
  title: "Title",
  image: "",
  descriptionStyle: {},
  titleStyle: {},
  description: "Description",
  imageStyle: {},
  background: "#ffeace",
  active: false
};

export default Slide;
