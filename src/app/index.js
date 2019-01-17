import template from './template.html'
import './style.scss'

const name = 'app'

controller.$inject = ['project', 'alertMessage']
function controller(project, alertMessage) {
  const self = this

  self.$onInit = function () {
    initState()
  }

  self.findAllProjects = function () {
    project.listProjects()
      .then(projects => {
        self.allProjects = projects
      })
      .catch(error => {
        alertMessage.error(error)
      })
  }

  self.openProject = function (name) {
    // self.currentProject = name
    project.openProject(name)
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

    project.openFile(dir)
      .then(code => {
        self.code = code
      })
      .catch(error => {
        alertMessage.error(error)
      })
  }

  self.openFolder = function (dir) {
    project.openFolder(dir)
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

        console.log({folder, item})
      })
      .catch(error => {
        alertMessage.error(error)
      })
  }

  self.coding = function (code) {
    self.code = code
  }

  self.executeCode = function (cb) {
    cb(self.code)
  }


  function initState() {
    self.currentProject = {
      rootName: '',
      files: [],
      folders: [],
      path: ''
    }
    self.allProjects = []


    self.code = 'console.log("example.js")'
    self.curFile = 'example.js'
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