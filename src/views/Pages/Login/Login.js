import React, { Component } from 'react';
import axios from 'axios';
import MuiDashboard from '../../../MuiDashboard';
import Register from '../Register';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
var apiBaseUrl = "http://localhost:4000/api/";
apiBaseUrl = 'http://dbpm-lp1.systems.emplemhealth.com/kie-server/services/rest/server';
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      role:''
    }
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" required="true" autoComplete="username" onChange = {(event,newValue)=>this.setState({username:newValue})}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" required="true" autoComplete="current-password" onChange = {(event,newValue) => this.setState({password:newValue})}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" href="#/dashboard" onClick={(event) => this.handleClick(event)}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Register to create new account</p>
                      <Button color="primary" href="#/Register" className="mt-3" active onClick={(event) => this.register(event)}>Register Now!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  handleClick(event){
    var self = this;
    var username = 'shashi';
    var password = 'Admin@123';
    var basicAuth = btoa(username+':'+password);
    
    var axiosConfig = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', 
        'Authorization': basicAuth
      }
    };
    console.log("Calling login Api");
    axios.get(apiBaseUrl+'', axiosConfig)
    .then(function (response) {
     console.log(response);
     if(response.status === 200){
        console.log("Login successfull");
        var uploadScreen=[];
        console.log("Navigating to Dashboard");
        self.props.appContext.setState({role:'Supe User'})
        uploadScreen.push(<MuiDashboard appContext={self.props.appContext}/>)
        self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
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
  register(event){
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
    uploadScreen.push(<Register appContext={self.props.appContext}/>)
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
       uploadScreen.push(<Register/>)
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
}

export default Login;
