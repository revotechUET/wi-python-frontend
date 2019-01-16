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
    self.code = ''
    self.allProjects = []
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