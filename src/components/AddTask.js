import React, { Component } from 'react';
import moment from 'moment'
class AddTask extends Component {
      state={
            textEntered:""

      }

      onAddClicked=() =>
      {
           // const newDate= moment(this.state.date,"YYYY-MM-DD")
          this.props.addTaskFunction(this.state.textEntered);   
             
      }
      onTextChanged=(event)=>{
            this.setState({textEntered: event.target.value})
      }
      //onDatechanged=(event)=>{
        //    this.setState({date: event.target.value})
      //}
    render()
    {
        return(
         <div>
              <div class="row">
                          <div className= "col-lg-4 ">
                                <label>Enter your task</label>
                          </div>

                          <div className= "col-lg-6 ">
                                <input type="text" onChange={this.onTextChanged} name="nAdd"></input>
                          </div>
                         
                          <div className= "col-lg-2 ">
                                <button type="button" onClick={this.onAddClicked} class="btn btn-primary">ADD</button>
                          </div>
                        </div>
         </div>  
        );
    }
} 
        

export default AddTask;