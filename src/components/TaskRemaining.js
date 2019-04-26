import React, { Component } from 'react';
class TaskRemaining extends Component {
    render() {
        return (
            <div className="remainingTask">
            <p>You have {this.props.taskCount} remaining tasks</p>
            </div>
        );

    }
}
export default TaskRemaining;