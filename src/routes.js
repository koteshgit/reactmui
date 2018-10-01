import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Breadcrumbs = Loadable({
  loader: () => import('./views/Base/Breadcrumbs/Breadcrumbs'),
  loading: Loading,
});
const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const CreateCustomer = Loadable({
  loader: () => import('./CreateCustomer'),
  loading: Loading,
});

const CreateTask = Loadable({
  loader: () => import('./CreateTask'),
  loading: Loading,
});

const TaskInbox = Loadable({
  loader: () => import('./TaskInbox'),
  loading: Loading,
});

const TaskAssignment = Loadable({
  loader: () => import('./TaskAssignment'),
  loading: Loading,
});

const ApproveInbox = Loadable({
  loader: () => import('./ApproveInbox'),
  loading: Loading,
});

const CaseList = Loadable({
  loader: () => import('./CaseList'),
  loading: Loading,
});

const CaseDetails = Loadable({
  loader: () => import('./CaseDetails'),
  loading: Loading,
});

const TaskDetails = Loadable({
  loader: () => import('./TaskDetails'),
  loading: Loading,
});

const CnrOverview = Loadable({
  loader: () => import('./CnrOverview'),
  loading: Loading,
});

const CnrInprogress = Loadable({
  loader: () => import('./CnrInprogress'),
  loading: Loading,
});

const Settings = Loadable({
  loader: () => import('./Settings'),
  loading: Loading,
});

const Register = Loadable({
  loader: () => import('./views/Pages/Register'),
  loading: Loading,
});
const Users = Loadable({
  loader: () => import('./views/Users/Users'),
  loading: Loading,
});
const User = Loadable({
  loader: () => import('./views/Users/User'),
  loading: Loading,
});
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/Register', name: 'Register', component: Register },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/Settings', name: 'Settings-Application Configuration', component: Settings },
  { path: '/CnrOverview', exact: true, name: 'CNR Overview', component: CnrOverview },
  { path: '/CnrInprogress', exact: true, name: 'Program Details', component: CnrInprogress },
  { path: '/TaskDetails', name: 'Task Details', component: TaskDetails },
  { path: '/CreateCustomer', name: 'Create Customer', component: CreateCustomer },
  { path: '/CreateTask', name: 'Create Task', component: CreateTask },
  { path: '/TaskInbox', name: 'Task Inbox', component: TaskInbox },
  { path: '/TaskAssignment', name: 'Task Assignment', component: TaskAssignment },
  { path: '/ApproveInbox', name: 'Approve Inbox', component: ApproveInbox },
  { path: '/CaseList', name: 'Case List', component: CaseList },
  { path: '/CaseDetails', name: 'Case Details', component: CaseDetails },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
  