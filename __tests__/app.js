'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-fastify:app', function() {
  beforeAll(function() {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ projectName: 'fastify-test' });
  });

  it('creates files', function() {
    assert.file(['src/app.js', 'src/routes.js', 'src/config/config.js']);
  });
});
