// import jsRunner from './js-runner'
// import htmlRunner from './html-runner'

export const name = 'browserCodeRunner'

service.$inject = ['mime', 'config', 'projectApi']
export function service(mime, config, projectApi) {

  const HOST = config.HOST

  const render = code => {
    console.log({code})
    // let renderVal = ''
    // const execMarker = '<span style="color:green;margin-right: 25px">></span>'
    // const errorMarker = '<span style="color:red;margin-right: 25px">></span>'
    // const br = '<br/>'
    // for (const attr in console) {
    //   console[attr] = val => renderVal += (execMarker + val + br)
    // }



    // //run code
    // try {
    //   eval(code)
    // } catch (error) {
    //   renderVal += (errorMarker + `<span style="color:red">${error.name}</span>` + br)
    //   renderVal += (errorMarker + `<span style="color:red">${error.message}</span>` + br)
    //   renderVal += (execMarker + execMarker)
    // }

    let renderVal = ''
    const execMarker = '<span style="color:green;margin-right: 25px">></span>'
    const errorMarker = '<span style="color:red;margin-right: 25px">></span>'
    const br = '<br/>'

    for (const { line, error } of code) {
      const msg = error ?
        (errorMarker + `<span style="color:red">${line}</span>` + br) :
        (execMarker + line + br)

      renderVal += msg
    }

    return renderVal
  }

  const execute = (project, fileName, callback) => {
    const type = mime.getFileType(fileName)
    if (type === mime.types.html) {
      const link = `${HOST}/${project}/${fileName}`
      return callback({ type, link })
    }

    if (type === mime.types.python || type === mime.types.javascript) {
      return projectApi.runCode(fileName, project)
        .then(data => render(data))
        .then(render => callback({ type, render }))
        .catch(msg => console.error(msg))
    }

    return callback({
      type,
      render: `file .${type} is not supported `
    })
  }



  return {
    execute
  }
}