import CodeFlask from 'codeflask'
import template from './template.html'
import './style.scss'


const name = 'explorer'

controller.$inject = ['mime']
function controller(mime) {
  const self = this

  self.$onInit = function () {
    initCodeEditor()
    fixDefaultStyle()
  }

  self.$onChanges = function ({ code, curFile }) {
    if (code) {
      self.code = code.currentValue
    }

    if (curFile && curFile.currentValue) {
      self.curFile = curFile.currentValue
    }

    initCodeEditor()

    // if (.explorer .codeflask pre) try again until success
    try {
      fixDefaultStyle()
    } catch (error) {
      fixDefaultStyle()
    }
  }

  function initCodeEditor() {
    const fileType = mime.getFileType(self.curFile)
    const codeArea = new CodeFlask('#codeArea', {
      lineNumbers: true,
      language: fileType === mime.types.html ?  // html display is very ugly, display js instead
        mime.types.javascript :
        fileType
    })

    addPythonSupport(codeArea)


    codeArea.setLineNumber = function () {
      const LINE_HEIGHT = 20
      const codeHeight = document.querySelector('.explorer code').offsetHeight
      const lineNumber = parseInt(codeHeight / LINE_HEIGHT)

      this.lineNumber = lineNumber
      this.updateLineNumbersCount()
    }

    codeArea.updateCode(self.code)
    codeArea.onUpdate(code => self.updateCode(code))
  }

  function fixDefaultStyle() {
    const preTagWidth = document.querySelector('.explorer .codeflask pre').offsetWidth

    document.querySelector('.explorer .codeflask textarea').style.width = `${preTagWidth}px`
  }

  function addPythonSupport(codeArea) {
    codeArea.addLanguage('python', {
      comment: {
        pattern: /(^|[^\\])#.*?(\r?\n|$)/g,
        lookbehind: !0
      },
      string: /("|')(\\?.)*?\1/g,
      keyword: /\b(as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/g, boolean: /\b(True|False)\b/g, number: /\b-?(0x)?\d*\.?[\da-f]+\b/g, operator: /[-+]{1,2}|=?&lt;|=?&gt;|!|={1,2}|(&){1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|~|\^|%|\b(or|and|not)\b/g,
      ignore: /&(lt|gt|amp);/gi,
      punctuation: /[{}[\];(),.:]/g
    })
  }
}

export default {
  name,
  options: {
    bindings: {
      updateCode: '<',
      code: '<',
      curFile: '<'
    },
    template,
    controller,
    controllerAs: 'self'
  }
}