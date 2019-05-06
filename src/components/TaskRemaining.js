import React, { Component } from 'react';
class TaskRemaining extends Component {
    render() {
        return (
            
            <p>You have {this.props.taskCount()} remaining tasks</p>
            
        );
   }
}
export default TaskRemaining;