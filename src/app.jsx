import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import Headers from "./components/common/Header";
import ProductList from "./components/product/ProductList";
import NewsList from "./components/news/NewsList";
import Wizard from "./components/common/Wizard";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./styles.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="AppContainer">
        <Headers />
        <Switch>
          <Route path="/product" component={ProductList} />
          <Route path="/news" component={NewsList} />
        </Switch>

        <div>
          <Button color="danger" onClick={this.toggle}>
            Test Modal
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            centered={true}
            className="mw-70p"
          >
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              <Wizard />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Do Something
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
