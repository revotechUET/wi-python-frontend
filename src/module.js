import angular from 'angular'

import app from './app'
import sidebar from './sidebar'
import fElement from './f-element'
import terminal from './terminal'
import explorer from './explorer'
import modalIcon from './modal-icon'
import tooltipIcon from './tooltip-icon'
import tools from './tools'


import * as config from './_config'
import * as projectApi from './_project-api'
import * as request from './_request'
import * as alertMessage from './_alert-message'
import * as emptyArray from './_empty-array'
import * as mime from './_mime'
import * as browserCodeRunner from './_browser-code-runner'
import * as funcGen from './_func-gen'
// import * as htmlContentLoaderApi from './_html-content-loader-api'

const moduleName = 'online-editor-client'
const dependencies = []
const renderComponent = '<app></app>'
// const renderComponent = '<toolbar></toolbar>'

angular.module(moduleName, dependencies)
  .component(app.name, app.options)
  .component(sidebar.name, sidebar.options)
  .component(fElement.name, fElement.options)
  .component(terminal.name, terminal.options)
  .component(explorer.name, explorer.options)
  .component(modalIcon.name, modalIcon.options)
  .component(tooltipIcon.name, tooltipIcon.options)
  .component(tools.name, tools.options)
  .filter(emptyArray.name, emptyArray.filter)
  .service(config.name, config.service)
  .service(projectApi.name, projectApi.service)
  .service(request.name, request.service)
  .service(alertMessage.name, alertMessage.service)
  .service(mime.name, mime.service)
  .service(browserCodeRunner.name, browserCodeRunner.service)
  .service(funcGen.name, funcGen.service)
  

export default renderComponent