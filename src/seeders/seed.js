const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const UsersCourses = require("../models/users.courses.models");
const Users = require("../models/users.models");
const Videos = require("../models/videos.models");
const db = require("../utils/database");

const users = [
  {
    firstName: "Diego",
    lastName: "cantillo",
    email: "diego@gmail.com",
    password: "1234",
  },
  {
    firstName: "Jhorman",
    lastName: "nieto",
    email: "jhosmita@gmail.com",
    password: "1234",
  },
  {
    firstName: "pepito",
    lastName: "perez",
    email: "pepito@gmail.com",
    password: "1234",
  },
];

const usersCourses = [
  { userId: 1, courseId: 2 },
  { userId: 2, courseId: 2 },
  { userId: 2, courseId: 3 },
  { userId: 3, courseId: 3 },
];

const courses = [
  {
    title: "Node.js",
    description: "principios basicos de node",
    instructor: "Ian Rosales",
  },
  {
    title: "ReactJs",
    description: "principios basicos de node",
    instructor: "Daniel quintero",
  },
  {
    title: "desarrollo full stack",
    description: "duracion de 8meses",
    instructor: "Luis Cantillo",
  },
];

const categories = [
  { name: "facil" },
  { name: "intermedio" },
  { name: "avanzado" }
]

const videos = [
  {
    title: "fundamentos",
    url: "http:fundajs/ed.com",
    courseId: 1
  },
  {
    title: "react",
    url: "http:fundajs/ed.com",
    courseId: 2
  },
  {
    title: "nodeJs",
    url: "http:fundajs/ed.com",
    courseId: 3
  }
]

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando seeding")
    users.forEach(user => Users.create(user));
    setTimeout(() => {
      courses.forEach(course => Courses.create(course));
    }, 100);
    setTimeout(() => {
      videos.forEach(video => Videos.create(video));
    }, 200);
    setTimeout(() => {
      categories.forEach(category => Categories.create(category));
    }, 300);
    setTimeout(() => {
      usersCourses.forEach(uc => UsersCourses.create(uc));
    }, 500);
  })
  .catch(error => console.log(error));