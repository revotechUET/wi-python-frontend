export const name = 'config'

export function service() {



  return {
    ONLINE_EDITOR_URL: window.__WI_PAAS_URL__ || 'http://localhost:3001',
    USER_RELATED_ROOT_URL: 'http://localhost:3000',
    PROJECT_RELATED_ROOT_URL: 'http://localhost:3000'
  }
}