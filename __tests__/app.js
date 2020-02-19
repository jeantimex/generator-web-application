'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-web-application:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      name: 'My Project',
      desc: 'Awesome project',
      version: '1.0.0',
      author: 'jeantimex',
    });
  });

  it('creates files', () => {
    assert.file([
      '.eslintrc.js',
      '.gitignore',
      '.prettierrc',
      'babel.config.js',
      'jest.config.js',
      'package-lock.json',
      'package.json',
      'records.json',
      'tsconfig.json',
      'webpack.config.js',
      'webpack.parts.js',
      'src/index.html',
      'src/index.ts',
      'src/main.scss',
      'src/pages/about.ts',
      'src/lib/math.ts',
      'src/lib/math.test.ts',
    ]);
  });
});
