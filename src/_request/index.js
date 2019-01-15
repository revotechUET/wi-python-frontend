export const name = 'request'


service.$inject = ['$http', '$q']
export function service($http, $q) {
  const get = url => $q((resolve, reject) => {
    $http.get(url)
      .then(resp => resolve(resp.data.data))
      .catch(error => reject(error.data.message))
  })

  return {
    get
  }
}