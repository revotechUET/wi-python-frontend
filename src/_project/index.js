export const name = 'project'

service.$inject = ['config', 'request']
export function service(config, request) {

  const newProject = name => {
    const url = `${config.HOST}/project/new?name=${encodeURIComponent(name)}`
    return request(url)
  }

  const openProject = name => {
    const url = `${config.HOST}/project/open?name=${encodeURIComponent(name)}`
    return request.get(url)
  }

  const openFile = dir => {
    const url = `${config.HOST}/project/read-file?dir=${encodeURIComponent(dir)}`
    return request.get(url)
  }

  const openFolder = dir => {
    const url = `${config.HOST}/project/read-folder?dir=${encodeURIComponent(dir)}`
    return request.get(url)
  }

  const listProjects = () => {
    const url = `${config.HOST}/project/list`
    return request.get(url)
  }

  return {
    newProject,
    openProject,
    openFile,
    openFolder,
    listProjects
  }

}