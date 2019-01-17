import template from './template.html'
import './style.scss'

const name = 'app'

controller.$inject = ['project', 'alertMessage']
function controller(project, alertMessage) {
  const self = this

  self.$onInit = function () {
    initState()
  }

  //////////////////////////////////////////////
  ////////// sidebar //////////////////////////
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
        console.log('open folder is not handle yet')
      })
      .catch(error => {
        alertMessage.error(error)
      })
  }

  //////////////////////////////////////////////
  ////////// end sidebar //////////////////////////

  //////////////////////////////////////////////
  ////////// explorer //////////////////////////

  self.coding = function (code) {
    self.code = code
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