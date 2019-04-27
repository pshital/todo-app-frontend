import React, { Component } from 'react';




class DisplayTask extends Component {

    
    render() {
        return (
            <div class="row">
             
                    <div className="col-sm-12 col-md-8">
                       {this.props.taskName}
                    </div>
                    <div className="col-sm-6 col-md-2">
                    <button type="button"  class="btn btn-primary">Delete</button>
                    </div>
                    <div className="col-sm-6 col-md-2">
                    <button type="button" class="btn btn-primary">Done</button>
                    </div>
                
            </div>

        );
    }
}


export default DisplayTask;
