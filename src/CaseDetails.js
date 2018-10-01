import React, { Component } from 'react';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import axios from 'axios';
import user from './user.png';
import fa from './flagAvailable.png';
import fi from './flagInprogress.png';
import fc from './flagComplete.png';
import fm from './flagMilestone.png';
import plus from './plus.png';
import search1 from './search1.png';
import { BrowserRouter as Router, Route, BrowserRouter,  Switch, Redirect, HashRouter, Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Button, Table } from 'reactstrap';
class CaseDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      case_id:'',
      created_on:'',
      cust_name:''
    }
  }
  render() {
    return (
      <div>
        <div>
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col md="3">Case Details</Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div>
                <div class="subHeadingNb">Order for IT Hardware(rphadadmin)</div><div class="float-right"> <Button className="tsIndxButton" color="primary">Refresh</Button></div>
                <div class="subHeadingNbC">Overview</div><div class="float-right"> <Button className="tsIndxButton" color="warning">Complete</Button></div>
                <table width="100%">
                <tr><th class="pull-left">Case Details</th><th colspan="3">Actions</th></tr>
                <tr><td width="20%">
                  <table width="100%">
                      <tr><td class="cdTd"><span class="cdTdHd"><br/>Description</span><br/>Order by IT hardware</td></tr>
                      <tr><td class="cdTd"><span class="cdTdHd">Status</span><br/>Open</td></tr>
                      <tr><td class="cdTd"><span class="cdTdHd">Owned by</span><br/>rhpamAdmin</td></tr>
                      <tr><td class="cdTd"><span class="cdTdHd">Started</span><br/>21/8/2018</td></tr>
                    </table>
                </td>
                <td colspan="3">
                  <table width="100%">
                    <tr><td class="cdTd"><span class="cdTdHd"><img class="user" src={fa} align="top" height="25px"/>Available 4</span><hr/></td><td><span class="cdTdHd"><img class="user" src={fi} align="top" height="25px"/>In Progress 4</span><hr/></td><td><span class="cdTdHd"><img class="user" src={fc} align="top" height="25px"/>Complete 0</span><hr/></td></tr>
                    <tr><td class="cdTd"><span class="cdTdHd">New user task</span><br/>Dynamic</td><td class="cdTd"><span class="cdTdHd">Prepare hardware spec</span><br/>21/08/2018(Human task)</td><td>No Actions found</td></tr>
                    <tr><td class="cdTd"><span class="cdTdHd">New process task</span><br/>Dynamic</td><td class="cdTd"><span class="cdTdHd">Milestone1: Order places</span><br/>21/08/2018(Milestone)</td><td></td></tr>
                    <tr><td class="cdTd"><span class="cdTdHd">Milestone2: Order Shipped</span><br/>Dynamic</td><td class="cdTd"><span class="cdTdHd">Hardware spec ready</span><br/>21/08/2018(Milestone)</td><td></td></tr>
                  </table>
                </td></tr>
                </table><hr/>
                <div><br/><br/></div><hr/>
                <table width="100%">
                <tr><th class="pull-left">Milestones</th><th colspan="2">Comments</th><th>Roles</th></tr>
                <tr><td width="20%">
                  <table width="100%">
                      <tr><td class="cdTd"><img class="user" src={fm} align="top" height="25px"/>Hartware spec ready</td></tr>
                      <tr><td class="cdTd"><img class="user" src={fm} align="top" height="25px"/>Manager Decision</td></tr>
                      <tr><td class="cdTd"><img class="user" src={fm} align="top" height="25px"/>Milestone1: Order placed</td></tr>
                      <tr><td class="cdTd"><img class="user" src={fm} align="top" height="25px"/>Milestone2: Order Shipped</td></tr>
                      <tr><td class="cdTd"><img class="user" src={fm} align="top" height="25px"/>Milestone3: Delivered to customer</td></tr>
                    </table>
                </td>
                <td colspan="2">
                  <table width="100%">
                    <tr><td class="cdTd">
                    <div class="margin10 pull-left"><img class="user" src={user} align="middle" height="40px"/><input type='text' class="txtComment"/><label><Link to={`./AddComment`} className="link pull-right"><img src={plus} title="Comment" align="middle" height="25px"/></Link></label></div></td><hr/></tr>
                    <tr><td class="cdTd">No Comments found</td></tr>
                  </table>
                </td><td>
                <table width="100%">
                  <tr><td class="cdTd"><span class="cdTdHd">Owner</span><br/>rhpamAdmin</td></tr>
                    <tr><td class="cdTd"><span class="cdTdHd">Manager</span><br/>Manager</td></tr>
                  </table>
                </td></tr>
                </table>
                <hr/>
                </div>
                </CardBody>
              </Card>
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
export default CaseDetails;