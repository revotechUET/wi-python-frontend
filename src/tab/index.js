import template from './template.html'
import './style.scss'

const name = 'tab'

controller.$inject = []
function controller() {
  const self = this

}

export default {
  name,
  options: {
    bindings: {
      fileName: '<'
    },
    template,
    controller,
    controllerAs: 'self'
}
}