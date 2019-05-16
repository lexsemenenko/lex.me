import React, { useEffect, useReducer } from 'react';
import reducerUi from '../redicers/reducerUi';
import HomeHero from './pageHome/HomeHero';
import HomeAbout from './pageHome/HomeAbout';
// import HomeProjects from '../components/partials/homepage/Projects';
import HomeContact from './pageHome/HomeContact';
import sp from '../../js/modules/moudle--scrollpoints';
import contextUi from '../context/contextUi';

const pageHome = () => {
  // # Using Reducer
  // It Replaces the following line
  // const [stateSpSections, updateSpSections] = useState([]);
  // ## useReducer
  // Pass 1 reducer, 2 Initial State.
  // It returns an aray with state and dispatch function
  const [stateSpSections, dispatchUi] = useReducer(reducerUi, []);

  const getSp = () => {
    const spInstance = sp({
      scrollpoint: '.scrollpoint',
      offset: 0,
      elementOffset: '#header',
      direction: 'both',
      debug: false
    });
    $(window).on('scroll', () => {
      dispatchUi({ type: 'GET_SCROLLPOINTS_SECTIONS', getScrollPontsSections: spInstance.get() });
    });
  };

  useEffect(() => {
    getSp();
  }, []);

  return (
    // We are providing context values to any children who wants to cosume it
    <contextUi.Provider value={{ stateSpSections, dispatchUi }}>
      <div id="intro" className={`section section--hero scrollpoint ${stateSpSections.length && stateSpSections[0].isActive ? ' active' : ' not-active'}`}>
        <HomeHero />
      </div>
      <div id="about" className={`section section--lines scrollpoint ${stateSpSections.length && stateSpSections[1].isActive ? ' active' : ' not-active'}`}>
        <HomeAbout />
      </div>
      <div id="projects" className={`section section--lines section--muted scrollpoint ${stateSpSections.length && stateSpSections[2].isActive ? ' active' : ' not-active'}`}>
        projects{/* <HomeProjects /> */}
      </div>
      <div id="contact" className={`section section--lines-dark  scrollpoint ${stateSpSections.length && stateSpSections[3].isActive ? ' active' : ' not-active'}`} />
    </contextUi.Provider>
  );
};

export default pageHome;
