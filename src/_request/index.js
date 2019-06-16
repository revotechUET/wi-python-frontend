export const name = 'request'


service.$inject = ['$http', '$q']
export function service($http, $q) {
  const get = url => $q((resolve, reject) => {
    $http.get(url)
      .then(resp => resp.data.data ? resolve(resp.data.data) : resolve(resp.data))
      .catch(error => {
	      if (error.status !== 401) {
		      if (error.data) reject(error.data.message)
		      else if (error.message) reject(error.message)
		      else if (error.statusText) reject(error.statusText)
		      else reject('Error in connection')
	      } else {
		      localStorage.removeItem('token');
		      window.location.href = window.location.origin
	      }
      })
  })

  const post = (url, data) => $q((resolve, reject) => {
    $http.post(url, data)
      .then(resp => resp.data.data ? resolve(resp.data.data) : resolve(resp.data))
      .catch(error => {
      	console.log("ERR NA",error)
	      if (error.status !== 401) {
		      if (error.data) reject(error.data.message)
		      else if (error.message) reject(error.message)
		      else if (error.statusText) reject(error.statusText)
		      else reject('Error in connection')
	      } else {
		      localStorage.removeItem('token');
		      window.location.href = window.location.origin
	      }
      })
  })

  return {
    get,
    post
  }
}