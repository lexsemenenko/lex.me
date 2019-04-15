const scrollpoints = (function() {
  const root = {
    settings: {
      scrollpoint: null,
      elementOffset: null,
      offset: 0,
      direction: 'both',
      debug: false
    },
    public: {}
  };

  let s;

  function _mergeSettings(instanceSettings) {
    s = Object.assign({}, root.settings, instanceSettings);
  }

  function _getCurrentScrollpoint() {
    const { scrollpoint, elementOffset, offset, direction } = s;
    const $elCurrent = false;

    let scrollpointsArr = document.querySelectorAll(scrollpoint);
    scrollpointsArr = [...scrollpointsArr];

    const scrollpointsArrWithActive = scrollpointsArr.map((item, index) => {
      // Sizes, offsetsconst triggerMatching = spTouchesTrigger && spNotPassedTrigger;
      const spFromTop = item.offsetTop;
      const spHeight = item.offsetHeight;
      const amountScrolled = window.pageYOffset;

      // Conditions
      const spTouchesTrigger = amountScrolled >= spFromTop;
      const spNotPassedTrigger = amountScrolled < spFromTop + spHeight;
      const triggerMatching = spTouchesTrigger && spNotPassedTrigger;
      let isActive = false;

      // console.log(spFromTop, 'Offset Top');
      // console.log(spHeight, 'El Hiehgt');
      // console.log(amountScrolled, 'Amount Scrolled');
      // console.log(spTouchesTrigger, 'Touched Trigger');
      // console.log(spNotPassedTrigger, 'Not Passed Trigger');
      // return item.offsetTop;
      // console.log(triggerMatching);
      if (direction === 'both') {
        if (spTouchesTrigger && spNotPassedTrigger) {
          // item.classList.add('active');
          isActive = true;
        } else {
          // item.classList.remove('active');
          isActive = false;
        }
      }

      return {
        name: item.id,
        isActive
      };
    });
    return scrollpointsArrWithActive;
  }

  return {
    setSettings(settings) {
      // Now s is available here
      _mergeSettings(settings);
    },
    get() {
      // Now s is available here
      return _getCurrentScrollpoint();
    }
  };
})();
export default scrollpoints;
