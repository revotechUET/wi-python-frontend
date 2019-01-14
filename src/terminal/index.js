import template from './template.html'
import './style.scss'

const name = 'terminal'

controller.$inject = ['$sce']
function controller($sce) {
  const self = this

  self.$onInit = function () {
    self.page = $sce.trustAsHtml(self.html)
  }
}

export default {
  name,
  options: {
    bindings: {
      html: '<'
    },
    template,
    controller,
    controllerAs: 'self'
}
}