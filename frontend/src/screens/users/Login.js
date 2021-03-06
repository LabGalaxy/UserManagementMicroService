import React, { Component } from 'react';
import Popup from "reactjs-popup";

class Login extends Component {
  constructor(){
    super();
    this.state = {
        username: "DEFAULT_USER",
        open: false
    }
  }
  componentWillReceiveProps(){
    this.setState({open:this.props.logInClick});
  }
  closeModal = () => {
    this.setState({ open: false });
    this.props.setDisplayFalse();
  };
  render() {
    return (
      <Popup open={this.state.open} closeOnDocumentClick onClose={this.closeModal} >
        <div className="Login">
          <a className="close" onClick={this.closeModal}>&times;</a>
          <form>
            <div class="form-group">
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="passwords" placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </div>
      </Popup>  
    );
  }
}

export default Login;
