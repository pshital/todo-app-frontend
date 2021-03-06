import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import DisplayTask from './components/DisplayTask';
import TaskRemaining from './components/TaskRemaining';
import uuid1 from 'uuid/v1';
import axios from 'axios';

class App extends Component {
  state = {
    tasks: []
  }

  addTask = (taskText) => {
    let currentListOfTasks = this.state.tasks;
    const taskid = uuid1();
    const newTask = {
      taskDescription: taskText,
      id: taskid,
      completed: false
      
    }
    currentListOfTasks.push(newTask);
    this.setState({ tasks: currentListOfTasks })

  }

  deleteTask = (taskid) => {
    const existingTask = this.state.tasks;
    const filterTask = existingTask.filter(function (item, index) {
      return item.id !== taskid;
    });
    this.setState({ tasks: filterTask })

  }

  doneTasks = (taskid) => {
    let tempTasklist = this.state.tasks.map(task => {
      if (task.id === taskid) {
        return {
          id: task.id,
          taskDescription: task.taskDescription,
          completed: true,
          
        }
      } else {
        return task
      }
    });
    this.setState({ tasks: tempTasklist })
    
  }

  countRemainingTask = ()=> {
    let count = 0;
    const existingTask = this.state.tasks;
  
    for (let i = 0; i < existingTask.length; i++) {
      
      if (!existingTask[i].completed){
      
        count++;
      }
  
    }
   return count;
   
  }

  componentDidMount =()=>{
    axios.get('https://j0nyne8byl.execute-api.eu-west-2.amazonaws.com/dev/tasks')
      .then(response => {
              this.setState({
              tasks: response.data.task});
    })
        . catch(err => {
          console.log(err);
        })
        
  }
  

  render() {

    return (
      <div className="container">
        <div >
          <div class>
            <Header />
          </div>
          <div >
            <div >
              <AddTask addTaskFunction={this.addTask.bind(this)} />
            </div>
            <div>
              <TaskRemaining taskCount={this.countRemainingTask} />
            </div>
            {
              this.state.tasks.map((item, index) => {
                return <DisplayTask task={item} key={index} 
                deletetaskFunction={this.deleteTask} donetaskFunction={this.doneTasks} />
              })

            }
            
          </div>

        </div>
      </div>
    );
  }
}

export default App;
