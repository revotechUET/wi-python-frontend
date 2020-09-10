import template from './template-new.html'
import './style.scss'

/////////////////////////////////////

// A List of action icon

/////////////////////////////////////
const queryString = require('query-string')
// import { wiLogin } from '@revotechuet/misc-component-vue'
import { wiLoginClient } from '@revotechuet/misc-component-vue'
const wiLogin = new wiLoginClient('WI_PYTHON_CLIENT')

const name = 'tools'

controller.$inject = ['$scope', '$timeout', 'config', 'ngDialog']
function controller($scope, $timeout, config, ngDialog) {
  const self = this
	const BASE_URL = "https://users.i2g.cloud";
  self.$onInit = function() {
    loadTheme();
    loadFontSize();
    wiLogin.doLogin({ redirectUrl: window.location.origin, whoami: config.WHOAMI, loginPage: config.AUTHENTICATION_HOME });
  }
  self.setShowOP = function(val) {
    $timeout(() => {$scope.showOP = val;});
  }
  self.logout = function() {
    let logoutDialog = ngDialog.open({
      template: 'templateLogout',
      className: 'i2g-ngdialog',
      showClose: true,
      scope: $scope,
    });
    self.acceptLogout = function () {
      wiLogin.logout({ redirectUrl: window.location.origin, whoami: config.WHOAMI, loginPage: config.AUTHENTICATION_HOME });
    }
    self.cancelLogout = function () {
      ngDialog.close(logoutDialog.id)
    }
  }
  self.getUser = function() {
    return localStorage.username || 'Guest';
  }
  self.setTheme = function(theme)  {
    if (theme == 'dark') {
      localStorage.setItem('theme', theme);
      $timeout(()=>{
        self.currentTheme = 'dark';
      })
      $(':root').css('--toolbar-bg-color', '#252525');
      $(':root').css('--white', '#252525');
      $(':root').css('--black', '#fff');
      $(':root').css('--text-primary-color', '#fff');
      $(':root').css('--button-bg-color', '#434343');
      $(':root').css('--input-bg', '#2d2d2d');
      $(':root').css('--dialog-bg-color', '#333333');
      $(':root').css('--input-bg-hover', '#1e1e1e');
      $(':root').css('--box-shadow', '0px 10px 50px rgb(0 0 0 / 17%)');
      $(':root').css('--body-bg-color', '#252525');
      $(':root').css('--input-check-bg', '#333333');
      $(':root').css('--input-border', '#fff');
      $(':root').css('--select-bg', '#f3f3f4');
      $(':root').css('--select-border', '#434343');
      
    }
    if (theme == 'light') {
      localStorage.setItem('theme', 'light');
      $timeout(()=>{
        self.currentTheme = 'light';
      })
      $(':root').css('--toolbar-bg-color', '#fff');
      $(':root').css('--body-bg-color', '#f3f3f4');
      $(':root').css('--dialog-bg-color', '#fff');
      $(':root').css('--white', '#fff');
      $(':root').css('--black', '#000');
      $(':root').css('--button-bg-color', '#f3f3f4');
      $(':root').css('--text-primary-color', '#0d0b22');
      $(':root').css('--input-check-bg', '#fff');
      $(':root').css('--input-bg', '#f3f3f4');
      $(':root').css('--input-border', '#9e9ea7');
      $(':root').css('--input-bg-hover', '#fff');
      $(':root').css('--box-shadow', '0px 10px 50px rgba(0, 0, 0, 0.1)');
      $(':root').css('--select-bg', '#f3f3f4');
      $(':root').css('--select-border', '#f3f3f4');

    }
  }
  function loadTheme() {
    if (localStorage.getItem('theme') == '') {
      self.setTheme('light');
      $timeout(()=>{
        self.currentTheme = 'light';
      })
    } else {
      self.setTheme(localStorage.getItem('theme'));
    }
  }
  self.setFontSize = function(size) {
    if (size == '12') {
      localStorage.setItem('font-size', size);
      self.currentFont = '12';
      $('*').addClass('font-12');
      $('*').removeClass('font-14');
      $('*').removeClass('font-16');
      $('*').removeClass('font-18');
      $('*').removeClass('font-20');
    }
    if (size == '14') {
      localStorage.setItem('font-size', size);
      self.currentFont = '14';
      $('*').addClass('font-14');
      $('*').removeClass('font-12');
      $('*').removeClass('font-16');
      $('*').removeClass('font-18');
      $('*').removeClass('font-20');
    }
    if (size == '16') {
      localStorage.setItem('font-size', size);
      self.currentFont = '16';
      $('*').addClass('font-16');
      $('*').removeClass('font-14');
      $('*').removeClass('font-12');
      $('*').removeClass('font-18');
      $('*').removeClass('font-20');
    }
    if (size == '18') {
      localStorage.setItem('font-size', size);
      self.currentFont = '18';
      $('*').addClass('font-18');
      $('*').removeClass('font-14');
      $('*').removeClass('font-16');
      $('*').removeClass('font-12');
      $('*').removeClass('font-20');
    }
    if (size == '20') {
      localStorage.setItem('font-size', size);
      self.currentFont = '20';
      $('*').addClass('font-20');
      $('*').removeClass('font-14');
      $('*').removeClass('font-16');
      $('*').removeClass('font-18');
      $('*').removeClass('font-12');
    }
    
  }
  function loadFontSize() {
    if (localStorage.getItem('font-size') == '') {
      self.setFontSize('14');
      $timeout(()=>{
        self.currentFont = '14';
      })
    } 
    else {
      self.setFontSize(localStorage.getItem('font-size'));
    }
  }
  self.openSetting = function() {
    let settingDialog = ngDialog.open({
      template: 'settingDialog',
      className: 'i2g-ngdialog',
      showClose: true,
      scope: $scope,
    });
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