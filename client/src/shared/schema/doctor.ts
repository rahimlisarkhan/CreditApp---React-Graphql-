import { gql } from "@apollo/client";

export const GET_DOCTORS = gql`
  query Doctors {
    doctors {
      id
      name
      surname
      img_url
      raiting
      description
      active_passient
    }
  }
`;

export const GET_DOCTOR_ID = gql`
  query Query($getDoctorId: ID!) {
    getDoctor(id: $getDoctorId) {
      id
      name
      surname
      img_url
      raiting
      description
      active_passient
    }
  }
`;

export const CREATE_DOCTOR = gql`
  mutation CreateDoctor(
    $name: String!
    $surname: String!
    $imgUrl: String!
    $raiting: Int!
    $description: String!
    $activePassient: Int!
  ) {
    createDoctor(
      name: $name
      surname: $surname
      img_url: $imgUrl
      raiting: $raiting
      description: $description
      active_passient: $activePassient
    )
  }
`;

export const UPDATE_DOCTOR = gql`
  mutation UpdateDoctor(
    $updateDoctorId: ID!
    $name: String!
    $surname: String!
    $imgUrl: String!
    $raiting: Int!
    $description: String!
    $activePassient: Int!
  ) {
    updateDoctor(
      id: $updateDoctorId
      name: $name
      surname: $surname
      img_url: $imgUrl
      raiting: $raiting
      description: $description
      active_passient: $activePassient
    )
  }
`;

export const REMOVE_DOCTOR = gql`
  mutation DeleteDoctor($deleteDoctorId: Int) {
    deleteDoctor(id: $deleteDoctorId)
  }
`;
