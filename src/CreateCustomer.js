import React, { Component } from 'react';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import axios from 'axios';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

class CreateCustomer extends Component {
  constructor(props){
    super(props);
    this.state={
        cust_name:'',
        cust_address:'',
        country:'',
        city:''
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
                  <strong>Create Customer</strong>
                </CardHeader>
                <CardBody>
                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
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
                        <Label htmlFor="cust-address">Custmer Address</Label>
                      </Col>
                      <Col xs="12" md="8">
                        {/* <Input type="text" id="cust-address" name="cust-address" placeholder="Enger Custmer Address" /> */}
                        <Input type="textarea" name="cust-address" id="textarea-input" rows="5"
                              placeholder="Enger Custmer Address" onChange = {(event,newValue) => this.setState({cust_address:newValue})}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="Country">Country</Label>
                      </Col>
                      <Col xs="12" md="8">
                        <Input type="email" id="Country" name="Country" placeholder="Enter Country" onChange = {(event,newValue) => this.setState({cucountry:newValue})}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="city">City</Label>
                      </Col>
                      <Col xs="12" md="8">
                        <Input type="text" id="city" name="city" placeholder="Enter City" onChange = {(event,newValue) => this.setState({city:newValue})}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="business">Business</Label>
                      </Col>
                      <Col xs="12" md="2">
                      <Input className="form-check-input" checked type="radio" id="business" name="addressType" value="business" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="home">Home</Label>
                      </Col>
                      <Col xs="12" md="2">
                      <Input className="form-check-input" checkedtype="radio" id="home" name="addressType" value="home" />
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                  <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          </div>
         </div>
      </div>
    );
  }
   
}
// const style = {
//   margin: 15,
// };
export default CreateCustomer;