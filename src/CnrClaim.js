import React, { Component } from 'react';
// import axios from 'axios';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Button, Table } from 'reactstrap';
class CnrClaim extends Component {
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
              <CardHeader title="Program  Details">
                <Row>
                  <Col md="3" className="pull-left">Program  Details</Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row><Col md="2" className="pull-right">Requestor</Col><Col md="3" className="pull-left">muser1</Col><Col md="3" className="pull-right">Channel/Affiliage</Col><Col md="3" className="pull-left">Retail</Col></Row>
                <Row><Col md="2" className="pull-right">Program</Col><Col md="3" className="pull-left">program1</Col><Col md="3" className="pull-right">Affiliage</Col><Col md="3" className="pull-left">Verizon</Col></Row>
                <Row><Col md="2" className="pull-right">Devision</Col><Col md="3" className="pull-left">["west"]</Col><Col md="3" className="pull-right">Offer Launch Date</Col><Col md="3" className="pull-left">2018-07-15 12:22:05</Col></Row>
                <Row><Col md="2" className="pull-right">Markets/Corps Included</Col><Col md="3" className="pull-left">market</Col><Col md="3" className="pull-right">Offer Expairy Date</Col><Col md="3" className="pull-left">2018-07-15 12:22:05</Col></Row>
                <Row><Col md="2" className="pull-right">Markets/Corps Excluded</Col><Col md="3" className="pull-left">market</Col><Col md="3" className="pull-right">Offer Ready Date</Col><Col md="3" className="pull-left">2018-07-15 12:22:05</Col></Row>
                <Row><Col md="2" className="pull-right">Request Type</Col><Col md="3" className="pull-left">New Offer Build</Col><Col md="3" className="pull-right">Code Type</Col><Col md="3" className="pull-left">a</Col></Row>
                <Row><Col md="2" className="pull-right">Rate Event</Col><Col md="3" className="pull-left">Y</Col><Col md="3" className="pull-right"></Col><Col md="3" className="pull-left"></Col></Row>
                <Row><Col md="2" className="pull-right">Code Change</Col><Col md="3" className="pull-left">Y</Col><Col md="3" className="pull-right"></Col><Col md="3" className="pull-left"></Col></Row>
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
export default CnrClaim;