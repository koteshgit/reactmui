import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Button, Table } from 'reactstrap';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
class CnrOverview extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state={
      activeTab: '1',
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    return (
      <div>
        <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="3" md="3" className="">
              <Row>
                <Col sm="3" className="pb-3 pt-3 bs-3 text-white bg-success"><a href="#/CreateTask"><i className="fa fa-file-text-o fa-4x"></i></a></Col>
                <Col sm="8" className="pb-3 bs-3 text-black bg-white"><br/><label>NEW REQUEST</label> <br/> Create a new Offer Request</Col>
              </Row>
          </Col>

          <Col xs="12" sm="6" md="3">
              <Row>
                <Col sm="3" className="pb-3 pt-3 bs-3 text-white bg-danger"><a href="#/SearchCNR"><i className="fa fa-search fa-4x"></i></a></Col>
                <Col sm="8" className="pb-3 bs-3 text-black bg-white"><br/><label>SEAECH CNR</label> <br/> Look for an existing CNR</Col>
              </Row>
          </Col>

           <Col xs="12" sm="6" md="3">
              <Row>
                <Col sm="3" className="pb-3 pt-3 bs-3 text-white bg-info"><a href="#/ChangeCNR"><i className="fa fa-pencil-square fa-4x"></i></a></Col>
                <Col sm="8" className="pb-3 bs-3 text-black bg-white"><br/><label>CHANGE CNR</label> <br/> Modify an existing CNR</Col>
              </Row>
          </Col>

          <Col xs="12" sm="6" md="3">
              <Row> 
                <Col sm="3" className="pb-3 pt-3 bs-3 text-white bg-warning"><a href="#/Settings"><i className="fa fa-cogs fa-4x"></i></a></Col>
                <Col sm="8" className="pb-3 bs-3 text-black bg-white"><br/><label>SETTINGS</label> <br/> Application Configuration</Col>
              </Row>
          </Col>
        </Row>
        </div>
        <hr/>
        <Row>
          <Col xs="12" md="2" className="pull-left"><i className="fa fa-envelope-o"></i> Task Preview</Col><Col xs="12" md="10"><Button className="tsIndxButton pull-right" href="#/Refresh" color="success"><i className="fa fa-refresh"></i>Refresh</Button></Col>
        </Row>
        <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  User Tasks
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Global Tasks
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
              <Card>
              <CardHeader>
                <Row>
                  <Col md="3">User Tasks</Col>
                  <Col md="9"><input type='text'/><Button className="tsIndxButton" color="primary">Search</Button></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead><tr><th>Task Id</th><th>Request No</th><th>Task Type</th><th>Prior Rejection Message</th><th>Task Status</th><th>SLA</th></tr></thead>
                  <tbody>
                    <tr><td>27</td><td>376</td><td>Billing Governance</td><td></td><td><Button className="tblButton" href="#/CnrInprogress" color="warning" size="sm">In Progress</Button></td><td><Button className="tblButton" color="danger" size="sm">SLA Expaired</Button></td></tr>
                    <tr><td>14</td><td>398</td><td>Billing Governance</td><td></td><td><Button className="tblButton" href="#/CnrInprogress"color="warning" size="sm">In Progress</Button></td><td><Button className="tblButton" color="danger" size="sm">SLA Expaired</Button></td></tr>
                    <tr><td>23</td><td>456</td><td>Billing Governance</td><td></td><td><Button className="tblButton" href="#/CnrInprogress"color="warning" size="sm">In Progress</Button></td><td><Button className="tblButton" color="danger" size="sm">SLA Expaired</Button></td></tr>
                    <tr><td>38</td><td>334</td><td>Billing Governance</td><td></td><td><Button className="tblButton" href="#/CnrInprogress"color="warning" size="sm">In Progress</Button></td><td><Button className="tblButton" color="danger" size="sm">SLA Expaired</Button></td></tr>
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
              </TabPane>
              <TabPane tabId="2">
              <Card>
              <CardHeader>
                <Row>
                  <Col md="3">Global Tasks</Col>
                  <Col md="9"><input type='text'/><Button className="tsIndxButton" color="primary">Search</Button></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                <thead><tr><th>Task Id</th><th>Request No</th><th>Task Type</th><th>Prior Rejection Message</th><th>Task Status</th><th>SLA</th></tr></thead>
                  <tbody>
                    <tr><td>18</td><td>376</td><td>NationalMarketingApproval</td><td></td><td><Button className="tblButton" href="#/CnrClaim" color="primary" size="sm">Claim</Button></td><td><Button className="tblButton" color="danger" size="sm">SLA Expaired</Button></td></tr>
                    <tr><td>18</td><td>376</td><td>NationalMarketingApproval</td><td></td><td><Button className="tblButton" href="#/CnrClaim" color="primary" size="sm">Claim</Button></td><td><Button className="tblButton" color="danger" size="sm">SLA Expaired</Button></td></tr>
                    <tr><td>15</td><td>398</td><td>BillingGovernance</td><td></td><td><Button className="tblButton" href="#/CnrClaim" color="primary" size="sm">Claim</Button></td><td><Button className="tblButton" color="danger" size="sm">SLA Expaired</Button></td></tr>
                    <tr><td>10</td><td>456</td><td>SCRAM Scram User Approval</td><td></td><td><Button className="tblButton" href="#/CnrClaim" color="primary" size="sm">Claim</Button></td><td><Button className="tblButton" color="danger" size="sm">SLA Expaired</Button></td></tr>
                    <tr><td>22</td><td>334</td><td>SCRAM Scram User Approval</td><td></td><td><Button className="tblButton" href="#/CnrClaim" color="primary" size="sm">Claim</Button></td><td><Button className="tblButton" color="danger" size="sm">SLA Expaired</Button></td></tr>
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
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
     </div>
    );
  }
  
}
const style = {
  margin: 15,
};

export default CnrOverview;