import template from './template.html'
import './style.scss'

const name = 'modal'

controller.$inject = []
function controller() {
  const self = this

  self.$onInit = function () {
    initState()
  }

  self.showModal = function () {
    self.modalStyle.display = 'block'
  }

  self.close = function () {
    self.modalStyle.display = 'none'
    if(self.onClose && typeof self.onClose === 'function')
      self.onClose()
  }

  function initState() {
    self.modalStyle = {
      display: 'none'
    }
  }
}

export default {
  name,
  options: {
    bindings: {
      modalName: '<',
      onClose: '<',
      icon: '<'
    },
    template,
    controller,
    controllerAs: 'self',
    transclude: true,
  }
}