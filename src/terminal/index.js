import template from './template.html'
import './style.scss'

const name = 'terminal'

controller.$inject = ['$sce', '$document']
function controller($sce, $document) {
  const self = this

  self.$onInit = function () {
    self.page = $sce.trustAsHtml(self.code)
  }

  self.$onChanges = function({code}) {
    if(code) {
      self.code = code.currentValue
      self.page = $sce.trustAsHtml(self.code)
    }
  }

  self.run = function() {
    self.executeCode(code => {
      self.code = code
    })
  }
}

export default {
  name,
  options: {
    bindings: {
      code: '<',
      executeCode: '<'
    },
    template,
    controller,
    controllerAs: 'self'
}
}