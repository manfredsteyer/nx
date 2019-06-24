module.exports = {
  name: 'flight-workspace',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/flight-workspace',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
