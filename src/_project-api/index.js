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

  const deleteProject = name => {
    const url = `${config.ONLINE_EDITOR_URL}/project/delete?name=${encodeURIComponent(name)}`
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
    const user = getUsername()
    const url = `${config.ONLINE_EDITOR_URL}/project/list?user=${user}`
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

  // const removeFile = (project, file) => {
  //   const url = `${config.ONLINE_EDITOR_URL}/file-sys/remove-file?project=${project}&file=${encodeURIComponent(file)}`
  //   return request.get(url)
  // }

  const removeItem = (project, item) => {
    const url = `${config.ONLINE_EDITOR_URL}/file-sys/remove-folder?project=${project}&folder=${encodeURIComponent(item)}`
    return request.get(url)
  }

  const newFile = (project, file) => {
    const url = `${config.ONLINE_EDITOR_URL}/file-sys/new-file?project=${project}&file=${encodeURIComponent(file)}`
    return request.get(url)
  }

  const newFolder = (project, folder) => {
    const url = `${config.ONLINE_EDITOR_URL}/file-sys/new-folder?project=${project}&folder=${encodeURIComponent(folder)}`
    return request.get(url)
  }

  function getUsername() {
    const token = window.localStorage.getItem('JWT_TOKEN')
    if (!token) throw new Error('token is emtpy')

    const decoded = JSON.parse(atob(token.split('.')[1]))
    return decoded.username
  }

  return {
    newProject,
    openProject,
    deleteProject,
    openFile,
    openFolder,
    listProjects,
    runCode,
    saveCode,
    login,
    // removeFile,
    removeItem,
    newFile,
    newFolder
  }

}