export const name = 'funcGen'

service.$inject = ['mime']
export function service(mime) {

  function generateForFile(fileName) {
    const type = mime.getFileType(fileName)
    if(type === mime.types.javascript) return jsFunc()
    if(type === mime.types.python) return pyFunc()
  
    return `/*doesn't support this type*/`
  }
  
  function jsFunc() {
    return `
//auto generate function
function someFunction(params) {
  return true
}

`
  }
  
  function pyFunc() {
    return `
#auto generate function
def someFunction(params):
  return True

`
  }

  return {
    generateForFile
  }
  
}