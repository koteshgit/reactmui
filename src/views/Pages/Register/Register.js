import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
// import MuiDashboard from '../../..//MuiDashboard';
// import { DefaultLayout } from '../../../containers';
import Login from '../Login';
var apiBaseUrl = "http://localhost:4000/api/";
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      email:'',
      password:''
    }
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="username" onChange = {(event,newValue) => this.setState({username:newValue})}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" onChange = {(event,newValue) => this.setState({email:newValue})}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" onChange = {(event,newValue) => this.setState({password:newValue})}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                    </InputGroup>
                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="12">
                      <Button className="btn-login" href="#/Login" onClick={(event) => this.goToLogin(event)}>Login</Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  goToLogin(event){
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
    uploadScreen.push(<Login appContext={self.props.appContext}/>)
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
       uploadScreen.push(<Login/>)
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

export default Register;
