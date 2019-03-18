import template from './template.html'

const name = 'browser'

controller.$inject = ['auth']
function controller(auth) {
  const self = this

  self.$onInit = function() {
    initState()

    auth.onLogin(err => {
      if(!err) self.isLogin = auth.isLogin()
    })

    auth.onLogout(() => self.isLogin = auth.isLogin())
  }

  function initState() {
    
    self.isLogin = auth.isLogin()
  }
}

export default {
  name,
  options: {
    bindings: {
    },
    template,
    controller,
    controllerAs: 'self'    
  }
}