module.exports = {
  name: 'booking-feature-create',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/feature-create',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
