const coreLibraries = new Set([
  '@angular/animations',
  '@angular/core',
  '@angular/common',
  '@angular/forms',
  '@angular/router'
]);

module.exports = {
  name: 'a15-host',
  // Share core libraries, and avoid everything else
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      console.log(libraryName, defaultConfig);
      return defaultConfig;
    }

    // Returning false means the library is not shared.
    return false;
  }
};
