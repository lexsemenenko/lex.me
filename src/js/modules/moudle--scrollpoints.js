/* eslint-disable func-names */
const scrollpoints = function(instanceSettings) {
  const root = {
    settings: {
      scrollpoint: null,
      elementOffset: null, // By ID for now only
      offset: 0,
      direction: 'both',
      debug: false
    },
    public: {}
  };

  let s;

  const mergeSettings = () => {
    s = Object.assign({}, root.settings, instanceSettings);
  };

  const getCurrentScrollpoint = () => {
    const {scrollpoint, elementOffset, offset, direction, debug} = s;

    let scrollpointsArr = document.querySelectorAll(scrollpoint);
    scrollpointsArr = [...scrollpointsArr];

    const scrollpointsArrWithActive = scrollpointsArr.map(item => {
      // Sizes, offsetsconst triggerMatching = spTouchesTrigger && spNotPassedTrigger;
      let elementOuterHeight;
      if (elementOffset) {
        elementOuterHeight = document.getElementById(elementOffset).offsetHeight;
      }

      const totalOffset = elementOuterHeight || offset;
      const spFromTop = item.offsetTop - totalOffset;
      const spHeight = item.offsetHeight;
      const amountScrolled = window.pageYOffset;
      const trigger = amountScrolled + totalOffset;

      // Conditions
      const spTouchesTrigger = amountScrolled >= spFromTop;
      const spNotPassedTrigger = amountScrolled < spFromTop + spHeight;
      const triggerMatching = spTouchesTrigger && spNotPassedTrigger;
      let isActive = false;

      if (direction === 'both') {
        triggerMatching ? (isActive = true) : (isActive = false);
      }
      if (direction === 'down') {
        spTouchesTrigger ? (isActive = true) : (isActive = false);
      }
      let elementTrigger;
      if (debug) {
        elementTrigger = document.getElementsByClassName('scrollpoint__trigger');
        if (elementTrigger) {
          // const trigger = amountScrolled + trigger
          elementTrigger[0].style.top = `${trigger}px`;
        }
      }

      return {
        id: item.id,
        isActive
      };
    });

    return scrollpointsArrWithActive;
  };

  const debugVisually = () => {
    const elementTrigger = document.createElement('div');
    elementTrigger.classList.add('scrollpoint__trigger');
    document.body.appendChild(elementTrigger);
  };

  const init = () => {
    mergeSettings();
    debugVisually();
  };

  init();

  return {
    get() {
      return getCurrentScrollpoint();
    }
  };
};

export default scrollpoints;
