import template from './template.html'
import './style.scss'

const name = 'fElement'

controller.$inject = []
function controller() {
  const self = this
  self.$onInit = function () {
    initState()
  }

  // self.getBadge = function () {
  //   if (self.rootIsFile) return 'button switch center_docu'

  //   let numChildren = 0

  //   if (self.files && self.files.length)
  //     numChildren += self.files.length
  //   if (self.folders && self.folders.length)
  //     numChildren += self.folders.length

  //   return numChildren && self.showChild ?
  //     'button switch roots_open' :
  //     'button switch center_close'
  // }

  self.getBadge = function () {
    if (self.rootIsFile) return 'button switch center_docu'

    return self.showChild ?
      'button switch roots_open' :
      'button switch center_close'
  }

  

  // self.getIcon = function () {
  //   if (self.rootIsFile) return 'button ico_docu'

  //   let numChildren = 0

  //   if (self.files && self.files.length)
  //     numChildren += self.files.length
  //   if (self.folders && self.folders.length)
  //     numChildren += self.folders.length

  //   return numChildren && self.showChild ?
  //     'button ico_open' :
  //     'button ico_close'
  // }

  self.getIcon = function () {
    if (self.rootIsFile) return 'button ico_docu'

    return self.showChild ? 'button ico_open' : 'button ico_close'
  }

  self.toggleShowChild = function () {
    self.showChild = !self.showChild
  }

  self.open = function () {
    if (self.rootIsFile) self.openFile(self.path)
    else {
      self.showChild = true
      // if (!(self.files.length + self.folders.length)) self.openFolder(self.path)
      self.openFolder(self.path)
    }
  }

  function initState() {
    self.showChild = false
  }
}

export default {
  name,
  options: {
    bindings: {
      rootName: '<',
      rootIsFile: '<',
      files: '<',
      folders: '<',
      path: '<',
      openFile: '<',
      openFolder: '<'
    },
    template,
    controller,
    controllerAs: 'self'
  }
}