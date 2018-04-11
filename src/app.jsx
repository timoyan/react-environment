import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import Headers from "./components/common/Header";
import ProductList from "./components/product/ProductList";
import NewsList from "./components/news/NewsList";
import Wizard from "./components/common/Wizard";

class App extends React.Component {
  render() {
    return (
      <div className="AppContainer">
        <Headers />
        <Switch>
          <Route path="/product" component={ProductList} />
          <Route path="/news" component={NewsList} />
        </Switch>
        <Wizard />
      </div>
    );
  }
}

export default App;
