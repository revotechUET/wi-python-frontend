import template from './template.html'
import './style.scss'

const name = 'terminal'

controller.$inject = ['$sce', '$timeout', 'logStream']
function controller($sce, $timeout, logStream) {
  const self = this
  self.messages = [];
  logStream.registerCallback("pyLog", function(msg) {
    console.log(msg);
    self.messages.push(msg);
    $timeout(() => {});
  });
  self.$onInit = function () {
    initState()
  }

  self.$onChanges = function ({ resultHtml, iframeHtmlLink, isResultAIframe }) {
    if (resultHtml) {
      self._resultHtml =  $sce.trustAsHtml(resultHtml.currentValue)
    }

    if(iframeHtmlLink) {
      self._iframeHtmlLink = $sce.trustAsResourceUrl(iframeHtmlLink.currentValue)
    }

    if(isResultAIframe) {
      self.isResultAIframe = isResultAIframe.currentValue
    }
  }

  // self.run = function () {
  //   self.getCurrentCode(code => {
  //     browserCodeRunner.execute(self.project, self.fileName, ({ type, render, link }) => {
  //       if (render) self.render = $sce.trustAsHtml(render)
  //       if (link) self.link = $sce.trustAsResourceUrl(link)
  //       self.codeOrIframe = type === mime.types.html ? 'iframe' : 'code'
  //     })
  //   })
  // }

  function initState() {
    self._resultHtml = ''
    self._iframeHtmlLink = ''
  }
}

export default {
  name,
  options: {
    bindings: {
      resultHtml: '<',
      iframeHtmlLink: '<',
      isResultAIframe: '<'
    },
    template,
    controller,
    controllerAs: 'self'
  }
}