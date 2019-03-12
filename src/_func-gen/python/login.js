export default function template(rootUrl) {
  return `
  
def login(username, password):
  import requests

  url = 'https://users.i2g.cloud/login'
  payload = {
    "username": username,
    "password": password
  }

  r = requests.post(url, data=payload, json=True, verify=False)
  print(r.text)
`
}