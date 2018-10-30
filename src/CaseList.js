import React, { Component } from 'react';
import {Col, Pagination, PaginationItem, PaginationLink,Row, Button, Table} from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

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
      open: false,
      checked: [1],
      value: 'User1',
 
    }
  }
  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };
  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
    alert(this.state.value);
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
          <div>
            <div className="animated fadeIn">
              <Row>
                <Col xs="12" lg="12">
                  <Row>
                    <Col md="3"><h3>Cases</h3></Col>
                    <Col md="9" className="pull-right"><input type='text'/><Button className="tsIndxButton" color="primary">Search</Button></Col>
                  </Row>
                  <hr/>
                  <Table size="sm" hover borderless>
                    <thead>
                    <tr><th className="pdl-15">Case</th><th>Category</th><th>Sub-Category</th><th>Case Date</th><th>Status</th><th>Entity/Initiator</th><th>Entity/Initiator Name</th><th>Repeate Caller</th><th>Complaint Indicator</th><th>Action</th><th>Assign To</th></tr></thead>
                    <tbody>
                      <tr><td><Button className="tsIndxButton" href="#/CaseDetails" color="link">00001015</Button></td><td>Claims</td><td>Email</td><td>10/19/2018 2:30AM</td><td>Open</td><td>IT Hardware</td><td>rhpamadmin</td><td></td><td></td><td><Button className="tsIndxButton" color="primary" onClick={this.handleClickOpen}>Assign</Button></td><td>{this.state.value}</td></tr>
                      <tr><td><Button className="tsIndxButton" href="#/CaseDetails" color="link">00001217</Button></td><td>Dental</td><td>Alternate Medicine</td><td>10/19/2018 2:30AM</td><td>In Progress</td><td>IT Hardware</td><td>rhpamadmin</td><td></td><td></td><td><Button className="tsIndxButton" color="primary" onClick={this.handleClickOpen}>Assign</Button></td><td></td></tr>
                      <tr><td><Button className="tsIndxButton" href="#/CaseDetails" color="link">00001218</Button></td><td>Dental</td><td>Alternate Medicine</td><td>10/19/2018 3:30AM</td><td>Assigned</td><td>IT Hardware</td><td>rhpamadmin</td><td></td><td></td><td><Button className="tsIndxButton" disabled olor="primary">Assign</Button></td><td></td></tr>
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
              </Col>
            </Row>
          </div>
          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Select User</DialogTitle>
          <DialogContent>
            <DialogContentText>
            <div className={classes.root}>
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              {/* <List>
                {[0, 1, 2, 3].map(value => (
                  <ListItem key={value} dense button>
                    <Avatar alt="Remy Sharp" src="/static/images/remy.jpg" />
                    <ListItemText primary={`Line item ${value + 1}`} />
                    <ListItemSecondaryAction>
                      <Radio
                        onChange={this.handleToggle(value)}
                        checked={this.state.checked.indexOf(value) !== -1}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List> */}
              <FormControlLabel value="User1" control={<Radio />} label="User1" />
              <FormControlLabel value="User2" control={<Radio />} label="User2" />
              <FormControlLabel value="User3" control={<Radio />} label="User3" />
              <FormControlLabel value="User4" control={<Radio />} label="User4" />
              <FormControlLabel value="User5" control={<Radio />} label="User5" />
              <FormControlLabel value="User6" control={<Radio />} label="User6" />
              <FormControlLabel value="User7" control={<Radio />} label="User7" />
              <FormControlLabel value="User8" control={<Radio />} label="User8" />
              <FormControlLabel value="User9" control={<Radio />} label="User9" />
              </RadioGroup>
            </div>
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="searchUser"
              label="Search User"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="danger">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
        </div>
      </div>
    );
  }
}
CaseList.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CaseList);