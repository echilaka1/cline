import React from "react";
import "./index.css";
import launch from "./images/undraw_To_the_stars_qhyy.svg";
import launchtwo from "./images/undraw_Astronaut_xko2.svg";
import GoogleLogin from "react-google-login";

class LoginPage extends React.Component {
  state = {
    values: {
      email: "",
      password: "",
    },
    errors: {
      email: "",
      password: "",
    },
  };

  submitForm = async (e) => {
    e.preventDefault();
    if (
      this.state.errors.email.length > 0 &&
      this.state.errors.password.length > 0
    )
      return false;
    this.props.history.push("/dashboard");
    window.location.reload();
  };

  validateEmail = (email) => {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase()))
      setTimeout(() => this.setErrors({ email: "Email is invalid" }), 400);
    else this.setErrors({ email: "" });
  };

  validatePassword = (password) => {
    if (password.length < 7)
      setTimeout(
        () =>
          this.setErrors({
            password: "Password must have at least 8 characters",
          }),
        400
      );
    else this.setErrors({ password: "" });
  };

  setErrors = (error) =>
    this.setState({
      errors: { ...this.state.errors, ...error },
    });

  handleInputChange = (e) => {
    if (e.target.name === "email") {
      this.validateEmail(e.target.value);
    }
    if (e.target.name === "password") {
      this.validatePassword(e.target.value);
    }
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value },
    });
  };

  responseGoogle = (response) => {
    this.props.history.push("/dashboard");
    window.location.reload();
  };

  render() {
    const enabled =
      this.state.values.email.length > 0 &&
      this.state.values.password.length > 7;
    return (
      <div>
        <div className="main-content">
          <div className="rowed">
            <div className="column left">
              <div className="parent">
                <div className="child">
                  <h1>Welcome to Clined App</h1>
                  <img src={launch} alt="Launcher" className="launcher" />
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="parent">
                <div className="flag">
                  <img src={launchtwo} alt="flag" className="flag" />
                </div>

                <div className="secondchild">
                  <h1>Sign in to continue to your account.</h1>
                  <form onSubmit={this.submitForm}>
                    <label>Email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.values.email}
                      onChange={this.handleInputChange}
                      onBlur={(e) => this.validateEmail(e.target.value)}
                      title="Email"
                      required
                    />
                    <p className="error">{this.state.errors.email}</p>
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={this.state.values.password}
                      onChange={this.handleInputChange}
                      onBlur={(e) => this.validatePassword(e.target.value)}
                      title="password"
                      required
                    />
                    <p className="error">{this.state.errors.password}</p>
                    <button type="submit" disabled={!enabled}>
                      Sign In
                    </button>
                  </form>

                  <h1 className="h1">Or</h1>
                  <GoogleLogin
                    clientId="354281134649-emb25t2l2drdv4uqtnubiakmnevqvgij.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
