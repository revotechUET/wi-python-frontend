import angular from 'angular'

import app from './app'
import sidebar from './sidebar'
import fElement from './f-element'
import terminal from './terminal'
import explorer from './explorer'
import modal from './modal'

import * as config from './_config'
import * as project from './_project'
import * as request from './_request'
import * as alertMessage from './_alert-message'


const moduleName = 'online-editor-client'
const dependencies = []
const renderComponent = '<app></app>'
// const renderComponent = '<modal></modal>'

angular.module(moduleName, dependencies)
  .component(app.name, app.options)
  .component(sidebar.name, sidebar.options)
  .component(fElement.name, fElement.options)
  .component(terminal.name, terminal.options)
  .component(explorer.name, explorer.options)
  .component(modal.name, modal.options)
  .service(config.name, config.service)
  .service(project.name, project.service)
  .service(request.name, request.service)
  .service(alertMessage.name, alertMessage.service)

export default renderComponent