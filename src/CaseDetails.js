import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import search1 from './search1.png';
import { BrowserRouter as Router, Route, BrowserRouter,  Switch, Redirect, HashRouter, Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Button, Table } from 'reactstrap';
const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});
class CaseDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      case_id:'',
      created_on:'',
      expanded: null,
      cust_name:''
    }   
  }
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <div>
        <div>
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col md="12">Case Details <div class="float-right"> <Button className="tsIndxButton" color="primary">Refresh</Button></div></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div>
                  <div className={classes.root}>
                      <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className={classes.heading}>Order for IT Hardware(rphadadmin)</Typography>
                          <Typography className={classes.secondaryHeading}>Overview</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                            <div class="subHeadingNbC">Overview</div><div class="float-right"> <Button className="tsIndxButton" color="warning">Complete</Button></div>
                              <table width="200%">
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
                              </table>
                          </Typography>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className={classes.heading}>Milestones</Typography>
                          <Typography className={classes.secondaryHeading}>
                            The below are the Milestones for the selected Case
                          </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                          <table width="100%">
                            <tr><td class="cdTd"><img class="user" src={fm} align="top" height="25px"/>Hartware spec ready</td></tr>
                            <tr><td class="cdTd"><img class="user" src={fm} align="top" height="25px"/>Manager Decision</td></tr>
                            <tr><td class="cdTd"><img class="user" src={fm} align="top" height="25px"/>Milestone1: Order placed</td></tr>
                            <tr><td class="cdTd"><img class="user" src={fm} align="top" height="25px"/>Milestone2: Order Shipped</td></tr>
                            <tr><td class="cdTd"><img class="user" src={fm} align="top" height="25px"/>Milestone3: Delivered to customer</td></tr>
                          </table>
                          </Typography>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className={classes.heading}>Comments</Typography>
                          <Typography className={classes.secondaryHeading}>
                            Comments for the Case workflow are given below
                          </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                            <table width="100%">
                              <tr><td class="cdTd" width="95%">
                              <div class="margin10 pull-left"><img class="user" src={user} align="middle" height="40px"/><input type='text' class="txtComment"/><label><Link to={`./AddComment`} className="link pull-right"><img src={plus} title="Comment" align="middle" height="25px"/></Link></label></div></td><hr/></tr>
                              <tr><td class="cdTd">No Comments found</td></tr>
                            </table>
                          </Typography>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className={classes.heading}>Roles</Typography>
                          <Typography className={classes.secondaryHeading}>
                            Roles and permissions are listed below
                          </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                            <table width="100%">
                              <tr><td class="cdTd"><span class="cdTdHd">Owner</span><br/>rhpamAdmin</td></tr>
                              <tr><td class="cdTd"><span class="cdTdHd">Manager</span><br/>Manager</td></tr>
                            </table>
                          </Typography>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </div>
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
CaseDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};
const style = {
  margin: 15,
};
export default withStyles(styles)(CaseDetails);