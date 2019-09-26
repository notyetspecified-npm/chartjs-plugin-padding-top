/* global Promise */

var gulp = require('gulp');
var path = require('path');
var {exec} = require('child_process');

function run(bin, args) {
	return new Promise((resolve, reject) => {
		var exe = path.join('node_modules', '.bin', bin);
		var ps = exec([exe].concat(args || []).join(' '));

		ps.stdout.pipe(process.stdout);
		ps.stderr.pipe(process.stderr);
		ps.on('close', (error) => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
}

gulp.task('build', function() {
	return run('rollup', ['-c']);
});
