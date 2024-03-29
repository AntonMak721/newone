import { Component } from "react";

import "./emploees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // Можно еще и сообщения добавлять, подсветку, атрибуты minlength и тд.
    if (this.state.name.length < 3 || !this.state.salary) return;
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
        name: '',
        salary: ''
    })
}
  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Ты пьяный или кто?"
            name="name"
            minlength="3"
            required
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Че с деньгами?"
            name="salary"
            minlength="3"
            required
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Завязать лямку?
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
