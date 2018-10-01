import React, { Component } from 'react';
// import axios from 'axios';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Button, Table } from 'reactstrap';
class CnrInprogress extends Component {
  constructor(props){
    super(props);
    this.state={
      case_Id:'',
      requestorId:'',
      program:''
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
                  <Col md="3" className="pull-left card-title">Program  Details</Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row><Col md="2" className="pull-right pb-3"><label>Requestor</label></Col><Col md="3" className="pull-left"><Button className="tsIndxButton" href="#/CreateCustomer" color="link">muser1</Button></Col><Col md="3" className="pull-right"><label>Channel/Affiliage</label></Col><Col md="3" className="pull-left"><Button className="tsIndxButton" href="/" color="warning">Retail</Button></Col></Row>
                <Row><Col md="2" className="pull-right pb-3"><label>Program</label></Col><Col md="3" className="pull-left"><Button className="tsIndxButton" href="#/CaseDetails" color="link">program1</Button></Col><Col md="3" className="pull-right"><label>Affiliage</label></Col><Col md="3" className="pull-left"><Button className="tsIndxButton" href="/" color="warning">Verizon</Button></Col></Row>
                <Row><Col md="2" className="pull-right pb-3"><label>Devision</label></Col><Col md="3" className="pull-left"><Button className="tsIndxButton" href="/" color="warning">["west"]</Button></Col><Col md="3" className="pull-right"><label>Offer Launch Date</label></Col><Col md="3" className="pull-left">2018-07-15 12:22:05</Col></Row>
                <Row><Col md="2" className="pull-right pb-3"><label>Markets/Corps Included</label></Col><Col md="3" className="pull-left">market</Col><Col md="3" className="pull-right"><label>Offer Expairy Date</label></Col><Col md="3" className="pull-left">2018-07-15 12:22:05</Col></Row>
                <Row><Col md="2" className="pull-right pb-3"><label>Markets/Corps Excluded</label></Col><Col md="3" className="pull-left">market</Col><Col md="3" className="pull-right"><label>Offer Ready Date</label></Col><Col md="3" className="pull-left">2018-07-15 12:22:05</Col></Row>
                <Row><Col md="2" className="pull-right pb-3"><label>Request Type</label></Col><Col md="3" className="pull-left"><Button className="tsIndxButton" href="/" color="warning">New Offer Build</Button></Col><Col md="3" className="pull-right"><label>Code Type</label></Col><Col md="3" className="pull-left">a</Col></Row>
                <Row><Col md="2" className="pull-right pb-3"><label>Rate Event</label></Col><Col md="3" className="pull-left">Y</Col><Col md="3" className="pull-right"></Col><Col md="3" className="pull-left"></Col></Row>
                <Row><Col md="2" className="pull-right pb-3"><label>Code Change</label></Col><Col md="3" className="pull-left">Y</Col><Col md="3" className="pull-right"></Col><Col md="3" className="pull-left"></Col></Row>
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
export default CnrInprogress;