import jsRunner from './js-runner'
import htmlRunner from './html-runner'

export const name = 'browserCodeRunner'

service.$inject = ['mime', 'htmlContentLoaderApi']
export function service(mime, htmlContentLoaderApi) {
  const execute = (project,fileName, code, cb) => {
    const type = mime.getFileType(fileName)

    switch (type) {
      case mime.types.javascript: return cb(null,jsRunner(code))
      case mime.types.html: return htmlRunner(project,code, htmlContentLoaderApi, cb)
      case mime.types.css: return code

      default: return `do not support ${type}`
    }
  }



  return {
    execute
  }
}