import template from './template-new.html'
import './style.scss'

/////////////////////////////////////

// A List of action icon

/////////////////////////////////////


const name = 'tools'

controller.$inject = ['$scope', '$timeout', 'auth']
function controller($scope, $timeout, auth) {
  const self = this

  self.logout = function () {
    auth.logout()
  }

  self.setShowOP = function(val) {
    $timeout(() => {$scope.showOP = val;});
  }
}

export default {
  name,
  options: {
    bindings: {
      openProject: '<',
      findAllProjects: '<',
      allProjects: '<',
      closeProject: '<',
      createNewProject: '<',
      deleteProject: '<',

      createNewFile: '<',
      createNewFolder: '<',
      deleteItem: '<',

      addFunc: '<',
      saveCode: '<',
      runCode: '<',
      codePalette: '<',
      removeCodePalette:'<',

      getCurveTree:'<',
      removeTreeConfig:'<',
      deleteChecked:'<',
      saveChecked:'<',
      refreshChecked:'<',
      newChecked:'<',
      generateLoginByToken:'<',
      generateLoginByAccount:'<',
      generateSaveCurveData:'<',
      aboutWiPython: '<',
      changeTheme: '<',
      autoSave: '=',
      saveWarning: '=',
      toastHistory: '=',
      showProject: '=',
      showProjectPython: '=',
      showConsole: '='
    },
    template,
    controller,
    controllerAs: 'self'
  }
}