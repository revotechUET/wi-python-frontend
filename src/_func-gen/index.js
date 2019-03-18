import { generateTemplateApi } from './gen-py-api'

export const name = 'funcGen'

service.$inject = ['config']
export function service(config) {


  const listFuncs = [
    {
      funcName: 'login',
      paramNames: ['username', 'password'],
      url: config.USER_RELATED_ROOT_URL + '/user/login'
    }, {
      funcName: 'list_project',
      paramNames: [],
      url: config.PROJECT_RELATED_ROOT_URL + '/project/list'
    }, {
      funcName: 'list_well_of_project',
      paramNames: ['idProject', 'start', 'limit', 'forward', 'match'],
      url: config.PROJECT_RELATED_ROOT_URL + '/project/well/list'
    }, {
      funcName: 'list_reference_curve',
      paramNames: [],
      url: config.PROJECT_RELATED_ROOT_URL + '/project/well/reference-curve/list'
    }, {
      funcName: 'get_curve_info',
      paramNames: ['idReferenceCurve'],
      url: config.PROJECT_RELATED_ROOT_URL + '/project/well/reference-curve/info'
    },
  ]

  function generateForPy(funcName) {

    const fnData = listFuncs.filter(fn => fn.funcName === funcName)[0]
    if (!fnData) return 'function name is not founded'

    return generateTemplateApi(fnData.funcName, fnData.paramNames, fnData.url)
  }

  return {
    generateForPy
  }

}