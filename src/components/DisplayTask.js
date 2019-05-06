import React, { Component } from 'react';

class DisplayTask extends Component {

    
    render() {
        return (
            <div class="row">
            
                <div className="col-sm-12 col-md-8 " >
                    <span style={{'text-decoration': this.props.task.completed ? 'line-through': 'none'}}>
                   
                    {this.props.task.taskDescription}
                    </span> 
                    
                    
                </div>

                <div className="col-sm-6 col-md-2">
                    <button type="button" onClick={()=>this.props.donetaskFunction(this.props.task.id)}  class="btn btn-primary">Done</button>
                </div>
                <div className="col-sm-6 col-md-2" >
                    <button type="button" onClick={()=>this.props.deletetaskFunction(this.props.task.id)} class="btn btn-primary">Delete</button>
                </div>

            </div>

        );
    }
}


export default DisplayTask;
