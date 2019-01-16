import angular from 'angular'
import 'angular-modal-service/dst/angular-modal-service'

import app from './app'
import sidebar from './sidebar'
import fElement from './f-element'
import terminal from './terminal'
import explorer from './explorer'

import * as config from './_config'
import * as project from './_project'
import * as request from './_request'


const moduleName = 'online-editor-client'
const dependencies = ['angularModalService']
const renderComponent = '<app></app>'

angular.module(moduleName, dependencies)
  .component(app.name, app.options)
  .component(sidebar.name, sidebar.options)
  .component(fElement.name, fElement.options)
  .component(terminal.name, terminal.options)
  .component(explorer.name, explorer.options)
  .service(config.name, config.service)
  .service(project.name, project.service)
  .service(request.name, request.service)

export default renderComponent