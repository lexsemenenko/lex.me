const defaultProjects = {
  projects: []
};

const projectsReducer = (state = defaultProjects, action) => {
  console.log(state, '!!!!state');
  switch (action.type) {
    case 'LOAD_PROJECTS_CONTENTFUL':
      // Return New State
      return action.projects ? action.projects : state.projects;
    default:
      return state;
  }
};

export default projectsReducer;
