

export const name = 'request'


service.$inject = ['$http', '$q', 'config']
export function service($http, $q, config) {
  const get = url => $q((resolve, reject) => {
	// $http.get(url)
	$http({
		method: 'GET',
		url: url,
		headers: {
			'WHOAMI': config.WHOAMI
		}
	})
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
	// $http.post(url, data)
	$http({
		method: 'POST',
		url: url,
		headers: {
			'WHOAMI': config.WHOAMI
		},
		data: data
	})
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