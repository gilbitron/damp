require('shelljs/global');

module.exports = function(damp) {
	return function(dockerComposeCommand) {
		damp.checkDependencies();
		damp.connectToVm();

		cd(damp.path + '/lib/damp')
		if (exec('docker-compose ' + dockerComposeCommand).code !== 0) {
			damp.exitWithError('Command failed: docker-compose ' + dockerComposeCommand);
		}
	}
}