'use strict';

var expect = require('expect.js');

describe('models/status', function () {
  beforeEach(function () {
    this.Status = require('../../models').Status;
  });

  describe('create', function () {
    it('creates a status', function () {
      return this.Status.create({ statusName: 'TestStatus' }).bind(this).then(function (status) {
          expect(status.statusName).to.equal('TestStatus');
      });
    });
  });

  describe('view', function () {
    it('list of statuses', function () {
      return this.Status.findAll().bind(this).then(function (status) {
          expect(status).not.to.be.empty();
      });
    });
  });

});
