import angular from 'angular'

import app from './app'
import sidebar from './sidebar'
import fElement from './f-element'

const moduleName = 'online-editor-client'
const dependencies = []
const renderComponent = '<app></app>'

angular.module(moduleName, dependencies)
  .component(app.name, app.options)
  .component(sidebar.name, sidebar.options)
  .component(fElement.name, fElement.options)


export default renderComponent