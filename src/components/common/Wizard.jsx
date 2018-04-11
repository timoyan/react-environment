import React, { Component } from "react";
import "./Wizard.scss";

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.onNext = this.onNext.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
    this.state = {
      currentIndex: 0,
      indicators: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
    };
  }

  componentDidMount() {}

  onNext() {
    this.setState((preState, props) => {
      if (preState.currentIndex < this.state.indicators.length) {
        return { currentIndex: preState.currentIndex + 1 };
      }
    });
  }

  onPrevious() {
    this.setState((preState, props) => {
      if (preState.currentIndex > 0) {
        return { currentIndex: preState.currentIndex - 1 };
      }
    });
  }

  getIndicatorClass(i) {
    if (i + 1 <= this.state.currentIndex) {
      return "wizard-indicator active";
    } else {
      return "wizard-indicator";
    }
  }

  render() {
    return (
      <div className="wizard-wrapper">
        <div className="wizard-indicators">
          {this.state.indicators.map((item, index) => {
            return (
              <div key={item} className={this.getIndicatorClass(index)}>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <div className="wizard-container" />
        <div className="wizard-bottom">
          <button onClick={this.onPrevious}>Previous</button>
          <button onClick={this.onNext}>Next</button>
        </div>
      </div>
    );
  }
}

export default Wizard;
