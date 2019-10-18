import React, { Component } from 'react';
import './App.css';
import Morejob from './component/morejobs'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Jobs: "" }
  }
  jobpl = (job) => { this.setState({ Jobs: job }) }
  render() {
    return (
      <div >

        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Morejob baccau1={this.jobpl} />
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <p>{this.state.Jobs}</p>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
