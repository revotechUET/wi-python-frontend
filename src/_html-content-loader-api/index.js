export const name = 'htmlContentLoaderApi'

service.$inject = ['request', 'config', '$q']
export function service(request, config, $q) {

  const load = (project, file) => {
    const url = `${config.HOST}/html-src/load?`
      + `project=${encodeURIComponent(project)}&`
      + `file=${encodeURIComponent(file)}`

    return request.get(url)
  }

  const multipleLoad = (project, files) => {
    return $q.all(
      files.map(f => load(project, f))
    )
  }

  return {
    load,
    multipleLoad
  }
}