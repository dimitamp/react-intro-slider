import React, { useState } from "react";
import { render } from "react-dom";
import IntroSlider from "../../src/IntroSlider";

const App = () => {
  const [sliderIsOpen, setSliderIsOpen] = useState(true);

  const handleClose = () => {
    setSliderIsOpen(false);
  };

  const slides = [
    {
      title: "React Intro Slider",
      description: "Configurable app introduction slider",
      background: "#D497F0",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Film_reel.svg"
    },
    {
      title: "Highly Customizable",
      description:
        "Behavior and looks can be customized by passing the necessary props to the slider",
      image:
        "https://i.pinimg.com/originals/e3/12/cc/e312ccd032c57a24de52b002270fffb1.png"
    },
    {
      title: "Still in development",
      background: "#ADD8E6",
      image:
        "http://holidaywonders.net/wp-content/uploads/2019/05/unique-cartoon-rocket-ship-clipart-clip-art-bay-inspiration.png",
      description: "More features will be added!"
    }
  ];
  return (
    <React.Fragment>
      <IntroSlider
        sliderIsOpen={sliderIsOpen}
        slides={slides}
        size="large"
        skipButton
        handleClose={handleClose}
        sliderStyle={{ borderRadius: "10px" }}
        slideStyle={{ borderRadius: "10px" }}
      />
      <div
        className="example-view"
        style={{
          backgroundColor: "#333",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <p
          className="example-content"
          style={{ color: "#ffffff", textAlign: "center", width: "80%" }}
        >
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`}
        </p>
      </div>
    </React.Fragment>
  );
};
render(<App />, document.getElementById("root"));
