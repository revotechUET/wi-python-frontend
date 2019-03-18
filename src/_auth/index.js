export const name = 'auth'

service.$inject = ['projectApi', '$rootScope']
export function service(projectApi, $rootScope) {


  const LOGIN_SUCCESS_EVENT = name + '.LOGIN_SUCCESS_EVENT'
  const LOGIN_FAILED_EVENT = name + '.LOGIN_FAILED_EVENT'
  const LOGOUT_SUCCESS_ENVENT = name + '.LOGOUT_SUCCESS_ENVENT'
  const JWT_TOKEN_KEY = 'JWT_TOKEN'


  function login(username, password) {
    return projectApi
      .login(username, password)
      .then(resp => {
        if (resp.code !== 200) throw new Error(resp.reason)
        const { token } = resp.content
        window.localStorage.setItem(JWT_TOKEN_KEY, token)
        $rootScope.$emit(LOGIN_SUCCESS_EVENT)
      })
      .catch(err => {
        // alertMessage.error(err.message)
        $rootScope.$emit(LOGIN_FAILED_EVENT, err.message)
        throw err
      })
  }


  function logout() {
    window.localStorage.removeItem(JWT_TOKEN_KEY)
    $rootScope.$emit(LOGOUT_SUCCESS_ENVENT)
  }


  function onLogin(cb) {
    $rootScope.$on(LOGIN_SUCCESS_EVENT, (e, data) => cb(null))
    $rootScope.$on(LOGIN_FAILED_EVENT, (e, message) => cb(message))
  }


  function onLogout(cb) {
    $rootScope.$on(LOGOUT_SUCCESS_ENVENT, e => cb())
  }


  function isLogin() {
    return !!window.localStorage.getItem(JWT_TOKEN_KEY)
  }

  return {
    login,
    logout,
    onLogin,
    onLogout,
    isLogin
  }
}