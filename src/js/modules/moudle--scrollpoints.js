import _events from '../core/core--events';

const scrollpoints = function(instanceSettings) {
  const root = {
    settings: {
      scrollpoint: null,
      elementOffset: null,
      offset: 0,
      direction: 'both',
      debug: false
    },
    instanceSettings,
    public: {}
  };

  const { scrollpoint, elementOffset, offset, direction, debug } = Object.assign({}, root.settings, root.instanceSettings);

  const fuck = {};

  const getScrollpoint = function() {
    $(scrollpoint).each(function(index, el) {
      const $el = $(el);
      const offset = $(elementOffset).outerHeight() ? $(elementOffset).outerHeight() : offset;
      const spFromTop = $el.offset().top - offset;
      const spHeight = $el.outerHeight();

      const amountScrolled = window.pageYOffset;
      const trigger = amountScrolled + offset;
      const spTouchesTrigger = amountScrolled >= spFromTop;
      const spNotPassedTrigger = amountScrolled < spFromTop + spHeight;

      if (direction === 'both' && spTouchesTrigger && spNotPassedTrigger) {
        fuck.val = $el;
      }
    });
    return fuck.val;
  };

  return getScrollpoint();
};

export default scrollpoints;
