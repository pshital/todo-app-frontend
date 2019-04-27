import React, { Component } from 'react';
class AddTask extends Component {
      state={
            textEntered:""
      }
      onAddClicked=() =>
      {
          this.props.addTaskFunction(this.state.textEntered);      
      }
      onTextChanged=(event)=>{
            this.setState({textEntered: event.target.value})
      }
    render()
    {
        return(
         <div>
              <div class="row">
                          <div class= "col-lg-4 ">
                                <label>Enter your task</label>
                          </div>
                          <div class= "col-lg-6 ">
                                <input type="text" onChanged={this.onTextChanged} name="nAdd"></input>
                          </div>
                          <div class= "col-lg-2 ">
                                <button type="button" onClick={this.onAddClicked} class="btn btn-primary">ADD</button>
                          </div>
                        </div>
         </div>  
        );
    }
} 
        

export default AddTask;