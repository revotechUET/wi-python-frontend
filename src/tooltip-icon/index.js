import template from './template.html'
import './style.scss'

/////////////////////////////////////

// a icon when click show up list of child icon

/////////////////////////////////////


const name = 'tooltipIcon'

controller.$inject = []
function controller() {
  const self = this
  const $ = window.$

  self.$onInit = function () {
    initState()

    // $(`.tooltip-icon i`).toolbar({
    //   content: '#user-toolbar-options',
    //   position: 'bottom',
    //   style: 'dark',
    //   event: 'click'
    // })

    // $('#' + self.id).toolbar({
    //   content: '#user-toolbar-options',
    //   position: 'bottom',
    //   style: 'dark',
    //   event: 'click'
    // })
    // console.log($('.tooltip-icon i'))
  }

  self.iconOnClick = function () {
    if (self.iconFirstClick) {
      const $icon = $(`#${self.idDomIcon}`)
      const $bar = $(`#${self.idDomBar}`)
      if ($icon.length && $bar ) {
        $icon.toolbar({
          content: `#${self.idDomBar}`,
          position: 'bottom',
          style: 'dark',
          event: 'click'
        })

        self.iconFirstClick = false
      }
    }
  }

  function initState() {
    self.idDomIcon = `${name}-${randInt()}-icon`
    self.idDomBar = `${name}-${randInt()}-bar`

    self.iconFirstClick = true
  }

  function randInt() {
    return Math.floor((Math.random() * 100 ) + 1)
  }
}

export default {
  name,
  options: {
    bindings: {
      icon: '<',
      iconTitle: '<'
    },
    template,
    controller,
    controllerAs: 'self'
  }
}