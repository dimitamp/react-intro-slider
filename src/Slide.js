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
    active,
    slideStyle
  } = props;

  return (
    <div
      className={`ris-slide ${
        active ? "ris-slide-active" : "ris-slide-inactive"
      }`}
      style={{ ...slideStyle, background }}
    >
      <div className="ris-slide-title-container">
        <div className="ris-slide-title" style={titleStyle}>
          {title}
        </div>
      </div>
      <div className="ris-slide-image-container">
        <img
          className="ris-slide-image"
          alt="slide"
          src={image}
          style={imageStyle}
        />
      </div>
      <div className="ris-slide-description-container">
        <div className="ris-slide-description" style={descriptionStyle}>
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
  active: PropTypes.bool,
  slideStyle: PropTypes.object
};

Slide.defaultProps = {
  title: "Title",
  image: "",
  description: "Description",
  background: "#ffeace",
  active: false
};

export default Slide;
