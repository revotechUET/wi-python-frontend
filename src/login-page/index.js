import template from './template.html'

const name = 'loginPage'

controller.$inject = ['auth', 'alertMessage', 'keyBind']
function controller(auth, alertMessage, keyBind) {
  const self = this

  self.$onInit = function () {
    initState()

    keyBind.onEnterPress('.login-page',() => self.submitForm())
  }

  self.submitForm = function() {
    auth.login(self.username, self.password)
      .then(() => alertMessage.success('Login success'))
      .catch(err => alertMessage.error(err.message))
  }

  function initState() {
    self.username = ''
    self.password = ''
  }
}

export default {
  name,
  options: {
    bindings: {},
    template,
    controller,
    controllerAs: 'self'
  }
}