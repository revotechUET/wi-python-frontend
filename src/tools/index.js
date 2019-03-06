import template from './template.html'
import './style.scss'

/////////////////////////////////////

// A List of action icon

/////////////////////////////////////


const name = 'tools'

controller.$inject = []
function controller() {
  const self = this
  const $ = window.$

  self.$onInit = function () {
    initState()
    
    $('#user-toolbar').toolbar({
      content: '#user-toolbar-options',
      position: 'bottom',
      style: 'dark',
      event: 'click'
    })

  }

  function initState() {
    
  }
}

export default {
  name,
  options: {
    bindings: {
    },
    template,
    controller,
    controllerAs: 'self'
  }
}