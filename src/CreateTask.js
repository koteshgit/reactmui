import React, { Component } from 'react';
import axios from 'axios';
import MuiDashboard from './MuiDashboard';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
var apiBaseUrl = "http://localhost:4000/api/";
class CreateTask extends Component {
  constructor(props){
    super(props);
    this.state={
      task_Name:'',
      created_on:'',
      cust_name:'',
      loginPage:[],
      uploadScreen:[]
    }
  }
  render() {
    return (
      <div>
        <div>
          <div>
           <Row>
            <Col xs="12" sm="8">
            <Card>
                <CardHeader>
                  <strong>Create Task</strong>
                </CardHeader>
                <CardBody>
                  <Form action="" method="post" className="form-horizontal">
                    <FormGroup row>
                      <Col md="3">
                        <Label>Customer Name</Label>
                      </Col>
                      <Col xs="12" md="8">
                      <Input type="text" id="customer-name" name="customer-name" placeholder="Enter Customer Name" onChange = {(event,newValue) => this.setState({cust_name:newValue})} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="cust-address">Task Name</Label>
                      </Col>
                      <Col xs="12" md="8">
                        <Input type="text" name="task-name" id="task-name" 
                              placeholder="Enger Task Name" onChange = {(event,newValue) => this.setState({task_Name:newValue})}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="Country">Created On</Label>
                      </Col>
                      <Col xs="12" md="8">
                        <Input type="date" id="createdOn" name="createdOn" placeholder="Select Created On" onChange = {(event,newValue) => this.setState({createdOn:newValue})} />
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                <Button type="submit" href="#/TaskInbox" color="primary"><i className="fa fa-dot-circle-o"></i>Submit</Button>
                <Button type="reset" href="#/TaskInbox" color="danger"><i className="fa fa-ban"></i>Reset</Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          </div>
         </div>
      </div>
    );
  }
  createTask(event){
    var self = this;
    var payload={
      "custName":this.state.cust_name,
	    "taskName":this.state.task_Name,
      "createdOn":this.state.created_on
    }
    console.log("Creating task");
    var uploadScreen=[];
    var loginPage=[];
    //uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
  //  alert("setting dashboard");
    uploadScreen.push(<MuiDashboard appContext={self.props.appContext}/>)
    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    // alert("self.props.appContext.state0" +  self.props.appContext.state);
    axios.post(apiBaseUrl+'login', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
       console.log("Login successfull");
       var uploadScreen=[];
       //uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
      alert("setting dashboard");
       uploadScreen.push(<MuiDashboard/>)
       self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
       alert("self.props.appContext.state0" +  self.props.appContext.state);
     }
     else if(response.data.code == 204){
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

const style = {
  margin: 15,
};
export default CreateTask;