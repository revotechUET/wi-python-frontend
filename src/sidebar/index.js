import template from './template.html'
import './style.scss'

const name = 'sidebar'

controller.$inject = []
function controller() {
  const self = this

  self.$onInit = function () {
  }
}

export default {
  name,
  options: {
    bindings: {
      projectName: '<'
    },
    template,
    controller,
    controllerAs: 'self'
  }
}