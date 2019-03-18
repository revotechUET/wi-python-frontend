/**
 * 
 * @param {String} funcName 
 * @param {Array<String>} paramNames 
 * @param {String} url
 * @returns {String}
 */
export function generateTemplateApi(funcName, paramNames, url) {

  const listParamsInFunc = paramNames.join(', ')
  const dataForPayLoad = paramNames
    .map(param => `"${param}": str(${param})`)
    .join(',\n    ')

  return `

def ${funcName}(${listParamsInFunc}):
  import requests
  
  url = '${url}'
  payload = {
    ${dataForPayLoad}
  }
  r = requests.post(url, json=payload, verify=False)
  return r.json()`
}