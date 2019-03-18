export const name = 'projectApi'

service.$inject = ['config', 'request']
export function service(config, request) {

  const newProject = name => {
    const url = `${config.ONLINE_EDITOR_URL}/project/new?name=${encodeURIComponent(name)}`
    return request(url)
  }

  const openProject = name => {
    const url = `${config.ONLINE_EDITOR_URL}/project/open?name=${encodeURIComponent(name)}`
    return request.get(url)
  }

  const openFile = dir => {
    const url = `${config.ONLINE_EDITOR_URL}/project/read-file?dir=${encodeURIComponent(dir)}`
    return request.get(url)
  }

  const openFolder = dir => {
    const url = `${config.ONLINE_EDITOR_URL}/project/read-folder?dir=${encodeURIComponent(dir)}`
    return request.get(url)
  }

  const listProjects = () => {
    const url = `${config.ONLINE_EDITOR_URL}/project/list`
    return request.get(url)
  }

  const runCode = (fileName, project) => {
    const url = `${config.ONLINE_EDITOR_URL}/code-runner/?file=${encodeURIComponent(fileName)}&project=${encodeURIComponent(project)}`
    return request.get(url)
  }

  const saveCode = (project, fileName, code) => {
    const url = `${config.ONLINE_EDITOR_URL}/code-action/save`
    const data = {
      project,
      fileName,
      code
    }

    return request.post(url, data)
  }

  const login = (username, password) => {
    const url = `${config.USER_RELATED_ROOT_URL}/user/login`
    const data = {
      username,
      password
    }

    return request.post(url, data)
  }

  return {
    newProject,
    openProject,
    openFile,
    openFolder,
    listProjects,
    runCode,
    saveCode,
    login
  }

}