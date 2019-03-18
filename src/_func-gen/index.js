import { generateTemplateApi } from './gen-py-api'

export const name = 'funcGen'

service.$inject = ['config']
export function service(config) {


  const listFuncs = [
    {
      funcName: 'login',
      paramNames: ['username', 'password']
    }, {
      funcName: 'list_project',
      paramNames: []
    }, {
      funcName: 'list_well_of_project',
      paramNames: ['idProject', 'start', 'limit', 'forward', 'match']
    }, {
      funcName: 'list_reference_curve',
      paramNames: []
    }, {
      funcName: 'get_curve_info',
      paramNames: ['idReferenceCurve']
    },
  ]

  function generateForPy(funcName) {

    const fnData = listFuncs.filter(fn => fn.funcName === funcName)[0]
    if (!fnData) return 'function name is not founded'

    return generateTemplateApi(fnData.funcName, fnData.paramNames)
  }

  return {
    generateForPy
  }

}