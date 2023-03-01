const { gql } = require("apollo-server-express");

const typeModels = gql`
  type Doctor {
    id: ID!
    name: String!
    surname: String!
    img_url: String!
    raiting: String
    description: String!
    active_passient: String
  }

  type Hospitals {
    id: ID!
    name: String!
    img_url: String!
    raiting: String
    description: String!
    address: String!
  }

  type Query {
    getDoctors: [Doctor]!
    getHospitals: [Hospitals]!
    getDoctor(id: ID!): Doctor!
    getHospital(id: ID!): Hospitals!
  }

  type Mutation {
    createDoctor(
      name: String!
      surname: String!
      img_url: String!
      raiting: Int!
      description: String!
      active_passient: Int!
    ): String

    createHospital(
      name: String!
      img_url: String!
      raiting: Int
      description: String!
      address: String!
    ): String

    updateDoctor(
      id: ID!
      name: String!
      surname: String!
      img_url: String!
      raiting: Int!
      description: String!
      active_passient: Int!
    ): Doctor!

    updateHospital(
      id: ID!
      name: String!
      img_url: String!
      raiting: Int
      description: String!
      address: Int!
    ): Hospitals!

    deleteDoctor(id: Int): String
    deleteHospital(id: Int): String
  }
`;

module.exports = { typeModels };
