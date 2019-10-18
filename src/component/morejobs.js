import React, { Component } from 'react'
//import Listjob from './listjob'
class Morejob extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Jobs: ""
        }
    }
    onsubmit = (event) => { event.preventDefault(); }
    jobs = (job) => {this.props.baccau1(job.target.value);;}
    themjobs = () => {
        this.props.baccau();
        document.getElementById("job").value = "";
        this.setState({ Jobs: "" })
    }
    dele=()=>{
        this.props.baccau2()
    }
    render() {
        return (
            <div>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <h3 className="panel-title">Thêm công việc</h3>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            </div>
                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            <button className="delete"  onClick={this.dele}>X</button>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">

                        <form onSubmit={this.onsubmit}>
                            <div className="form-group">
                                <label>Nhập vào công việc cần làm</label>
                                <input
                                    id="job"
                                    type="text"
                                    className="form-control"
                                    onChange={this.jobs} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.themjobs} >Lưu</button>
                        </form>
                    </div>
                </div>
            </div>)
    }


}
export default Morejob;