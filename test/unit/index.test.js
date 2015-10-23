'use strict';

var expect = require('expect.js');

describe('models/index', function () {
  it('returns the license model', function () {
    var models = require('../../models');
    expect(models.License).to.be.ok();
  });

  it('returns the status model', function () {
    var models = require('../../models');
    expect(models.Status).to.be.ok();
  });

  it('returns the type model', function () {
    var models = require('../../models');
    expect(models.Type).to.be.ok();
  });
});
