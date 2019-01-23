import template from './template.html'
import './style.scss'

const name = 'terminal'

controller.$inject = ['$sce', 'browserCodeRunner']
function controller($sce, browserCodeRunner) {
  const self = this

  self.$onInit = function () {
    initState()
  }

  self.$onChanges = function ({ fileName }) {
    if (fileName) {
      self.fileName = fileName.currentValue
    }
  }

  self.run = function () {
    self.executeCode(code => {
      // self.render = $sce.trustAsHtml(
      //   browserCodeRunner.execute(self.project, self.fileName, code)
      // )

      browserCodeRunner.execute(self.project, self.fileName, code, (err,render) => {
        if(err) console.log({err})
        else self.render = $sce.trustAsHtml(render)
      })
    })
  }

  function initState() {
    self.render = ''
  }
}

export default {
  name,
  options: {
    bindings: {
      // code: '<',
      project: '<',
      executeCode: '<',
      fileName: '<'
    },
    template,
    controller,
    controllerAs: 'self'
  }
}