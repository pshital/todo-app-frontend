import React, { Component } from 'react';
class AddTask extends Component {
    render()
    {
        return(
         <div>
              <div class="row">
                          <div class= "col-lg-4 first">
                                <label>Enter your task</label>
                            
                          </div>
                          <div class= "col-lg-6 second">
                                <input type="text" name="nAdd"></input>
                          </div>
                          <div class= "col-lg-2 third">
                                <button type="button" class="btn btn-primary">ADD</button>
                          </div>
                        </div>
         </div>  
        );
    }
} 
        

export default AddTask;