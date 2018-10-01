import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import search1 from './search1.png';
class RequestorInbox extends Component {
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
        <div class="subHeading">Requestor Tasks</div><hr/>
        <div class="margin10 pull-right"><input type='text' class="txtSearch"/><label><Link to={`./Search`} className="link pull-right"><img src={search1} title="Admin" align="middle" height="25px"/></Link></label></div>
        <table class="margin30" cellspacing="3" cellPadding="3" border="0" width="96%">
          <tr><th>Customer Id</th><th>Task Id</th><th>Task Name</th><th>Created on</th><th>Status</th></tr>
          <tr><td>CUST20192</td><td>TSK33442</td><td>Get quote</td><td>20-08-2018</td><td><Link to={`./Submitted`} className="blink pull-right">Submitted</Link></td></tr>
          <tr><td>CUST33182</td><td>TSK22442</td><td>Create Customer</td><td>20-07-2018</td><td><Link to={`./Submitted`} className="blink pull-right">In Progress</Link></td></tr>
          <tr><td>CUST24192</td><td>TSK37442</td><td>Get quote</td><td>20-08-2018</td><td><Link to={`./Submitted`} className="blink pull-right">Completed</Link></td></tr>
          <tr><td>CUST35182</td><td>TSK22742</td><td>Create invoice</td><td>20-07-2018</td><td><Link to={`./Rejected`} className="blink pull-right">Rejected</Link></td></tr>
        </table>
     </div>
    );
  }
  
}
const style = {
  margin: 15,
};
export default RequestorInbox;