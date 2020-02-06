import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  active.sort(function(a, b) {
    if (a.id > b.id) {
      return -1;
    } else {
      return 1;
    }
  });

  const done = props.tasks.filter(task => !task.active);

  done.sort(function(a, b) {
    return b.finishDate - a.finishDate;
  });
  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="active">
        {/* <hr></hr> */}
        <h2> Do zrobienia:</h2>
        {activeTasks.length > 0 ? activeTasks : <p> Wszystko zrobione </p>}

        <hr></hr>
      </div>

      <div className="done">
        <h2>
          Zrobione: <em>{doneTasks.length}</em>
        </h2>
        {doneTasks.length > 4 && (
          <span>Wyświetlonych są tylko ostatnie 4 zadania </span>
        )}
        {doneTasks.slice(0, 4)}
      </div>
    </>
  );
};

export default TaskList;
