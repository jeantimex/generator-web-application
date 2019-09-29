'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('pagename', { type: String, required: true });
  }

  writing() {
    this.log(this.options.pagename);
  }
};
