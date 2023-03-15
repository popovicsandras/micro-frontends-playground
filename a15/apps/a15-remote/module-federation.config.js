const depConfig = {
  singleton: true,
  strictVersion: true,
  requiredVersion: '>=14.0.0<16.0.0',
  eager: false
};

module.exports = {
  name: 'a15-remote',
  exposes: {
    './Routes': 'apps/a15-remote/src/app/remote-entry/entry.routes.ts',
    './Module': 'apps/a15-remote/src/app/remote-entry/entry.component.ts',
  },
  additionalShared: [
    ['@angular/animations', depConfig],
    ['@angular/core', depConfig],
    ['@angular/common', depConfig],
    ['@angular/forms', depConfig]
    ['@angular/router', depConfig]
  ]
};
