import React, { Component, Fragment } from "react";
import "./Wizard.scss";

class Wizard extends Component {
  constructor(props) {
    super(props);

    // const WizardSetting = {
    //   flow: [
    //     {
    //       IndicatorName: "",
    //       IndicatorComponent: {},
    //       NextButtonName: ""
    //     }
    //   ]
    // };

    console.log(this.props.WizardSetting);

    this.onNext = this.onNext.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
    this.state = {
      currentIndex: 0
    };
  }

  componentDidMount() {}

  onNext() {
    this.setState(
      (preState, props) => {
        if (preState.currentIndex < this.props.WizardSetting.flow.length) {
          return { currentIndex: preState.currentIndex + 1 };
        }
      },
      () => {
        console.log(this.state.currentIndex);
      }
    );
  }

  onPrevious() {
    this.setState((preState, props) => {
      if (preState.currentIndex > 0) {
        return { currentIndex: preState.currentIndex - 1 };
      }
    });
  }

  getIndicatorStatus(i) {
    if (i <= this.state.currentIndex) {
      return "wizard-indicator active";
    } else {
      return "wizard-indicator";
    }
  }

  getComponentActiveStatus(i) {
    return this.state.currentIndex === i ? "" : "hidden";
  }

  renderButtons() {
    const currentFlow = this.props.WizardSetting.flow[this.state.currentIndex];

    return (
      <Fragment>
        {(() => {
          if (
            this.props.WizardSetting.flow.length >= 1 &&
            this.state.currentIndex >= 0 &&
            (currentFlow !== undefined && currentFlow !== null)
          ) {
            return <button onClick={this.onPrevious}>Back</button>;
          }
        })()}
        {(() => {
          if (currentFlow !== undefined && currentFlow !== null) {
            return (
              <button onClick={this.onNext}>
                {currentFlow.NextButtonName}
              </button>
            );
          }
        })()}
        <button onClick={this.props.toggle}>Cancel</button>
      </Fragment>
    );
  }

  render() {
    return (
      <div className="wizard-wrapper">
        <div className="wizard-indicators">
          {this.props.WizardSetting.flow.map((item, index) => {
            return (
              <div key={index} className={this.getIndicatorStatus(index)}>
                {item.IndicatorName}
              </div>
            );
          })}
        </div>
        <div className="wizard-container">
          {this.props.WizardSetting.flow.map((item, index) => {
            return (
              <div key={index} className={this.getComponentActiveStatus(index)}>
                {item.IndicatorComponent}
              </div>
            );
          })}
        </div>
        <div className="wizard-bottom">{this.renderButtons()}</div>
      </div>
    );
  }
}

export default Wizard;
