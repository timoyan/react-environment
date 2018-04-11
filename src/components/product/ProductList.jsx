import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import ProductCreate from "./ProductCreate";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.match = props.match;
  }
  render() {
    return (
      <div className="ProductContainer">
        <div className="ProductFunctionBar">
          <Link to="/product/create">Create Product</Link>
        </div>
        <div className="ProductItem">Product1</div>
        <div className="ProductItem">Product2</div>
        <div className="ProductItem">Product3</div>
        <Switch>
          <Route
            exact
            path={`${this.match.url}/create`}
            component={ProductCreate}
          />
        </Switch>
      </div>
    );
  }
}

export default ProductList;
