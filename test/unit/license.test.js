'use strict';

var expect = require('expect.js');

describe('models/license', function () {
  beforeEach(function () {
    this.Status = require('../../models').Status;
    this.License = require('../../models').License;
    this.Type = require('../../models').Type;
  });

  describe('create', function () {
    it('creates a license', function () {
      return this.Status.create({ statusName: 'LicenseStatus' }).bind(this).then(function (status) {
        return this.Type.create({ typeName: 'LicenseTypeName' , typeCode: 'LicenseTypeCode' }).bind(this).then(function (type) {
          return this.License.create({ nameOfApplicant: 'a name', companyName: 'company', latitude: '12.3', longitude: '11.3', townshipName: 'town', dateOfLicense: '12-12-2015', StatusId: status.id, TypeId: type.id }).then(function (license) {
            expect(license.nameOfApplicant).to.equal('a name');
          });
        });
      });
    });
  });
});
