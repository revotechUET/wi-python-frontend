import template from './template.html'
import './style.scss'

const name = 'app'

controller.$inject = ['projectApi', 'alertMessage', 'funcGen', 'browserCodeRunner', 'mime']
function controller(projectApi, alertMessage, funcGen, browserCodeRunner, mime) {
  const self = this

  self.$onInit = function () {
    initState()
  }

  self.findAllProjects = function () {
    projectApi.listProjects()
      .then(projects => {
        self.allProjects = projects
      })
      .catch(error => {
        alertMessage.error(error)
      })
  }

  self.openProject = function (name) {
    // self.currentProject = name
    projectApi.openProject(name)
      .then(item => {
        self.currentProject = item
      })
      .catch(error => {
        alertMessage.error(error)
      })
  }

  self.openFile = function (dir) {

    const fileName = dir
      .split('/')
      .reduce((acc, cur, i, arr) => i === arr.length - 1 ? cur : null)

    self.curFile = fileName

    projectApi.openFile(dir)
      .then(code => {
        self.code = code
      })
      .catch(error => {
        alertMessage.error(error)
      })
  }

  self.openFolder = function (dir) {
    projectApi.openFolder(dir)
      .then(item => {
        const folder = findNodeInTree(self.currentProject, f => f.path === dir)

        if (!folder) return alertMessage.error('There are some error, refresh?')
        if (!(item.files.length + item.folders.length)) {
          return alertMessage.error('There is nothing in this folder')
        }

        for (const f of item.files) {
          folder.files.push(f)
        }

        for (const f of item.folders) {
          folder.folders.push(f)
        }

        console.log({ folder, item })
      })
      .catch(error => {
        alertMessage.error(error)
      })
  }

  self.saveCode = function () {
    projectApi.saveCode(self.currentProject.rootName, self.curFile, self.code)
      .then(() => alertMessage.success('save success'))
      .catch(error => alertMessage.error(error))

  }

  self.runCode = function () {
    browserCodeRunner.execute(self.currentProject.rootName, self.curFile,
      (error, { type, render, link }) => {
        if (error) {
          return alertMessage.error(error.message)
        }

        if(render) self.resultHtml = render
        if(link) self.iframeHtmlLink = link
        self.isResultAIframe = type === mime.types.html
      })
  }

  self.coding = function (code) {
    self.code = code
  }

  self.getCurrentCode = function (cb) {
    cb(self.code)
  }

  self.addFunction = function (type) {

    // const newFuncCode = funcGen.generateForFile(self.curFile)
    // self.code = newFuncCode + self.code

    const fileType = mime.getFileType(self.curFile)
    if(fileType !== mime.types.python) 
      return alertMessage.error(`Doesn't support gen function for file ${fileType}`)
    
    
    const generatedFuncCode = funcGen.generateForPy(type)
    self.code = generatedFuncCode + self.code
  }


  function initState() {
    self.currentProject = {
      rootName: 'NOT OPEN PROJECT YET!!!',
      files: [],
      folders: [],
      path: ''
    }
    self.allProjects = []

    // pass to explorer
    self.code = `/* your code is here */`
    self.curFile = 'sample.js'

    // pass to terminal
    self.resultHtml = ''
    self.iframeHtmlLink = '' // if code is html, this field will have value
    self.isResultAIframe = false
  }

  function findNodeInTree(rootNode, predicate) {
    for (const folder of rootNode.folders) {
      if (predicate(folder)) {
        return folder
      }
    }

    for (const folder of rootNode.folders) {
      const foundNode = findNodeInTree(folder, predicate)
      if (foundNode) return foundNode
    }

    return null
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