const fs = require(`fs`);
const dotenv = require(`dotenv`);
const Tour = require(`./../../models/tourModel`);
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

//Connection to local database that called mongobdcompass
/* async function dbConnect() {
  await mongoose.connect(process.env.DATABASE_LOCAL);
} */

//Connection to hosted dabatase server
async function dbConnect() {
  await mongoose.connect(DB);
}

dbConnect().catch((err) => console.log(err));

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to', mongoose.connection.host);
});

//READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, `utf-8`),
);

//IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log(`Data successfully loaded!!`);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log(`Data successfully deleted!!`);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === `--import`) {
  importData();
}

if (process.argv[2] === `--delete`) {
  deleteData();
}

console.log(process.argv);
