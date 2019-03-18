export const name = 'keyBind'

service.$inject = []
export function service() {

  const ENTER_CODE = 13


  function onEnterPress(jsSelector,cb) {
    
    document.querySelector(jsSelector).addEventListener('keyup', e => {
      e.preventDefault()

      if(e.keyCode === ENTER_CODE) cb()
    })
  }


  return {
    onEnterPress
  }
}