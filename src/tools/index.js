import template from './template-new.html'
import './style.scss'

/////////////////////////////////////

// A List of action icon

/////////////////////////////////////
const queryString = require('query-string')


const name = 'tools'

controller.$inject = ['$scope', '$timeout', 'auth', '$location', 'config']
function controller($scope, $timeout, auth, $location, config) {
  const self = this
	const BASE_URL = "https://users.i2g.cloud";
  self.$onInit = function() {
    self.baseUrl = $location.search().baseUrl || self.baseUrl || config.PROJECT_RELATED_ROOT_URL || BASE_URL;
		self.loginUrl = $location.search().loginUrl || self.loginUrl || config.USER_RELATED_ROOT_URL;
		self.queryString = queryString.parse(location.search);
  }
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
      mute: '=',
      showProject: '=',
      showProjectPython: '=',
      showConsole: '='
    },
    template,
    controller,
    controllerAs: 'self'
  }
}