'use strict';

var expect = require('expect.js');

describe('models/type', function () {
  beforeEach(function () {
    this.Type = require('../../models').Type;
  });


  describe('create', function () {
    it('creates a type', function () {
      return this.Type.create({ typeName: 'typeName' , typeCode: 'typeCode'}).bind(this).then(function (type) {
          expect(type.typeName).to.equal('typeName');
          expect(type.typeCode).to.equal('typeCode');
      });
    });
  });

  describe('view', function () {
    it('list of types', function () {
      return this.Type.findAll().bind(this).then(function (types) {
          expect(types).not.to.be.empty();
      });
    });
  });

});
