import hljs from 'highlight.js'
import template from './template.html'
import './style.scss'
import 'highlight.js/styles/solarized-light.css'

const name = 'explorer'

controller.$inject = []
function controller() {
  const self = this

  self.$onInit = function () {
    hljs.initHighlightingOnLoad()
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