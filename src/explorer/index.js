import CodeFlask from 'codeflask'
import template from './template.html'
import './style.scss'


const name = 'explorer'

controller.$inject = []
function controller() {
  const self = this

  self.$onInit = function () {
    initState()
    same()
  }

  function initState() {
    // self._code = self.code || ''
    self._code = 'console.log("nah")'
  }

  function same() {
    const codeArea = new CodeFlask('#codeArea', {
      language: 'js',
      lineNumbers: true
    })
    

    codeArea.updateCode(self._code)

    codeArea.onUpdate(e => self._code)
  }
}

export default {
  name,
  options: {
    bindings: {
      changeCode: '<',
      code: '<'
    },
    template,
    controller,
    controllerAs: 'self'
  }
}