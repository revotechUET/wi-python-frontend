import template from './template.html'
import './style.scss'

const name = 'terminal'

controller.$inject = ['$sce', 'browserCodeRunner', 'mime']
function controller($sce, browserCodeRunner, mime) {
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
    self.getCurrentCode(code => {
      browserCodeRunner.execute(self.project, self.fileName, ({ type, render, link }) => {
        if (render) self.render = $sce.trustAsHtml(render)
        if (link) self.link = $sce.trustAsResourceUrl(link)
        self.codeOrIframe = type === mime.types.html ? 'iframe' : 'code'
      })
    })
  }

  function initState() {
    self.render = ''
    self.link = ''
    self.codeOrIframe = 'code'
  }
}

export default {
  name,
  options: {
    bindings: {
      project: '<',
      getCurrentCode: '<',
      fileName: '<',
      saveCode: '<'
    },
    template,
    controller,
    controllerAs: 'self'
  }
}