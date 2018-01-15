const gulp = require('gulp');
const fs = require('fs');
const glob = require('glob');
const childProcess = require('child_process');

/**
 * Updates polymer.json to the configured settings
 */
const polymerConfig = (cmd) => {
  // polymer.json configuration
  const config = {
    'entrypoint': 'index.html',
    'shell': 'src/my-app.html',
    'fragments': glob.sync('src/**/*-view.html', {}),  // Dynamically find all views to be rendered
    'sources': [
      'src/**/*',
      'images/**/*',
      'bower.json'
    ],
    'extraDependencies': [
      'manifest.json',
      'bower_components/webcomponentsjs/*.js'
    ],
    'lint': {
      'rules': ['polymer-2']
    },
    'builds': [
      {
        'preset': 'es5-bundled'
      }
    ]
  };

  // Create polymer.json file
  fs.writeFileSync('polymer.json', JSON.stringify(config));
};

/**
 * Executes a shell command synchronously
 * @param cmd shell command
 */
const execSync = (cmd) => {
  childProcess.execSync(cmd, {
    stdio: 'inherit'
  });
};

gulp.task('build', [], () => {
  polymerConfig();
  execSync('polymer build');
});

gulp.task('serve', [], () => {
  polymerConfig();
  execSync('polymer serve');
});

gulp.task('test', [], () => {
  polymerConfig();
  execSync('polymer test');
});
