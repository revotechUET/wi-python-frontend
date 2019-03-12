import * as pyGen from './python'

export const name = 'funcGen'

service.$inject = ['config']
export function service(config) {


  const LIST_ACCEPTED_TYPE = {
    LOGIN: 'login',
    PROJECT_LIST: 'project/list'
  }

  function generateForPy(type) {

    switch (type){

      case LIST_ACCEPTED_TYPE.LOGIN:
        return pyGen.auth.login(config.USER_RELATED_ROOT_URL)


      default: 
        return '# NOT SUPPORTED'
    }

  }

  return {
    generateForPy
  }
  
}