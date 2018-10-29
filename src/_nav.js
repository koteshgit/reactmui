export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: '',
      },
    },
    // {
    //   title: true,
    //   name: 'Customer',
    //   wrapper: {            // optional wrapper object
    //     element: '',        // required valid HTML5 element tag
    //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },
    // {
    //   name: 'Create Customer',
    //   url: '/CreateCustomer',
    //   icon: 'icon-people',
    // },
    // {
    //   name: 'Create Task',
    //   url: '/CreateTask',
    //   icon: 'fa fa-check-square-o',
    // },
    // {
    //   title: true,
    //   name: 'Task Management',
    //   wrapper: {
    //     element: '',
    //     attributes: {},
    //   },
    // },
    // {
    //   name: 'Tasks Inbox',
    //   url: '/TaskInbox',
    //   icon: 'fa fa-table',
    // },
    // {
    //   name: 'Tasks Assignment',
    //   url: '/TaskAssignment',
    //   icon: 'fa fa-table',
    // },
    // {
    //   name: 'Approve Inbox',
    //   url: '/ApproveInbox',
    //   icon: 'fa fa-table',
    // },
    {
      title: true,
      name: 'Case Management',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Case List',
      url: '/CaseList',
      icon: 'fa fa-table',
    },
    // {
    //   name: 'CNR Overview',
    //   url: '/CnrOverview',
    //   icon: 'fa fa-stack-overflow',
    // },
    // {
    //   name: 'Settings',
    //   url: '/Settings',
    //   icon: 'icon-settings',
    // },
  ],
};
