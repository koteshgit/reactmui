import React, { Component } from 'react';
import { BrowserRouter as Router, Route, BrowserRouter,  Switch, Redirect, HashRouter, Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Pagination, PaginationItem, PaginationLink, Modal, ModalBody, ModalFooter, ModalHeader, Row, Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table } from 'reactstrap';
import Login from './Login';
import CaseDetails from './CaseDetails';
import search1 from './search1.png';
class CaseList extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state={
      dropdownOpen: new Array(6).fill(false),
      loginmessage:'Case List',
      buttonLabel:'OK',
      menuValue:1,
      sortBy:1,
      isLogin:true,
      modal: false,
      large: false,
    }
    this.toggle = this.toggle.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
  }
  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  togglemodal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleLarge() {
    this.setState({
      large: !this.state.large,
    });
  }

  render() {
    return (
      <div>
            <div>
                <div className="animated fadeIn">
                <Row>
                  <Col xs="12" lg="6">
                    <Table>
                      <tr>
                        <td>Status</td>
                        <td>
                          <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                            this.toggle(0);
                          }}>
                          <DropdownToggle caret>
                            Select
                          </DropdownToggle>
                          <DropdownMenu value={this.state.menuValue} onChange={(event,index,value)=>this.handleMenuChange(value)}>
                            <DropdownItem>Open</DropdownItem>
                            <DropdownItem>In Progress</DropdownItem>
                            <DropdownItem>Complete </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                        </td>
                        <td>Sort By</td><td>
                        <Dropdown isOpen={this.state.dropdownOpen[1]} toggle={() => {
                            this.toggle(1);
                          }}>
                          <DropdownToggle caret>
                            Select
                          </DropdownToggle>
                          <DropdownMenu value={this.state.sortBy} onChange={(event,index,value)=>this.handleMenuChange(value)}>
                            <DropdownItem>Case Id</DropdownItem>
                            <DropdownItem>Owned by</DropdownItem>
                            <DropdownItem>Status </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                        </td>
                        <td> | </td><td><Button onClick={this.toggleLarge} className="tsIndxButton mr-1" color="info" size="sm">Start Case</Button>
                        <Modal isOpen={this.state.large} toggle={this.toggleLarge} className={this.props.className}>
                          <ModalHeader toggle={this.toggle}>Start Case</ModalHeader>
                          <ModalBody>
                          <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                              <FormGroup row>
                                <Col md="3">
                                  <Label>Case Name</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Dropdown isOpen={this.state.dropdownOpen[2]} toggle={() => {
                                    this.toggle(2);
                                  }}>
                                  <DropdownToggle caret>
                                      CLAIM_CASE
                                  </DropdownToggle>
                                  <DropdownMenu value={this.state.sortBy} onChange={(event,index,value)=>this.handleMenuChange(value)}>
                                    <DropdownItem>CLAIM_CASE</DropdownItem>
                                    <DropdownItem>INPROGRESS_CASE</DropdownItem>
                                    <DropdownItem>RELEASE_CASE</DropdownItem>
                                  </DropdownMenu>
                                </Dropdown>
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label htmlFor="case-owner">Case Owner</Label>
                                </Col>
                                <Col xs="12" md="8">
                                  <Input type="text" name="case-owner" id="case-owner" value="5443455"
                                        placeholder="Case Owner" onChange = {(event,newValue) => this.setState({case_owner:newValue})}/>
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="12">
                                  <Label>Role Assignment</Label>
                                </Col>
                              </FormGroup>
                              <Table responsive bordered>
                                <thead><tr><th>Role Name</th><th>Users</th><th>Groups</th></tr></thead>
                                <tr><td>manager</td><td><Input type="text" name="case-owner" id="case-owner"/> </td><td><Input type="text" name="case-owner" id="case-owner"/></td></tr>
                                <tr><td>supplier</td><td><Input type="text" name="case-owner" id="case-owner"/> </td><td><Input type="text" name="case-owner" id="case-owner"/></td></tr>
                                <tr><td>developer</td><td><Input type="text" name="case-owner" id="case-owner"/> </td><td><Input type="text" name="case-owner" id="case-owner"/></td></tr>
                                <tr><td>user</td><td><Input type="text" name="case-owner" id="case-owner"/> </td><td><Input type="text" name="case-owner" id="case-owner"/></td></tr>
                                <tr><td>requestor</td><td><Input type="text" name="case-owner" id="case-owner"/> </td><td><Input type="text" name="case-owner" id="case-owner"/></td></tr>
                                <tr><td>lead</td><td><Input type="text" name="case-owner" id="case-owner"/> </td><td><Input type="text" name="case-owner" id="case-owner"/></td></tr>
                              </Table>
                            </Form>
                          </ModalBody>
                          <ModalFooter>
                            <Button className="tsIndxButton" color="secondary" onClick={this.toggleLarge}>Cancel</Button>
                            <Button className="tsIndxButton" color="primary" onClick={this.toggleLarge}>Start</Button>
                          </ModalFooter>
                        </Modal>
                        </td>
                        </tr>
                        </Table>
                    </Col>
                </Row>
                <Row>
                <Col xs="12" lg="12">
                  <Card>
                    <CardHeader>
                      <Row>
                        <Col md="3">Case List</Col>
                        <Col md="9"><input type='text' class=""/><Button className="tsIndxButton" color="primary">Search</Button></Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                         <Table responsive bordered>
                         <thead><tr><th>Case Id</th><th>Status</th><th>Order for</th><th>Owned byn</th><th>Started</th><th>Action</th></tr></thead>
                          <tr><td><Button className="tsIndxButton" href="#/CaseDetails" color="link">IT0000005</Button></td><td>Open</td><td>IT Hardware</td><td>rhpamadmin</td><td>21/08/2018</td><td><Button className="tsIndxButton" color="warning">Complete</Button></td></tr>
                          <tr><td><Button className="tsIndxButton" href="#/CaseDetails" color="link">IT0000007</Button></td><td>Open</td><td>IT Hardware</td><td>rhpamadmin</td><td>21/08/2018</td><td><Button className="tsIndxButton" color="warning">Complete</Button></td></tr>
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
      </div>
    );
  }
  
}
const style = {
  margin: 15,
};
export default CaseList;