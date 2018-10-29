import React, { Component } from 'react';
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink, Row, Button, Table } from 'reactstrap';

class TaskInbox extends Component {
  constructor(props){
    super(props);
    this.state={
      loginmessage:'Task Details',
      buttonLabel:'OK',
      isLogin:true
    }
  }
  
  render() {
    return (
      <div>
        <div className="animated fadeIn">
        <Row>
          <Col md="3">Task List</Col>
          <Col md="9" className="pull-right"><input type='text' class=""/><Button className="tsIndxButton" color="primary">Search</Button></Col>
        </Row>
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardBody>
                <Table hover responsive size="sm">
                <thead><tr><th>Customer Id</th><th>Task Id</th><th>Task Name</th><th>Created on</th><th width="30%">Actions</th></tr></thead>
                  <tbody>
                    <tr><td>CUST20192</td><td><Button className="tsIndxButton" href="#/TaskDetails" color="link">TSK33442</Button></td><td>Get quote</td><td>20-08-2018</td><td><div><Button className="tsIndxButton" color="primary">Claim</Button><Button className="tsIndxButton" color="success">Start</Button><Button className="tsIndxButton" color="info">Release</Button><Button className="tsIndxButton" color="warning">Complete</Button></div></td></tr>
                    <tr><td>CUST33182</td><td><Button className="tsIndxButton" href="#/TaskDetails" color="link">TSK22442</Button></td><td>Create Customer</td><td>20-07-2018</td><td><div><Button className="tsIndxButton" color="primary">Claim</Button><Button className="tsIndxButton" color="success">Start</Button><Button className="tsIndxButton" color="info">Release</Button><Button className="tsIndxButton" color="warning">Complete</Button></div></td></tr>
                    <tr><td>CUST20192</td><td><Button className="tsIndxButton" href="#/TaskDetails" color="link">TSK33442</Button></td><td>Get quote</td><td>20-08-2018</td><td><div><Button className="tsIndxButton" color="primary">Claim</Button><Button className="tsIndxButton" color="success">Start</Button><Button className="tsIndxButton" color="info">Release</Button><Button className="tsIndxButton" color="warning">Complete</Button></div></td></tr>
                    <tr><td>CUST23182</td><td><Button className="tsIndxButton" href="#/TaskDetails" color="link">TSK62442</Button></td><td>Create invoice</td><td>20-07-2018</td><td><div><Button className="tsIndxButton" color="primary">Claim</Button><Button className="tsIndxButton" color="secondary">In Progress</Button><Button className="tsIndxButton" color="warning">Complete</Button></div></td></tr>
                    <tr><td>CUST20592</td><td><Button className="tsIndxButton" href="#/TaskDetails" color="link">TSK33742</Button></td><td>Get Claim</td><td>20-08-2018</td><td><div><Button className="tsIndxButton" color="primary">Claim</Button><Button className="tsIndxButton" color="success">Start</Button><Button className="tsIndxButton" color="info">Release</Button><Button className="tsIndxButton" color="warning">Complete</Button></div></td></tr>
                    <tr><td>CUST43182</td><td><Button className="tsIndxButton" href="#/TaskDetails" color="link">TSK22442</Button></td><td>Create Request</td><td>20-07-2018</td><td><div><Button className="tsIndxButton" color="primary">Claim</Button><Button className="tsIndxButton" color="success">Start</Button><Button className="tsIndxButton" color="info">Release</Button><Button className="tsIndxButton" color="warning">Complete</Button></div></td></tr>
                    <tr><td>CUST24192</td><td><Button className="tsIndxButton" href="#/TaskDetails" color="link">TSK37442</Button></td><td>Get quote</td><td>20-08-2018</td><td><div><Button className="tsIndxButton" color="primary">Claim</Button><Button className="tsIndxButton" color="success">Start</Button><Button className="tsIndxButton" color="info">Release</Button><Button className="tsIndxButton" color="warning">Complete</Button></div></td></tr>
                    <tr><td>CUST35182</td><td><Button className="tsIndxButton" href="#/TaskDetails" color="link">TSK22742</Button></td><td>Create invoice</td><td>20-07-2018</td><td><div><Button className="tsIndxButton" color="primary">Claim</Button><Button className="tsIndxButton" color="success">Start</Button><Button className="tsIndxButton" color="info">Release</Button><Button className="tsIndxButton" color="warning">Complete</Button></div></td></tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
  
}
// const style = {
//   margin: 15,
// };
export default TaskInbox;