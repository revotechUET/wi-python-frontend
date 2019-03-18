import template from './template.html'

const name = 'browser'

controller.$inject = ['auth']
function controller(auth) {
  const self = this

  self.$onInit = function() {
    initState()

    auth.onLogin(err => {
      if(!err) self.isLogin = true
    })

    auth.onLogout(() => self.isLogin = false)
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