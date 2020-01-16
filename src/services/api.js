import axios from 'axios'
const BASE_URL = 'https://api.github.com'

const fetchUsername = username => {
  const URL = `${BASE_URL}/users/${username}`

  return axios
    .get(URL)
    .then(response => response.data)
    .catch(error => Promise.reject(error))
}

const fetchUserRepository = usesrname => {
  const URL = `${BASE_URL}/users/${usesrname}/repos?sort=updated`
  return axios
    .get(URL)
    .then(response => response.data)
    .catch(error => Promise.reject(error))
}

const searchUsername = username => {
  const URL = `${BASE_URL}/search/users?q=${username}`
  return axios
    .get(URL)
    .then(response => response.data)
    .catch(error => Promise.reject(error))
}

export default {
  fetchUsername,
  fetchUserRepository,
  searchUsername
}
