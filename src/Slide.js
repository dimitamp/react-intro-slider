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
    descriptionStyle
  } = props;
  return (
    <div className="slide" style={{ background }}>
      <div className="slide-title" style={titleStyle}>
        {title}
      </div>
      <div className="slide-image-container">
        <img
          className="slide-image"
          alt="slide"
          src={image}
          style={imageStyle}
        />
      </div>

      <div className="slide-description" style={descriptionStyle}>
        {description}
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
  background: PropTypes.string
};

Slide.defaultProps = {
  title: "Title",
  image: "",
  descriptionStyle: {},
  titleStyle: {},
  description: "Description",
  imageStyle: {},
  background: "#ffeace"
};

export default Slide;
