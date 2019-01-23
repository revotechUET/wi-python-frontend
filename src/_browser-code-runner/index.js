import jsRunner from './js-runner'
import htmlRunner from './html-runner'

export const name = 'browserCodeRunner'

service.$inject = ['mime', 'config']
export function service(mime, config) {

  const HOST = config.HOST

  const execute = (project, fileName, code) => {
    const type = mime.getFileType(fileName)

    switch (type) {
      case mime.types.javascript: return {
        type,
        render: jsRunner(code)
      }
      case mime.types.html: return {
        type,
        link: htmlRunner(HOST, project, fileName)
      }
      // case mime.types.css: return code

      default: return {
        type,
        render: `do not support ${type}`
      }
    }
  }



  return {
    execute
  }
}