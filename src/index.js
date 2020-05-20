// import './vendors/bootstrap/bootstrap.min.css'
import './vendors/toolbar/toolbar.css'
import './vendors/toolbar/toolbar'
import assignAppModule from './module'

const moduleName = 'online-editor-client'
// const loginUrl = "https://users.i2g.cloud/login";
const baseUrl = "https://users.i2g.cloud";
localStorage.setItem("BASE_URL", baseUrl);
// window.__WI_PAAS_URL__ = "https://python.i2g.cloud";
// const renderComponent = `<browser base-url="${baseUrl}" login-url="${loginUrl}"></browser>`;
const renderComponent = `<browser></browser>`;
// import '../public/css/niffty.min.css'
if (process.env.NODE_ENV === 'development') { // eslint-disable-line no-undef
    
    //const angular = require('angular')
    assignAppModule(angular, moduleName)
    document.getElementById('root-app').innerHTML = renderComponent

} else {
    //const angular = window.angular
    assignAppModule(angular, moduleName)
}


