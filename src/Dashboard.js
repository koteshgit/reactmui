import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import clogo from './clogo.png';
import user from './user.png';
import logout1 from './logout1.png';
import CaseList from './CaseList';
import CaseDetails from './CaseDetails';
import CreateTask from './CreateTask';
import TasksInbox from './TaskInbox';
import TasksDetails from './TaskDetails';
import CreateCustomer from './CreateCustomer';
import ApproveInbox from './ApproveInbox';
import TaskAssignment from './TaskAssignment';
import RequestorInbox from './RequestorInbox';


class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Dashboard',
      isLogin:true
    }
  }
  
  render() {
    return (
      <Router>
      <div className="dashboard" class="row">
        <div className="App-header" title="Dashboard"><img class="clogo" src={clogo} align="middle"/><label>   ☰ </label> Offer Management<span><img class="" src={logout1} title="logout" align="right" height="35px"/></span><span><img class="" src={user} title="Admin" align="right" height="35px"/></span></div>
        <table width="100%" height="800px" cellSpacing="0">
        <tr><td width="15%" class="leftBar">
            <br/>
            <div class="headerBar"><Link to={`/`} className="link pull-right">Home</Link></div>
            <br/>
            {/* <div class="margin10 link greyBack"><input type='text' class="txtSearch"/><label><Link to={`./Search`} className="link pull-right"><img src={search1} title="Admin" align="middle" height="25px"/></Link></label></div>
            <br/> */}
            Initialize <br/><br/><br/>
            <div class="headerBar"><i class="nav-icon icon-puzzle"></i>
            <Link to={`./CreateTask`} className="link pull-right">Create Task</Link></div>
            
            <div class="headerBar"><Link to={`./RequestorInbox`} className="link pull-right">Requestor Inbox</Link></div>
            
            Process<br/>
            <div class="headerBar"><Link to={`./Inbox`} className="link pull-right">Tasks Inbox</Link></div>
            
            <div class="headerBar"><Link to={`./CreateCustomer`} className="link pull-right">Create Customer</Link></div>
            
            <div class="headerBar"><Link to={`./ApproveInbox`} className="link pull-right">Approver Inbox</Link></div>
            
            <div class="headerBar"><Link to={`./TaskAssignment`} className="link pull-right">Task Assignment</Link></div>
            <br/>
            COE Management <br/>
            <div class="headerBar"><Link to={`./CaseList`} className="link pull-right">Case List</Link></div>
            
            {/* <div class="headerBar"><Link to={`./CaseList`} className="link pull-right">Case List</Link></div> */}
        </td>
        <td width="90%" class="contentTd">
              <Route exact path="/RequestorInbox" name="RequestprInbox" component={RequestorInbox} />           
              <Route exact path="/CreateTask" name="CreateTask" component={CreateTask} />
              <Route exact path="/Inbox" component={TasksInbox} />
              <Route exact path="/taskdetails" component={TasksDetails} />
              <Route exact path="/CreateCustomer" component={CreateCustomer} />
              <Route exact path="/ApproveInbox" component={ApproveInbox} />
              <Route exact path="/TaskAssignment" component={TaskAssignment} />
              <Route exact path="/CaseList" component={CaseList} />
              <Route exact path="/CaseDetails" component={CaseDetails} />
              {/* <Route path="/:user" component={User} /> */}
              {/* <br/> <br/><Link to={`./LoginSucess`} className="linkBtn" >Submit</Link> */}
        </td>
      </tr>
      </table>
     </div>
     </Router>
    );
  }
  handleClick(event){
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var payload={
    "email":this.state.username,
    "password":this.state.password
    }
    // axios.post(apiBaseUrl+'login', payload)
    // .then(function (response) {
    // console.log(response);
    // if(response.data.code == 200){
    // console.log("Login successfull");
    // var uploadScreen=[];
    // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    // }
    // else if(response.data.code == 204){
    // console.log("Username password do not match");
    // alert("username password do not match")
    // }
    // else{
    // console.log("Username does not exists");
    // alert("Username does not exist");
    // }
    // })
    // .catch(function (error) {
    // console.log(error);
    // });
    }  
}
const style = {
  margin: 15,
};
export default Dashboard;