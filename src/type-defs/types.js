const { gql } = require('apollo-server-express');

const types = gql`
  type Account {
    _id: ID!
    name: String!
    email: String!
    photo: String
    bio: String!
    city: String!
    state: String!
    country: String!
    _company: Company
    _applicant: Applicant
  }

  type Applicant {
    birthday: String!
    gender: String!
    maritalStatus: String!
    educationLevel: String!
    salaryExpectation: Float!
    areaOfInterest: String!
  }

  type Company {
    sector: String!
    size: Int!
    foundation: String!
  }
`;

module.exports = types;
