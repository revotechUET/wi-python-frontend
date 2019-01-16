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
    let codeArea = new CodeFlask('#codeArea', {
      language: 'js',
      lineNumbers: true
    })

    let code = String.raw`new Array(5)
      .fill('Option ')
      .map((e, i) =>
        e + (10 + i)
          .toString(36)
          .toUpperCase()
      )
      .join('\n')
    
    // But you have no choice
    `

    codeArea.updateCode(code)

    codeArea.onUpdate(e => console.log(e))
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