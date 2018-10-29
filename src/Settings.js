import React, { Component } from 'react';
import { Col,Row} from 'reactstrap';
class Settings extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <div>
        <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="3" md="3" className="">
              <Row>
                <Col sm="3" className="pb-3 pt-3 bs-3 text-white bg-success"><a href="#/CaseDetails"><i className="fa fa-file-text-o fa-4x"></i></a></Col>
                <Col sm="8" className="pb-3 bs-3 text-black bg-white"><br/><label>LOV CHANGES</label> <br/>Change a LOV</Col>
              </Row>
          </Col>

          <Col xs="12" sm="6" md="3">
              <Row>
                <Col sm="3" className="pb-3 pt-3 bs-3 text-white bg-danger"><a href="#/TaskAssignment"><i className="fa fa-search fa-4x"></i></a></Col>
                <Col sm="8" className="pb-3 bs-3 text-black bg-white"><br/><label>TASK RE-ASSIGNMENT</label> <br/> Task Re-Assignment</Col>
              </Row>
          </Col>

           <Col xs="12" sm="6" md="3">
              <Row>
                <Col sm="3" className="pb-3 pt-3 bs-3 text-white bg-danger"><a href="#/AddUser"><i className="fa fa-search fa-4x"></i></a></Col>
                <Col sm="8" className="pb-3 bs-3 text-black bg-white"><br/><label>USER MANAGEMENT</label> <br/>Add User</Col>
              </Row>
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

export default Settings;