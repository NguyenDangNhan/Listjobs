import React, { Component } from 'react'
import './listjob.css'
class Listjob extends Component {
delete=()=>
{
    this.props.baccau4("h")
}        
    render(){
        return (
           <div className="bd">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text">
                {this.props.Jobs}
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              </div>
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <div className="r">
                <button type="button" className="btn btn-warning" onClick={this.delete}>Xóa</button>
                </div>
              </div>
            </div>
          </div>)
    }


}
export default Listjob;