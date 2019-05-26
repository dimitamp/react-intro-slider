import React from "react";
import { render } from "react-dom";
import IntroSlider from "../../src/IntroSlider";

class App extends React.Component {
  constructor() {
    super();
    this.state = { walkthroughIsOpen: true };
    this.handleDone = this.handleDone.bind(this);
  }

  handleDone() {
    this.setState({ walkthroughIsOpen: false });
  }

  render() {
    const { walkthroughIsOpen } = this.state;
    const slides = [
      {
        title: "First Slide",
        description: "Introductory slide",
        image:
          "http://logowiki.net/wp-content/uploads/imgp/Intro-Logo-1-8995.png"
      },
      {
        title: "Last Slide",
        background: "#ADD8E6",
        image:
          "http://andymanaras.com/wp-content/uploads/2017/07/outro-1_400x300_acf_cropped.png",
        description: "You finished the walkthrough"
      }
    ];
    return (
      walkthroughIsOpen && (
        <IntroSlider
          size="medium"
          slides={slides}
          handleDone={this.handleDone}
        />
      )
    );
  }
}
render(<App />, document.getElementById("root"));
