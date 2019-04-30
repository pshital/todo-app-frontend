import React, { Component } from 'react';

class DisplayTask extends Component {

    //state={
      //  taskdescription:""
    //}
onDeleteClicked=() =>
{
    //this.taskdescription=this.props.taskName;
    //alert("you have click delete", this.taskdescription);
    this.props.deleteTaskFunction(this.props.taskName); 
         
}
    
    render() {
        return (
            <div class="row">
             
                    <div className="col-sm-12 col-md-8">
                       {this.props.taskName}
                    </div>
                    <div className="col-sm-6 col-md-2">
                    <button type="button" onClick={this.onDeleteClicked()} class="btn btn-primary">Delete</button>
                    </div>
                    <div className="col-sm-6 col-md-2">
                    <button type="button" class="btn btn-primary">Done</button>
                    </div>
                
            </div>

        );
    }
}


export default DisplayTask;
