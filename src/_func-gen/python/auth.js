export function login(rootUrl) {
  return `
  
def login(username, password):
  '''Login function via api'''
  import requests

  url = '${rootUrl}/login'
  payload = {
    "username": username,
    "password": password
  }

  r = requests.post(url, data=payload, json=True, verify=False)
  print(r.text)
`
}