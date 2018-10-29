import React, { Component } from 'react';
import {Button, Card, CardBody, Col, Row } from 'reactstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    
    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
    
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
        <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value ta-center">11</div>
                <div className="ta-center">Cases</div>
              </CardBody>
              <div className="chart-wrapper mx-3 ta-center" style={{ height: '70px' }}>
                <br/><Button className="tsIndxButton text-white" href="#/CaseList" color="info">More Info</Button>
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <div className="text-value ta-center">20</div>
                <div className="ta-center">Tasks</div>
              </CardBody>
              <div className="chart-wrapper mx-3 ta-center" style={{ height: '70px' }}>
                <br/><Button className="tsIndxButton" href="#/TaskInbox" color="primary">More Info</Button>
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <div className="text-value ta-center">4</div>
                <div className="ta-center">Tasks to Approve</div>
              </CardBody>
              <div className="chart-wrapper ta-center" style={{ height: '70px' }}>
              <br/><Button className="tsIndxButton text-white" href="#/TaskInbox" color="warning">More Info</Button>
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <div className="text-value ta-center">6</div>
                <div className="ta-center">Tasks to Assign</div>
              </CardBody>
              <div className="chart-wrapper mx-3 ta-center" style={{ height: '70px' }}>
                <br/><Button className="tsIndxButton" href="#/TaskInbox" color="danger">More Info</Button>
              </div>
            </Card>
          </Col>
        </Row>
        </div>
    );
  }
  
}

export default Dashboard;
