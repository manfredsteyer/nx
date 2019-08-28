module.exports = {
  name: 'booking-domain',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/domain',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
