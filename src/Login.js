import React, { Component } from 'react';
import axios from 'axios';
import MuiDashboard from './MuiDashboard';
import { DefaultLayout } from './containers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';

import MenuItem from 'material-ui/MenuItem';
var apiBaseUrl = "http://localhost:4000/api/";

class Login extends Component {
  constructor(props){
    super(props);
    var localloginComponent=[];
    localloginComponent.push(
      <MuiThemeProvider>
        <div>
         <TextField
           hintText="Enter your Email"
           floatingLabelText="Requestor Id"
           onChange = {(event,newValue)=>this.setState({username:newValue})}
           />
         <br/>
           <TextField
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
       </div>
       </MuiThemeProvider>
    )
    this.state={
      username:'',
      password:'',
      menuValue:1,
      loginComponent:localloginComponent,
      loginRole:'requsetor'
    }
  }
  componentWillMount(){
  // console.log("willmount prop values",this.props);
  if(this.props.role !== undefined){
    if(this.props.role ==='requsetor'){
      console.log("in requsetor componentWillMount");
      var localloginComponent=[];
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your Email"
             floatingLabelText="Requestor Id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
      this.setState({menuValue:1,loginComponent:localloginComponent,loginRole:'requsetor'})
    }else if(this.props.role === 'approver'){
      console.log("in approver componentWillMount");
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your Email"
             floatingLabelText="Approver Id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
      this.setState({menuValue:2,loginComponent:localloginComponent,loginRole:'approver'})
    }
  }
  }
  handleClick(event){
    var self = this;
    var payload={
      "userid":this.state.username,
	    "password":this.state.password,
      "role":this.state.loginRole
    }
    console.log("Login successfull");
    var uploadScreen=[];
    //uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
  //  alert("setting dashboard");
    uploadScreen.push(<MuiDashboard appContext={self.props.appContext}/>)
    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    // alert("self.props.appContext.state0" +  self.props.appContext.state);
    axios.post(apiBaseUrl+'login', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code === 200){
       console.log("Login successfull");
       var uploadScreen=[];
       //uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
      alert("setting dashboard");
       uploadScreen.push(<DefaultLayout/>)
       self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
       alert("self.props.appContext.state0" +  self.props.appContext.state);
     }
     else if(response.data.code === 204){
       console.log("Username password do not match");
       alert(response.data.success)
     }
     else{
       console.log("Username does not exists");
       alert("Username does not exist");
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }
  handleMenuChange(value){
    console.log("menuvalue",value);
    var loginRole;
    if(value==1){
      var localloginComponent=[];
      loginRole='requsetor';
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your Email"
             floatingLabelText="Requestor Id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
    }
    else if(value === 2){
      loginRole='approver';
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your Email"
             floatingLabelText="Approver Id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" variant="contained" color="primary" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
    }
    this.setState({menuValue:value,
                   loginComponent:localloginComponent,
                   loginRole:loginRole})
  }
  render() {
    return (
      <div className="contentSection">
        <MuiThemeProvider>
        <div className="Home-App-header" title="Login">Login</div>
        </MuiThemeProvider>
        <MuiThemeProvider>
        <div>
        <p>Login as:</p>
        <DropDownMenu value={this.state.menuValue} onChange={(event,index,value)=>this.handleMenuChange(value)}>
          <MenuItem value={1} primaryText="Requestor" />
          <MenuItem value={2} primaryText="Approver" />
        </DropDownMenu>
        </div>
        </MuiThemeProvider>
        {this.state.loginComponent}
      </div>
    );
  }
}

const style = {
  margin: 15,
  color: "grey"
};

export default Login;
