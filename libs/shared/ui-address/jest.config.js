module.exports = {
  name: 'shared-ui-address',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-address',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
