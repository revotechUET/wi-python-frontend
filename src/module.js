import angular from 'angular'

import app from './app'
import sidebar from './sidebar'
import fElement from './f-element'
import terminal from './terminal'
import explorer from './explorer'
import modal from './modal'


import * as config from './_config'
import * as projectApi from './_project-api'
import * as request from './_request'
import * as alertMessage from './_alert-message'
import * as emptyArray from './_empty-array'
import * as mime from './_mime'
import * as browserCodeRunner from './_browser-code-runner'

const moduleName = 'online-editor-client'
const dependencies = []
const renderComponent = '<app></app>'

angular.module(moduleName, dependencies)
  .component(app.name, app.options)
  .component(sidebar.name, sidebar.options)
  .component(fElement.name, fElement.options)
  .component(terminal.name, terminal.options)
  .component(explorer.name, explorer.options)
  .component(modal.name, modal.options)
  .filter(emptyArray.name, emptyArray.filter)
  .service(config.name, config.service)
  .service(projectApi.name, projectApi.service)
  .service(request.name, request.service)
  .service(alertMessage.name, alertMessage.service)
  .service(mime.name, mime.service)
  .service(browserCodeRunner.name, browserCodeRunner.service)
  

export default renderComponent