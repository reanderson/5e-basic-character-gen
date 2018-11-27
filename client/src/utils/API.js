import axios from 'axios';

export default {
  /* loginCreds = {username: "alex", "password": 12345Password!} */
  login: function(loginCreds) {
    return axios.post('/api/users/login', loginCreds)
  },
  /* Path to check if user is logged in */
  loginCheck: function() {
    return axios.get('/api/users/login')
  },
  /*  Path to log out  */
  logout: function() {
    return axios.get('/api/users/logout')
  },
  /* Path to register new user, you can have more fields than this but "username" and "password" must exist
    */
  register: function(userInfo) {
    return axios.post("/api/users/register", userInfo)
  },

  makeChar: function(charData) {
    return axios.post("/api/characters", charData)
  },

  getChars: function(filter) {
    return axios.get("/api/characters", {params: filter})
  },

  getCharById: function(id) {
    return axios.get(`/api/characters/${id}`)
  },

  updateChar: function(id, charData) {
    return axios.put(`/api/characters/${id}`, charData)
  }
}