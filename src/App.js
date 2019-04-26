import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import AddTask from './components/AddTask'
import DisplayTask from './components/DisplayTask'
import TaskRemaining from './components/TaskRemaining'


class App extends Component {
  state = {
    tasks: []
  }

  addTask(taskDecription) {
    let currentListOfTasks = this.state.tasks;
    currentListOfTasks.push(taskDecription);
    this.setState({ tasks: currentListOfTasks })

  }
  render() {
    //const tasks=["a","b","c","d"]
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
              <TaskRemaining taskCount={this.state.tasks.length}/>
            </div>
            {
              this.state.tasks.map(function (item, index) {
                return <DisplayTask tasksName={item} key={index} />
              })
            }
           
            </div>
        </div>
        </div>
        );
      }
    }
    
    export default App;
