import template from './template.html'
import './style.scss'

const name = 'sidebar'

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