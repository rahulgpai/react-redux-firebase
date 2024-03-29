import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onComponentDidMount() {
    console.log("component mounted", this.state);
  }

  render() {
    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to="/"></Redirect>;

    return (
      <div className="container">
        <form action="" onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              id="firstname"
              onChange={this.handleChange}
              value={this.state.firstname}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              id="lastname"
              onChange={this.handleChange}
              value={this.state.lastname}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Register</button>
          </div>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
