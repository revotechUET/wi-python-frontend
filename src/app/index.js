import template from './template.html'
import './style.scss'

const name = 'app'

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