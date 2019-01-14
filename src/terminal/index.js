import template from './template.html'
import './style.scss'

const name = 'terminal'

controller.$inject = []
function controller() {

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