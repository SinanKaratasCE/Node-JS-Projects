const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

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
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to', mongoose.connection.host);
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

dbConnect().catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
