module.exports = {
  name: 'booking-util',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/util',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
