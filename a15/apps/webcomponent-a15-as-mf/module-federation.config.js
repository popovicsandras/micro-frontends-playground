const coreLibraries = [
  '@angular/animations',
  '@angular/animations/browser',
  '@angular/animations/browser/testing',
  '@angular/common',
  '@angular/common/http',
  '@angular/common/http/testing',
  '@angular/common/testing',
  '@angular/common/upgrade',
  '@angular/core',
  '@angular/forms',
  '@angular/router'
];

module.exports = {
  name: 'remote-webcomponent-a15-as-mf',
  exposes: {
    './web-components': 'apps/webcomponent-a15-as-mf/src/bootstrap.ts',
  },
  additionalShared: coreLibraries.map((lib) => (
    {
      libraryName: lib,
      sharedConfig: {
        singleton: false,
        strictVersion: true,
        requiredVersion: '~15.2.0'
      }
    }
  ))
};
