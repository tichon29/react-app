const core = require('@actions/core');
const github = require('@actions/github');

try {
  //throw( new Error("some error message"));

  core.debug('Debug Message');
  core.warning('Warning Message');
  core.error('Error Message')
  const name = core.getInput('who-to-greet');
  core.setSecret(name);
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.startGroup('Logging github object');
  console.log(JSON.stringify(github, null, '\t'));
  core.endGroup();

  core.exportVariable('HELLO', 'Hello there');
} catch(error) {
  core.setFailed(error.message)  
}