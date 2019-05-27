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
      <React.Fragment>
        {walkthroughIsOpen && (
          <IntroSlider slides={slides} handleDone={this.handleDone} />
        )}
        <div
          className="example-view"
          style={{
            backgroundColor: "#333",
            height: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10%"
          }}
        >
          <p
            className="example-content"
            style={{ color: "#ffffff", textAlign: "center" }}
          >
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`}
          </p>
        </div>
      </React.Fragment>
    );
  }
}
render(<App />, document.getElementById("root"));
