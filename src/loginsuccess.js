import React, { Component } from 'react';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
class LoginSucess extends Component {
  constructor(props){
    super(props);
    this.state={
      loginmessage:'Login Successful',
      buttonLabel:'OK',
      isLogin:true
    }
  }
  
  render() {
    return (
      <div className="dashboard">
        <div>
            <div>
                <br/><br/><br/><br/><br/>
                {this.state.loginmessage}<br/>
                <label> Your are successfully logged in.</label>
            </div>
      </div>
     </div>
    );
  }
  
}
const style = {
  margin: 15,
};
export default LoginSucess;