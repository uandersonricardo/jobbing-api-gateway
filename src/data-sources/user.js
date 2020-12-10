const { RESTDataSource } = require('apollo-datasource-rest');

class User extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4001/';
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getUsers() {
    return this.get('user/list');
  }
}

module.exports = User;
