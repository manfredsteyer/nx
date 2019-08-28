module.exports = {
  name: 'boarding-domain',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/boarding/domain',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
