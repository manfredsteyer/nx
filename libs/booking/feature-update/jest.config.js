module.exports = {
  name: 'booking-feature-update',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/feature-update',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
