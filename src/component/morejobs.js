import React, { Component } from 'react'

class Morejob extends Component {
    constructor(props) {
        super(props)
        this.stage = {
            Jobs: ""
        }
    }
    onsubmit = (event) => { event.preventDefault(); }
    jobs = (job) => { this.setState({ Jobs: job.target.value }) }
    themjobs = () => { this.props.baccau1(this.state.Jobs) }
    render() {
        return (
            <div>
                <div class="panel panel-warning">
                    <div class="panel-heading">
                        <h3 class="panel-title">Thêm công việc</h3>
                    </div>
                    <div class="panel-body">

                        <form onSubmit={this.onsubmit}>
                            <div class="form-group">
                                <label>Nhập vào công việc cần làm</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    onChange={this.jobs} />
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={this.themjobs}>Lưu</button>
                        </form>
                    </div>
                </div>
            </div>)
    }


}
export default Morejob;