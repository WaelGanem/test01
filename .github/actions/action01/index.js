const core = require('@actions/core')
const github = require('@actions/github')

try {
    const _fullname = core.getInput('fullname');
    const toRet = `Hi ya ${_fullname}`;
    core.setOutput('greeting', toRet)
} catch(error){
    core.setFailed(error.message)
}