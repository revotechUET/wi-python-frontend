import template from './template.html'
import './style.scss'

/////////////////////////////////////

// A List of action icon

/////////////////////////////////////


const name = 'tools'

controller.$inject = ['auth']
function controller(auth) {
  const self = this

  self.logout = function () {
    auth.logout()
  }
}

export default {
  name,
  options: {
    bindings: {
      openProject: '<',
      findAllProjects: '<',
      allProjects: '<',
      closeProject: '<',

      addFunc: '<',
      saveCode: '<',

      runCode: '<'
    },
    template,
    controller,
    controllerAs: 'self'
  }
}