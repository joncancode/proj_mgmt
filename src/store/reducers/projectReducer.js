const initState = {
  projects: [
    { id: '1', title: 'first thing to do', content: 'blah blah' },
    { id: '2', title: 'go there', content: 'blah blah' },
    { id: '3', title: 'finish up', content: 'blah blah' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('created project error', action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
