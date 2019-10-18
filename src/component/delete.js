import React, { Component } from 'react'
import './listjob.css'
class Deletejob extends Component {
delete=()=>
{
    this.props.baccau4()
}        
    render(){
        return ( <button type="button" className="btn btn-warning" onClick={this.delete}>Xóa</button>)
    }


}
export default Deletejob;