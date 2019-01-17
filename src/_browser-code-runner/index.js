import jsRunner from './js-runner'

export const name = 'browserCodeRunner'

service.$inject = ['mime']
export function service(mime) {

  const execute = (fileName, code) => {
    const type = mime.getFileType(fileName)

    switch (type) {
      case mime.types.javascript: return jsRunner(code)
      case mime.types.html: return code
      case mime.types.css: return code

      default: return `do not support ${type}`
    }
  }



  return {
    execute
  }
}