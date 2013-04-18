 'use strict';

exports.description = 'Commonjs template for command';

exports.notes = '';

exports.warnOn = '*';

exports.template = function(grunt, init, done) {

  init.process({type: 'arale'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('version', '1.0.0'),
    init.prompt('description'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses', 'MIT')
  ], function(err, props) {
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });
};
