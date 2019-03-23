import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { InputSwitch } from 'primereact/inputswitch';
import C23 from "./components/C23";

// import { Link } from 'react-router-dom';

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          {/* <InputSwitch checked={this.state.value} onChange={(e) => this.setState({value: e.value})} /> */}
          <h1>GateReader</h1>
          <Link to="/C23">C23</Link>
          <Link to="/C24">C24</Link>
          <Link to="/C25">C25</Link>
          <Link to="/C26">C26</Link>
          <Link to="/C27">C27</Link>
          <Link to="/C28">C28</Link>
          <Link to="/C29">C29</Link>

          {/* <Route path="/" component={App} /> */}
          <Route path="/C23" component={C23} />
       
        </div>
      </Router>
    );
  }
}

export default App;
