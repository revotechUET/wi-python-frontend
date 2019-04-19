import template from './template.html'
import './style.scss'

const name = 'modalIcon'

controller.$inject = ['$timeout']
function controller($timeout) {
  const self = this

  self.$onInit = function () {
    console.log(this.showing);
  }

  self.close = function () {
    $timeout(() => (self.showing = !self.showing));
  }

}

export default {
  name,
  options: {
    bindings: {
      modalName: '<',
      icon: '<',
      iconTitle: '<',
      showing: "=",
      allowCloseAfterClick: '<'
    },
    template,
    controller,
    controllerAs: 'self',
    transclude: true,
  }
}