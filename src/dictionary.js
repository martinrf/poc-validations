const nspell = require('nspell');

const customDictionary =() => {
  const spell = nspell(['a', 'b'].join('\n'));
  spell.personal(
    ['dsid', 'current', 'employee', 'status', 'term', 'dt', 'employer', 'site', 'geo', 'country', 'class_id',
      'class_start_dt', 'class_end_dt', 'curriculum_id', 'curriculum_type', 'run_dt', 'paid_id', 'last_name',
      'loc_last_name', 'emp_id', 'emp/employee'].join('\n')
  );
  console.log('ds_id ==>', spell.suggest('ds_id'));
  console.log('emp. ==>', spell.suggest('emp.'));
  console.log('emplo ==>', spell.suggest('emplo'));
  console.log('date', spell.suggest('date'));
  console.log('term.', spell.suggest('term.'));
}

customDictionary();
