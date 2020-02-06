import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toISOString().slice(0, 10)
  };
  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleDate = e => {
    this.setState({
      date: e.target.value
    });
  };
  handleCheckbox = e => {
    this.setState({
      checked: e.target.checked
    });
  };
  handleClick = () => {
    const { text, date, checked } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);

      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: new Date().toISOString().slice(0, 10)
        });
      }
    } else {
      alert("nieporawna nazwa zadania");
    }
  };
  render() {
    let maxDate = this.state.date.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div className="form">
        <input
          type="text"
          placeholder="wpisz zadanie"
          value={this.state.text}
          onChange={this.handleText}
        ></input>
        <input
          type="checkbox"
          checked={this.state.checked}
          id="important"
          className="important"
          onChange={this.handleCheckbox}
        />
        <label htmlFor="important" className="important">
          Priorytet
        </label>
        <br />
        <label htmlFor="date">Do kiedy chcesz zrobić? </label>
        <input
          type="date"
          value={this.state.date}
          max={maxDate}
          onChange={this.handleDate}
        />
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;
