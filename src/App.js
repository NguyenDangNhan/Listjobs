import React, { Component } from 'react';
import './App.css';
import './component/listjob.css'
import Morejob from './component/morejobs'
import Listjob from './component/listjob';
import Deletejob from './component/delete'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Jobs: "",
      listjob: [],
      deletejb: "",
      addjobs: false,
    }
  }
  jobpl = (job) => { this.setState({ Jobs: job }) }
  listjb = () => {

    let s = this.state.listjob
    if (this.state.Jobs !== "") {
      s.push(<Listjob Jobs={this.state.Jobs}  delete={<Deletejob baccau4={this.delete}/>}/>)
      this.setState(
        {
          listjob: s,
          Jobs: ""
        }
      )
    }
  }
  delete = () => {
     let s=this.state.listjob
     s.pop()
    
  }

  deleteaddjobs = () => {
    this.setState({ addjobs: false })
  }
  addjob = () => {
    this.setState({ addjobs: true })
  }
  render() {
    let element = this.state.listjob
    let addj = this.state.addjobs ? <Morejob
      baccau1={this.jobpl}
      baccau2={this.deleteaddjobs}
      baccau={this.listjb}
    /> : "";
    return (
      <div>
        <div id="top-50" className="row">
          <div className={this.state.addjobs ? "col-xs-5 col-sm-5 col-md-5 col-lg-5 " : "col-xs-0 col-sm-0 col-md-0 col-lg-0 "}>
            {addj}
          </div>
          <div className={this.state.addjobs ? "col-xs-7 col-sm-7 col-md-7 col-lg-7 " : "col-xs-12 col-sm-12 col-md-12 col-lg-12 "}>
            <button type="button" className="btn btn-success" onClick={this.addjob}>Thêm công việc</button>
            <div className="cach"></div>
            <div className="panel panel-default ">
              <div className="panel-heading">Danh sách công việc</div>
            </div>
            <div className="scroll">
              <div className="scroll2">
                {element}
              </div>
            </div>
          </div>
        </div>
      </div>)

  }
}

export default App;
