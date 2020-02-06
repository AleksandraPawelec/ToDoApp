import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  counter = 4;
  state = {
    tasks: [
      // {
      //   id: 0,
      //   text: "nauczć się nowego języka",
      //   date: "2020-04-01",
      //   important: false,
      //   active: true,
      //   finishDate: null
      // },
      // {
      //   id: 1,
      //   text: "opłacić rachunki",
      //   date: "2020-02-25",
      //   important: true,
      //   active: true,
      //   finishDate: null
      // },
      // {
      //   id: 2,
      //   text: "oddać projekt",
      //   date: "2020-05-10",
      //   important: true,
      //   active: true,
      //   finishDate: null
      // },
      // {
      //   id: 3,
      //   text: "zapisać się na event",
      //   date: "2020-02-12",
      //   important: false,
      //   active: true,
      //   finishDate: null
      // }
    ]
  };
  deleteTask = id => {
    let tasks = [...this.state.tasks];
    let index = tasks.findIndex(task => task.id === id);
    console.log(index);
    tasks.splice(index, 1);

    this.setState({
      tasks: tasks
    });
  };

  changeTaskStatus = id => {
    let tasks = Array.from(this.state.tasks);

    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };
  AddTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    };
    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));

    return true;
  };
  render() {
    return (
      <div className="App">
        <h2 className="first">To-Do-App</h2>
        <AddTask add={this.AddTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}
export default App;
