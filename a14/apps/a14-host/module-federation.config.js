const depConfig = {
  singleton: true,
  strictVersion: true,
  requiredVersion: '>=14.0.0<16.0.0',
  eager: false
};

module.exports = {
  name: 'a14-host',
  remotes: [],
  additionalShared: [
    ['@angular/animations', depConfig],
    ['@angular/core', depConfig],
    ['@angular/common', depConfig],
    ['@angular/forms', depConfig]
    ['@angular/router', depConfig]
  ]
};
