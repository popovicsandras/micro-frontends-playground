const coreLibraries = new Set([
  '@angular/animations',
  '@angular/core',
  '@angular/common',
  '@angular/forms',
  '@angular/router'
]);

module.exports = {
  name: 'remote-webcomponent-a15-as-mf',
  exposes: {
    './web-components': 'apps/webcomponent-a15-as-mf/src/bootstrap.ts',
  },
  additionalShared: [...coreLibraries]
};
