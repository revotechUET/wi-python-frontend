export const name = 'config'

export function service() {



  return {
    ONLINE_EDITOR_URL: window.__WI_PAAS_URL__ || 'http://python.dev.i2g.cloud' || 'http://localhost:3000',
    //USER_RELATED_ROOT_URL: 'http://localhost:3000',
    USER_RELATED_ROOT_URL: 'http://admin.dev.i2g.cloud',
    PROJECT_RELATED_ROOT_URL: 'http://dev.i2g.cloud'
  }
}
