const fs = require(`fs`);
const http = require(`http`);

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed: ${data}`);
});
