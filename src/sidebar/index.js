import template from './template.html'
import './style.scss'

const name = 'sidebar'

controller.$inject = []
function controller() {
  const self = this

  // self.$onInit = function() {
  //   initState()
  // }

  // self.$onChanges = function ({ projectName, allProjects }) {
  //   if (projectName && projectName.currentValue) {
  //     self.projectName = projectName.currentValue
  //   }

  //   if (allProjects && allProjects.currentValue) {
  //     self.allProjects = allProjects.currentValue
  //   }
  // }

  // self.projectOnClick = function (name) {
  //   self.openProject(name)
  //   // self.modalStyle.display = 'none'
  // }

  // function initState() {
  //   self.modalStyle = {
  //     display: 'none'
  //   }
  // }
}

export default {
  name,
  options: {
    bindings: {
      currentProject: '<',

      // allProjects: '<',
      // openProject: '<',
      openFile: '<',
      openFolder: '<',
      addFunc: '<'
    },
    template,
    controller,
    controllerAs: 'self'
  }
}