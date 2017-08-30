// Adapted from seed.js from Stackchat

const db = require('./db');
const User = require('./db/models/user');
const Campus = require('./db/models/campus');
const Student = require('./db/models/student');

const seedUsers = [
  { name: 'Daniel Ong' },
  { name: 'Geoff Bass' },
  { name: 'Gabriel Lebec' }
];

const seedCampuses = [
  { name: 'Jakarta', imageUrl: '/img/jakarta.jpg' },
  { name: 'Makassar', imageUrl: '/img/makassar.jpg' }
];

const id = () => Math.round(Math.random() * (seedCampuses.length - 1) + 1);

const seedStudents = [
  { campusId: id(), name: 'Derrick Beining', email: 'derrick@derrick.com' },
  { campusId: id(), name: 'Joseph Knoebel', email: 'joseph@joseph.com' },
  { campusId: id(), name: 'Sara Helba', email: 'sara@sara.com' },
  { campusId: id(), name: 'Jane Volin', email: 'jane@jane.com' },
  { campusId: id(), name: 'Daniel Ong', email: 'daniel@daniel.com' },
  { campusId: id(), name: 'William Shaw', email: 'william@william.com' },
  { campusId: id(), name: 'Antonio Pavicevac-Ortiz', email: 'antonio@antonio.com' },
  { campusId: id(), name: 'Robin Wilson', email: 'robin@robin.com' },
  { campusId: id(), name: 'Jessica Freasier', email: 'jessica@jessica.com' },
  { campusId: id(), name: 'SangWoo Kim', email: 'SangWoo@Kim.com' },
  { campusId: id(), name: 'Erik Shuttlesworth', email: 'Erik@Erik.com' },
  { campusId: id(), name: 'Jing Jia', email: 'Jing@Jia.com' }
];

const seed = () =>
  Promise.all(seedUsers.map(user =>
    User.create(user))
  )
    .then(() =>
      Promise.all(seedCampuses.map(campus =>
        Campus.create(campus)
      )))
    .then(() =>
      Promise.all(seedStudents.map(student =>
        Student.create(student)
      ))
    );

const main = () => {
  console.log('============ SEED FILE: SYNCING DATABASE ============');
  db.didSync
  .then(() => {
    console.log('============ Database syncing successful, starting seeding');
    return seed();
  })
  .catch(err => {
    console.log(err.stack);
  })
  .then(() => {
    db.close();
    console.log('============ Seed is successful ');
    return null
  })
};

main();