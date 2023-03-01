const hospitalsData = require("./data/hospitals.json");

const { writeDB, readDB } = require("./utils/readWiteDB");

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");

const { PATH } = require("./constant/path");

const { typeModels } = require("./models/index");

let doctors = [];
let hospitals = [...hospitalsData];

const resolvers = {
  Query: {
    getDoctors: async () => {
      const newData = await readDB(PATH.DOCTOR_COLLECTION);

      doctors = newData;

      return doctors;
    },
    getHospitals: () => hospitals,
    getDoctor: (parent, args) => {
      return doctors.find((doctor) => doctor.id === args.id);
    },
    getHospital: (parent, args) => {
      return hospitals.find((hospital) => hospital.id === args.id);
    },
  },

  Mutation: {
    createHospital: (parent, args, context, info) => {
      const { name, img_url, raiting, description, address } = args;

      const newHospital = {
        id: Date.now().toString(),
        name,
        img_url,
        raiting,
        description,
        address,
      };

      hospitals.push(newHospital);
      return JSON.stringify(newHospital);
    },

    createDoctor: (parent, args, context, info) => {
      const { name, surname, img_url, raiting, description, active_passient } =
        args;

      const newDoctor = {
        id: Date.now().toString(),
        name,
        surname,
        img_url,
        raiting,
        description,
        active_passient,
      };

      writeDB(PATH.DOCTOR_COLLECTION, newDoctor);

      doctors.push(newDoctor);
      return JSON.stringify(newDoctor);
    },

    updateDoctor: (parent, args) => {
      const uptDoctorIndex = doctors.findIndex(
        (doctor) => doctor.id === args.id
      );

      doctors[uptDoctorIndex] = args;

      return args;
    },

    updateHospital: (parent, args) => {
      const uptHospitalIndex = hospitals.findIndex(
        (doctor) => doctor.id === args.id
      );

      hospitals[uptHospitalIndex] = args;

      return args;
    },

    deleteDoctor: (parent, args) => {
      const { id } = args;

      doctors = doctors.filter((doctor) => doctor.id !== id);

      return "OK";
    },

    deleteHospital: (parent, args) => {
      const { id } = args;

      hospitals = hospitals.filter((hospital) => hospital.id !== id);

      return "OK";
    },
  },
};

const server = new ApolloServer({ typeDefs: typeModels, resolvers });
const app = express();

app.use(cors());

server.start().then((res) => {
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log("Now browse to http://localhost:4000" + server.graphqlPath)
  );
});
