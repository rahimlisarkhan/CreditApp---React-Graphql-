import { gql } from "@apollo/client";

export const GET_HOSPITALS = gql`
  query Query {
    getHospitals {
      id
      name
      img_url
      raiting
      description
      address
    }
  }
`;

export const GET_HOSPITAL_ID = gql`
  query Query($getHospitalId: ID!) {
    getHospital(id: $getHospitalId) {
      id
      name
      img_url
      raiting
      description
      address
    }
  }
`;

export const CREATE_HOSPITAL = gql`
  mutation Mutation(
    $name: String!
    $imgUrl: String!
    $description: String!
    $address: String!
    $raiting: Int
  ) {
    createHospital(
      name: $name
      img_url: $imgUrl
      description: $description
      address: $address
      raiting: $raiting
    )
  }
`;

export const UPDATE_HOSPITAL = gql`
  mutation Mutation(
    $updateHospitalId: ID!
    $name: String!
    $imgUrl: String!
    $description: String!
    $address: Int!
    $raiting: Int
  ) {
    updateHospital(
      id: $updateHospitalId
      name: $name
      img_url: $imgUrl
      description: $description
      address: $address
      raiting: $raiting
    ) {
      id
      name
      img_url
      raiting
      description
      address
    }
  }
`;

export const REMOVE_HOSPITAL = gql`
  mutation Mutation($deleteHospitalId: Int) {
    deleteHospital(id: $deleteHospitalId)
  }
`;
