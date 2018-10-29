import React, { Component } from 'react';
// import axios from 'axios';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
class TaskDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      task_Name:'',
      created_on:'',
      cust_name:''
    }
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col md="3">Task  Details</Col>
                </Row>
              </CardHeader>
              <CardBody>
                <table width="100%">
                <tr>
                  <td width="20%" class="lableTd"><label>Task Id: </label></td>
                  <td class="valueTd"><label>TSK33442</label></td></tr>
                <br/><br/>
                <tr><td class="lableTd"><label>Customer Id: </label></td>
                <td class="valueTd"><label>CUST20192</label></td></tr>
                <tr><td class="lableTd"><label>Customer Name</label></td>
                <td class="valueTd"><input type="text"
                  placeholder="Customer Name"
                  floatingLabelText="Customer Name"
                  onChange = {(event,newValue) => this.setState({cust_name:newValue})}
                  /></td></tr>
                <tr><td class="lableTd"><label>Task Name</label></td>
                <td class="valueTd"><input type="text"
                  hintText="Task Name"
                  placeholder="Task Name"
                  floatingLabelText="Task Name"
                  onChange = {(event,newValue) => this.setState({task_Name:newValue})}
                  /></td></tr>
                <tr><td class="lableTd"><label>Created On</label></td>
                <td class="valueTd"><input 
                  type = "text"
                  placeholder="Created On"
                  floatingLabelText="Created On"
                  onChange = {(event,newValue) => this.setState({created_on:newValue})}
                  /></td></tr>
                <tr><td class="lableTd"></td>
                <td class="valueTd"><button id="regSubmit" label="Register" primary={true} style={style} onClick={(event) => this.handleClick(event)}>Save</button></td></tr>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
   
}
const style = {
  margin: 15,
};
export default TaskDetails;