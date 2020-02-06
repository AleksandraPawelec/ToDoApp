import React from "react";

const Task = props => {
  const { text, date, id, active, important, finishDate } = props.task;

  const style = {
    color: "Firebrick"
  };
  if (active) {
    return (
      <>
        <div>
          <p>
            <strong style={important ? style : null}>{text}</strong> do
            <span>{date}</span>
            <button className="done" onClick={() => props.change(id)}>
              Zrobione
            </button>
            <button className="x" onClick={() => props.delete(id)}>
              x
            </button>
          </p>
        </div>
      </>
    );
  } else {
    const finish = new Date(finishDate).toLocaleDateString();
    return (
      <div>
        <p>
          <strong>{text} do </strong> <em>(zrobić do:{date})</em> <br />
          potwierdzenie wykonania z <span> {finish} </span>
          <button onClick={() => props.delete(id)}>x</button>
        </p>
      </div>
    );
  }
};

export default Task;
