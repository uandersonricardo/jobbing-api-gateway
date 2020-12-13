const { RESTDataSource } = require('apollo-datasource-rest');

class Auth extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ACCOUNTS_SERVICE;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async login(body) {
    return this.post('auth/login', body);
  }

  async register(body) {
    return this.post('auth/register', body);
  }

  async validate() {
    return this.get('auth/validate');
  }

  async forgotPassword(body) {
    return this.post('auth/forgot-password', body);
  }

  async resetPassword(body) {
    return this.post('auth/reset-password', body);
  }
}

module.exports = Auth;
