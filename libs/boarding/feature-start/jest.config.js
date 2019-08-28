module.exports = {
  name: 'boarding-feature-start',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/boarding/feature-start',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
