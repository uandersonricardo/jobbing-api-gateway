const { gql } = require('apollo-server-express');

const mutation = gql`
  type Mutation {
    login(email: String!, password: String!): String
    register(
      name: String!
      email: String!
      password: String!
      photo: String
      bio: String!
      city: String!
      state: String!
      country: String!
      company: CompanyInput
      applicant: ApplicantInput
    ): String
    forgotPassword(email: String!): String
    resetPassword(token: String!, email: String!, password: String!): String
    update(
      id: String!
      name: String
      email: String
      password: String
      photo: String
      bio: String
      city: String
      state: String
      country: String
      company: CompanyInput
      applicant: ApplicantInput
    ): Account
  }

  input ApplicantInput {
    birthday: String
    gender: String
    maritalStatus: String
    educationLevel: String
    salaryExpectation: Float
    areaOfInterest: String
  }

  input CompanyInput {
    sector: String
    size: Int
    foundation: String
  }
`;

module.exports = mutation;
