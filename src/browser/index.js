import template from './template.html'

const name = 'browser'

controller.$inject = []
function controller() {
  const self = this
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