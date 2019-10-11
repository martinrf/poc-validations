const dictionary = require('dictionary-en-us');
const nspell = require('nspell');

dictionary(ondictionary);

function ondictionary(err, dict) {
  if (err) {
    throw err
  }

  const spell = nspell(dict);

  console.log(spell.correct('employee'));
  console.log(spell.suggest('employie'));
  console.log(spell.correct('id'));
  console.log(spell.correct('emplo'));
  console.log(spell.suggest('emplo'));
  console.log(spell.suggest('emplye'));
  console.log(spell.suggest('employee'));
  console.log(spell.correct('npm'));
  console.log(spell.suggest('nnpm'));
  spell.add('npm');
  console.log(spell.correct('npm'));
  console.log(spell.suggest('nnpm'));
}
