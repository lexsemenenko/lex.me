const scrollpoints = function(instanceSettings) {
  const root = {
    settings: {
      scrollpoint: null,
      elementOffset: null,
      offset: 0,
      direction: 'both',
      debug: false,
    },
    public: {},
  }

  let s

  function _mergeSettings() {
    s = Object.assign({}, root.settings, instanceSettings)
  }

  function _getCurrentScrollpoint() {
    const {scrollpoint, elementOffset, offset, direction, debug} = s

    let scrollpointsArr = document.querySelectorAll(scrollpoint)
    scrollpointsArr = [...scrollpointsArr]

    const scrollpointsArrWithActive = scrollpointsArr.map(item => {
      // Sizes, offsetsconst triggerMatching = spTouchesTrigger && spNotPassedTrigger;
      const totalOffset = $(elementOffset).outerHeight() ? $(elementOffset).outerHeight() : offset
      const spFromTop = item.offsetTop - totalOffset
      const spHeight = item.offsetHeight
      const amountScrolled = window.pageYOffset
      const trigger = amountScrolled + totalOffset

      // Conditions
      const spTouchesTrigger = amountScrolled >= spFromTop
      const spNotPassedTrigger = amountScrolled < spFromTop + spHeight
      const triggerMatching = spTouchesTrigger && spNotPassedTrigger
      let isActive = false

      if (direction === 'both') {
        triggerMatching ? (isActive = true) : (isActive = false)
      }
      if (direction === 'down') {
        spTouchesTrigger ? (isActive = true) : (isActive = false)
      }
      if (debug) $('.scrollpoint__trigger').css('top', `${trigger}px`)

      return {
        name: item.id,
        isActive,
      }
    })

    return scrollpointsArrWithActive
  }

  function _debugVisually() {
    $('body').append('<div class="scrollpoint__trigger"></div>')
  }

  const init = () => {
    _mergeSettings()
    _debugVisually()
  }

  init()

  return {
    get() {
      return _getCurrentScrollpoint()
    },
  }
}

export default scrollpoints
