const fs = require('fs');
const moment = require('moment');

const getData = async () => {
  try {
    const data = await fs.readFileSync('date-formats.txt', 'utf8');
    const dataString = data.toString();
    return dataString.split('\n').filter(x => x).map(x => {
      let a = x.split(',');
      return { 'date': a[0], 'format': a[1] };
    });
  } catch(e) {
    console.log('Error:', e.stack);
  }
};

const isValid = (row) => {
  const parsedMoment = moment(row.date, row.format);
  return { ...row, 'valid': parsedMoment.isValid(), 'formatted': parsedMoment.format('MM/DD/YYYY') };
};

const massParse = async () => {
  const data = await getData();
  const newData = data.map(isValid);
  return newData;
};

massParse();
