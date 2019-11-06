module.exports = {
  name: 'documentation-ui-home',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/documentation-ui/home',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
