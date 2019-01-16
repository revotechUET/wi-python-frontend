import template from './template.html'
import './style.scss'

const name = 'sidebar'

controller.$inject = []
function controller() {
  const self = this

  self.$onChanges = function ({ projectName, allProjects }) {
    if (projectName && projectName.currentValue) {
      self.projectName = projectName.currentValue
    }

    if (allProjects && allProjects.currentValue) {
      self.allProjects = allProjects.currentValue
    }
  }

  self.projectOnClick = function (name) {
    self.openProject(name)
    document.querySelector('.modal').style.display = 'none'
  }
}

export default {
  name,
  options: {
    bindings: {
      currentProject: '<',
      findAllProjects: '<',
      allProjects: '<',
      openProject: '<'
    },
    template,
    controller,
    controllerAs: 'self'
  }
}