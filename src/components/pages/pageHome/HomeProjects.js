import React from 'react';
import StoreCollapsibles from '../../elements/Project/StoreCollapsibles';
import Collapsible from '../../elements/Project/Collapsible';
import CollapsibleToggle from '../../elements/Project/CollapsibleToggle';
import CollapsibleContent from '../../elements/Project/CollapsibleContent';

const HomeProjects = () => {
  return (
    <div className="group">
      <h2 className="section__title">
        <span>Projects</span>
      </h2>
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
    </div>
  );
};

export default HomeProjects;
