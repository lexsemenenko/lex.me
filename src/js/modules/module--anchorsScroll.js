// =============================================================================
// anchorsScroll
// =============================================================================

// Description:     Provides smooth scroll feature for anchor (in-content) links

// Features:        Todo:
//                  - Provide element as offset for scroll

const anchorsScroll = instanceSettings => {
  const root = {
    settings: {
      element: null,
      offset: 0,
      offsetElement: null,
      offsetNudge: 0,
      duration: 500
    },
    instance: {
      settings: instanceSettings
    },
    public: {}
  };

  const mergeSettings = () => {
    return Object.assign({}, root.settings, root.instance.settings);
  };

  const s = mergeSettings();

  function scroll() {
    // console.log(s)
    const {element, offset, offsetElement, offsetNudge, duration} = s;
    let el = document.querySelectorAll(element);
    el = [...el];
    // Spread NodeList into an array first before looping
    el.forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        if (item.hash !== '') {
          const elMatch = document.getElementById(item.hash.substring(1));
          const elMatchPositionTop = elMatch.getBoundingClientRect().top;
          const startPosition = window.pageYOffset;
          const distance = elMatchPositionTop;
          let startTime = null;

          const animation = currentTime => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = Math.easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          };
          //        http://www.gizma.com/easing
          Math.easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
          };

          // Animate at 60fps for nice animation
          requestAnimationFrame(animation);
        }
      });
    });
  }

  function init() {
    mergeSettings();
    scroll();
  }

  init();
  return root.public;
};

export default anchorsScroll;
