'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the smashing ${chalk.red(
          'generator-web-application'
        )} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname,
      },
      {
        type: 'input',
        name: 'desc',
        message: 'Description',
        default: 'About this project',
      },
      {
        type: 'input',
        name: 'version',
        message: 'Version',
        default: '1.0.0',
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
        default: 'Your name',
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    // Make the name dash-separated
    let name = this.props.name
      .toLocaleLowerCase()
      .split(' ')
      .join('-');

    // Copy all non-dotfiles in common
    this.fs.copy(this.templatePath('common/**/*'), this.destinationRoot());

    // Copy all dotfiles in common
    this.fs.copy(this.templatePath('common/.*'), this.destinationRoot());

    // Copy package.json
    this.fs.copyTpl(
      this.templatePath('common/package.json'),
      this.destinationPath('package.json'),
      {
        name: name,
        desc: this.props.desc,
        author: this.props.author,
        version: this.props.version,
      }
    );

    // Copy package-lock.json
    this.fs.copyTpl(
      this.templatePath('common/package-lock.json'),
      this.destinationPath('package-lock.json'),
      {
        name: name,
        version: this.props.version,
      }
    );
  }

  install() {
    this.npmInstall();
  }
};
