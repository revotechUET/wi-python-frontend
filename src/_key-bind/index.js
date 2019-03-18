export const name = 'keyBind'

service.$inject = ['$window']
export function service($window) {

  const ENTER_CODE = 13


  function onEnterPress(cb) {
    $window.addEventListener('keyup', function(e) {
      e.preventDefault()

      if(e.keyCode === ENTER_CODE) cb()
    })
  }


  return {
    onEnterPress
  }
}