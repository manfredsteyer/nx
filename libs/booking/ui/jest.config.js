module.exports = {
  name: 'booking-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
