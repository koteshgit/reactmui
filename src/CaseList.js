import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink,Row, Button, Table} from 'reactstrap';
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
                <Col xs="12" lg="12">
                  <Card>
                    <CardHeader>
                      <Row>
                        <Col md="3">Cases</Col>
                        <Col md="9" className="pull-right"><input type='text'/><Button className="tsIndxButton" color="primary">Search</Button></Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                         <Table responsive hover>
                            <thead>
                            <tr><th>CASE</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>CASE DATE</th><th>STATUS</th><th>Entity/Initiator</th><th>Entity/Initiator Name</th><th>REAPEAT CALLER</th><th>COMPLIANT INDICATOR</th><th>ACTION</th></tr></thead>
                            <tbody>
                              <tr><td><Button className="tsIndxButton" href="#/CaseDetails" color="link">00001015</Button></td><td>Claims</td><td>Email</td><td>10/19/2018 2:30AM</td><td>Open</td><td>IT Hardware</td><td>rhpamadmin</td><td></td><td></td><td><Button className="tsIndxButton" color="warning">Complete</Button></td></tr>
                              <tr><td><Button className="tsIndxButton" href="#/CaseDetails" color="link">00001217</Button></td><td>Dental</td><td>Alternate Medicine</td><td>10/19/2018 2:30AM</td><td>In Progress</td><td>IT Hardware</td><td>rhpamadmin</td><td></td><td></td><td><Button className="tsIndxButton" color="warning">Complete</Button></td></tr>
                              <tr><td><Button className="tsIndxButton" href="#/CaseDetails" color="link">00001218</Button></td><td>Dental</td><td>Alternate Medicine</td><td>10/19/2018 3:30AM</td><td>Assigned</td><td>IT Hardware</td><td>rhpamadmin</td><td></td><td></td><td><Button className="tsIndxButton" color="info">Assign</Button></td></tr>
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
      </div>
    );
  }
  
}
export default CaseList;