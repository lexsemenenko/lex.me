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

  // Component Did Mount
  useEffect(() => {
    ContentfulClient.getEntries().then(entries => {
      setProjects({projects: entries.items});
    });
  }, []);

  return (
    <contextContentful.Provider value={stateProjects}>
      <StoreCollapsibles blockClass="project">
        <Collapsible id="id-1">
          <CollapsibleToggle>Collapsible Toggle 1</CollapsibleToggle>
          <CollapsibleContent>Collapsible Content1</CollapsibleContent>
        </Collapsible>
        <Collapsible id="id-2">
          <CollapsibleToggle>Collapsible Toggle2</CollapsibleToggle>
          <CollapsibleContent>Collapsible Content2</CollapsibleContent>
        </Collapsible>
      </StoreCollapsibles>
    </contextContentful.Provider>
  );
};

export default StoreContentful;
