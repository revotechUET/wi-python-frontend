import template from './template.html'
import './style.scss'

const name = 'terminal'

controller.$inject = ['$sce', 'browserCodeRunner']
function controller($sce, browserCodeRunner) {
  const self = this

  self.$onInit = function () {
    self.render = $sce.trustAsHtml(
      browserCodeRunner.execute(self.fileName, self.code)
    )
  }

  self.$onChanges = function({code, fileName}) {
    if(code) {
      self.code = code.currentValue
      self.render = $sce.trustAsHtml(
        browserCodeRunner.execute(self.fileName, self.code)
      )
    }

    if(fileName) {
      self.fileName = fileName.currentValue
    }
  }

  self.run = function() {
    self.executeCode(code => {
      self.code = code
      self.render = $sce.trustAsHtml(
        browserCodeRunner.execute(self.fileName, self.code)
      )
    })
  }

  
}

export default {
  name,
  options: {
    bindings: {
      code: '<',
      executeCode: '<',
      fileName: '<'
    },
    template,
    controller,
    controllerAs: 'self'
}
}