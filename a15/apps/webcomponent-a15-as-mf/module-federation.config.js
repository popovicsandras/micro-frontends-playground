const coreLibraries = new Set([
  '@angular/animations',
  '@angular/core',
  '@angular/common',
  '@angular/forms',
  '@angular/router'
]);

module.exports = {
  name: 'remoteWebcomponentA15AsMf',
  library: { type: "var", name: "remoteWebcomponentA15AsMf" },
  exposes: {
    './web-components': 'apps/webcomponent-a15-as-mf/src/bootstrap.ts',
  },
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      console.log(libraryName, defaultConfig);
      return defaultConfig;
    }

    // Returning false means the library is not shared.
    return false;
  }
};
