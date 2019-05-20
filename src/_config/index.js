export const name = 'config'

export function service() {



  return {
    ONLINE_EDITOR_URL: window.__WI_PAAS_URL__ || 'https://python.i2g.cloud' || 'http://localhost:3000',
    //USER_RELATED_ROOT_URL: 'http://localhost:3000',
    USER_RELATED_ROOT_URL: 'https://users.i2g.cloud/login',
    PROJECT_RELATED_ROOT_URL: 'https://api-1.i2g.cloud'
  }
}
