import React, {createContext, useState, useEffect} from 'react';
import ContentfulClient from './ContentfulClient';
import StoreCollapsibles from './StoreCollapsibles';
import Collapsible from './Collapsible';
import CollapsibleToggle from './CollapsibleToggle';
import CollapsibleContent from './CollapsibleContent';

export const contextContentful = createContext({});

const StoreContentful = props => {
  const {children} = props;

  const [stateProjects, setProjects] = useState({projects: []});
  const {projects} = stateProjects;

  // Component Did Mount
  useEffect(() => {
    ContentfulClient.getEntries({
      content_type: 'project'
    }).then(entries => {
      setProjects({projects: entries.items});
    });
  }, []);

  return (
    <contextContentful.Provider value={stateProjects}>
      <>
        <ul>
          {projects.map(item => (
            <li key={item.sys.id}>
              {}
              <div>{item.fields.projectTitle}</div>
            </li>
          ))}
        </ul>
      </>
    </contextContentful.Provider>
  );
};

export default StoreContentful;
