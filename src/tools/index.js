import template from './template.html'
import './style.scss'

/////////////////////////////////////

// A List of action icon

/////////////////////////////////////


const name = 'tools'

controller.$inject = ['browserCodeRunner']
function controller(browserCodeRunner) {
  const self = this

  self.$onInit = function () {
    initState()
  }

  function initState() {

  }
}

export default {
  name,
  options: {
    bindings: {
      openProject: '<',
      findAllProjects: '<',
      allProjects: '<',

      addFunc: '<'
    },
    template,
    controller,
    controllerAs: 'self'
  }
}