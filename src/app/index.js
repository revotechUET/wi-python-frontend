import template from './template.html'
import './style.scss'

const name = 'app'

controller.$inject = ['project']
function controller(project) {
  const self = this

  self.$onInit = function () {
    initState()
  }

  self.openProject = function () {

  }

  self.coding = function (code) {
    self.code = code
  }

  function initState() {
    self.projectName = ''
    self.code = ''

  }
}

export default {
  name,
  options: {
    bindings: {},
    template,
    controller,
    controllerAs: 'self'
  }
}