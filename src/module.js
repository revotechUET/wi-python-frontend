import angular from 'angular'

import app from './app'
import sidebar from './sidebar'
import fElement from './f-element'
import terminal from './terminal'
import explorer from './explorer'

const moduleName = 'online-editor-client'
const dependencies = []
const renderComponent = '<app></app>'

angular.module(moduleName, dependencies)
  .component(app.name, app.options)
  .component(sidebar.name, sidebar.options)
  .component(fElement.name, fElement.options)
  .component(terminal.name, terminal.options)
  .component(explorer.name, explorer.options)


export default renderComponent