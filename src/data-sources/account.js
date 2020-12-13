const { RESTDataSource } = require('apollo-datasource-rest');

class Account extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ACCOUNTS_SERVICE;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async list() {
    return this.get('account');
  }

  async show(id) {
    return this.get(`account/${id}`);
  }

  async update(body) {
    const { id, ...fields } = body;
    return this.put(`account/${id}`, fields);
  }
}

module.exports = Account;
