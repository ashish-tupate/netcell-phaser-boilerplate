var gulp        = require('gulp');
var runSequence = require('run-sequence');
var notifier    = require('node-notifier');

require('./gulp/browserify');
require('./gulp/clean');
require('./gulp/copy');
require('./gulp/html');
require('./gulp/server');
require('./gulp/watch');

gulp.task('default', function(callback){
	runSequence(
		['clean:serve'],
		['watch:serve', 'copy:serve', 'html:serve', 'browserify:serve'],
		['server:serve']
	function(){
		notifier.notify({
			title: 'BUILD SUCCESS',
			message: '',
			sound: true
		});
		callback();
	})
})

gulp.task('default', function(callback){
	runSequence(
		['clean:serve'],
		['copy:serve', 'html:serve', 'browserify:serve'],
		['server:serve']
	function(){
		notifier.notify({
			title: 'BUILD SUCCESS',
			message: '',
			sound: true
		});
		callback();
	})
})