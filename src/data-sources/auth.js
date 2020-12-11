const { RESTDataSource } = require('apollo-datasource-rest');

class Auth extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4001/';
  }

  async login(body) {
    return this.post('auth/login', body);
  }

  async register(body) {
    return this.post('auth/register', body);
  }
}

module.exports = Auth;
