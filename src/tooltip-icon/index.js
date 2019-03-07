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
    
    // await autoMountJquery()
  }


  // because we set the id dynamicaly
  // when the component is init, the id hasent not setted yet
  // so we wait util the user click, if not success click again
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

  // because we set the id dynamicaly
  // when the component is init, the id hasent not setted yet
  // so we wait util the user click, if not success click again
  // but we cant depend on user
  // async function autoMountJquery() {
  //   if (self.iconFirstClick) return 

  //   const waitTime = 3000

  //   await new Promise(resolve => setTimeout(resolve, waitTime))
  //   self.iconOnClick()
  //   await autoMountJquery()
  // }
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
    controllerAs: 'self',
    transclude: true,
  }
}