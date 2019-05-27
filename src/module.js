// import angular from 'angular'

import app from './app'
import sidebar from './sidebar'
import fElement from './f-element'
import terminal from './terminal'
import explorer from './explorer'
import modalIcon from './modal-icon'
import tooltipIcon from './tooltip-icon'
import tools from './tools'
import browser from './browser'
import loginPage from './login-page'

// import * as config from './_config'
import * as projectApi from './_project-api'
import * as request from './_request'
import * as alertMessage from './_alert-message'
import * as emptyArray from './_empty-array'
import * as mime from './_mime'
import * as browserCodeRunner from './_browser-code-runner'
import * as funcGen from './_func-gen'
import * as auth from './_auth'
import * as keyBind from './_key-bind'
// import * as htmlContentLoaderApi from './_html-content-loader-api'

// const moduleName = 'online-editor-client'

// // const renderComponent = '<app></app>'
// const renderComponent = '<browser></browser>'


export default function assignAppModule(angular, moduleName) {
	const dependencies = ['sideBar', 'wiTreeView', 'wiLogin', 'wiDroppable', 'wiLoading', 'logStream']

	angular.module(moduleName, dependencies)
		.component(app.name, app.options)
		.component(sidebar.name, sidebar.options)
		.component(fElement.name, fElement.options)
		.component(terminal.name, terminal.options)
		.component(explorer.name, explorer.options)
		.component(modalIcon.name, modalIcon.options)
		.component(tooltipIcon.name, tooltipIcon.options)
		.component(tools.name, tools.options)
		.component(browser.name, browser.options)
		.component(loginPage.name, loginPage.options)
		.filter(emptyArray.name, emptyArray.filter)
		// .service(config.name, config.service)
		.service(projectApi.name, projectApi.service)
		.service(request.name, request.service)
		.service(alertMessage.name, alertMessage.service)
		.service(mime.name, mime.service)
		.service(browserCodeRunner.name, browserCodeRunner.service)
		.service(funcGen.name, funcGen.service)
		.service(auth.name, auth.service)
		.service(keyBind.name, keyBind.service)
		.config(function ($locationProvider) {
			$locationProvider.html5Mode(true).hashPrefix('!');
		})
		.value('config', {
			logStreamWS: 'ws://localhost:3000',
			logStreamHTTP: 'http://localhost:3000',
			// ONLINE_EDITOR_URL: window.__WI_PAAS_URL__ || 'https://python.i2g.cloud' || 'http://localhost:3000',
			ONLINE_EDITOR_URL: 'http://localhost:3000',
			USER_RELATED_ROOT_URL: 'https://users.i2g.cloud/login',
			PROJECT_RELATED_ROOT_URL: 'https://api-1.i2g.cloud'
		})
}