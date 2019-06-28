import React from 'react';
import Icon from '../elements/Icons';
import Collapsible from '../elements/Collapsible/Collapsible';
import StoreCollapsibles from '../elements/Collapsible/StoreCollapsibles';
import CollapsibleToggle from '../elements/Collapsible/CollapsibleToggle';
import CollapsibleContent from '../elements/Collapsible/CollapsibleContent';

const Footer = () => (
  <div id="footer" className="section footer"> 
    <a  className="footer__logo" href="/">
      <Icon name="logo" size="4em"/>
    </a>
  </div>
);

export default Footer;
