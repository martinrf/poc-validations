const fs = require('fs');
const moment = require('moment');

const getData = async () => {
  try {
    const data = await fs.readFileSync('date-formats.txt', 'utf8');
    const dataString = data.toString();
    return dataString.split('\n').filter(line => line).map(line => {
      let row = line.split(',');
      return { 'date': row[0], 'format': row[1] };
    });
  } catch(error) {
    console.log('Error:', error.stack);
  }
};

const isValid = (row) => {
  const parsedMoment = moment(row.date, row.format);
  return { ...row, 'valid': parsedMoment.isValid(), 'formatted': parsedMoment.format('MM/DD/YYYY') };
};

const massParse = async () => {
  const data = await getData();
  const newData = data.map(isValid);
  writeResults(newData);
};

const writeResults = (data) => {
  const writeStream = fs.createWriteStream('parsing-output.txt');
  const pathName = writeStream.path;
  writeStream.write('{ "array": [');
  data.forEach(value => writeStream.write(`${ JSON.stringify(value)},\n`));
  writeStream.write(']}');
  writeStream.on('finish', () => {
    console.log(`wrote all the array data to file ${pathName}`);
  });
  writeStream.on('error', (err) => {
    console.error(`There is an error writing the file ${pathName} => ${err}`);
  });
  writeStream.end();
};

(
  async () => { await massParse(); }
)();

