'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', { type: String, required: true });
  }

  prompting() {
    const prompts = [
      {
        type: 'confirm',
        name: 'typescript',
        message: 'Use TypeScript?',
        default: false,
      },
    ];
    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const name = this.options.name
      .toLocaleLowerCase()
      .split(' ')
      .join('-');

    if (
      this.fs.exists(this.destinationPath('src', 'pages', name + '.js')) ||
      this.fs.exists(this.destinationPath('src', 'pages', name + '.ts'))
    ) {
      throw new Error('page `' + name + '` exists');
    }

    const pageFilePath = this.destinationPath(
      'src',
      'pages',
      name + (this.props.typescript ? '.ts' : '.js')
    );

    // Create a new file.
    this.fs.write(pageFilePath, '');
  }
};
