import React, { Component } from 'react';
import '../../css/styles.css';

const encryption = require('../utility/encryption');

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.emailExists = true;
    this.passwordCorrect = true;
    this.emptyFields = false;
    this.inputValid = "uk-input";
    this.inputInvalid = "uk-input uk-form-danger";

    this.state = {
      email: '',
      password: '',
      emailStyle: this.inputValid,
      passwordStyle: this.inputValid
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const style = value === "" && this.emptyFields ? this.inputInvalid : this.inputValid;
    this.setState({
      [name]: value,
      [name + "Style"]: style
    });

    // We can't simply check against "this.state" for both values because
    //   "this.state" will not be updated for the currently being changed
    //   field until after this method call has finished, so we'd be one
    //   character behind, throwing the whole logic off.
    if ((name === "email" && value !== "" && this.state.password !== "") ||
        (name === "password" && value !== "" && this.state.email !== ""))
      this.emptyFields = false;
  }

  handleSubmit(event) {
    event.preventDefault();

    // We have to make sure we reset the states
    //   because otherwise they'll stay in their
    //   error state even after being fixed.
    this.resetErrors();

    this.checkForEmptyFields();

    const result = encryption.checkAccount(this.state.email, this.state.password);

    if (this.state.email !== "" && !result.emailExists) {
        this.emailExists = false;
        this.setState({
          emailStyle: this.inputInvalid
        });
    }

    else if (this.state.password !== "" && !result.loginSuccessful) {
      this.passwordCorrect = false;
      this.setState({
        passwordStyle: this.inputInvalid
      });
    }

    if (!this.emptyFields && result.emailExists && result.loginSuccessful) {
      // perform login
      console.log('Logged in successfully');
    }
  }

  resetErrors() {
    this.emailExists = true;
    this.passwordCorrect = true;
    this.emptyFields = false;
    this.setState({
      emailStyle: this.inputValid,
      passwordStyle: this.inputValid
    });
  }

  checkForEmptyFields() {
    if (this.state.email === "" || this.state.password === "") {
      this.emptyFields = true;

      const es = this.state.email === "" ? this.inputInvalid : this.inputValid;
      const ps = this.state.password === "" ? this.inputInvalid : this.inputValid;
      this.setState({
        emailStyle: es,
        passwordStyle: ps
      });
    }
  }

  render() {
    return (
      <form className="uk-form-stacked" onSubmit={this.handleSubmit}>
        <fieldset className="uk-fieldset">
          <legend className="uk-legend landing-header">Login</legend>
          <label className="uk-form-label label-invalid" hidden={!this.emptyFields}>Please make sure all fields are filled out</label>
          <div className="uk-margin">
            <div className="uk-form-controls">
              <input name="email" className={this.state.emailStyle} type="text" placeholder="E-mail" value={this.state.email} onChange={this.handleInputChange} />
            </div>
            <label className="uk-form-label label-invalid" hidden={this.emailExists}>No account exists with that e-mail address</label>
          </div>
          <div className="uk-margin">
            <div className="uk-form-controls">
              <input name="password" className={this.state.passwordStyle} type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
            </div>
            <label className="uk-form-label label-invalid" hidden={this.passwordCorrect}>Password is incorrect</label>
          </div>
          <div className="uk-margin">
            <button className="uk-button uk-button-secondary uk-align-center landing-submit-btn" type="submit" value="Login">Login</button>
          </div>
        </fieldset>
      </form>
    );
  }
}
