var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.License.create({
    nameOfApplicant: req.param('name_of_applicant'),
    companyName: req.param('company_name'),
    latitude: req.param('latitude'),
    longitude: req.param('longitude'),
    townshipName: req.param('township_name'),
    dateOfLicense: req.param('date_of_license'),
    StatusId: req.param('status_id'),
    TypeId: req.param('type_id')
  }).then(function() {
    res.redirect('/');
  });
});

function getLicense(req, res, next){
  models.License.findOne({
    where: {licenseId: req.params.licenseID}
  }).then(function(license) {
   req.license = license;
   return next();
  });
};

function renderLicense(req, res) {
    res.send({
        wellLicense: req.license,
        licenseStatus: req.licenseStatus,
        licenseType: req.licenseType
    });
  };


function getLicenses(req, res, next){
  models.License.findAll({
  }).then(function(licenses) {
   req.licenses = licenses;
   return next();
  });
};

function getLicensesByTownshipAndCompany(req, res, next){
  models.License.findAll({
    where: {townshipName: req.param('township'),
      companyName: req.param('company')
    }
  }).then(function(licenses) {
   req.licenses = licenses;
   return next();
  });
};

function getNonExpiredLicenses(req, res, next){
  models.License.findAll({
    where: {
      StatusId: {ne: 3},
      companyName: req.param('company')
    }
  }).then(function(licenses) {
   req.licenses = licenses;
   return next();
  });
};

function AllStatus(req, res, next){
  models.Status.findAll({
  }).then(function(status) {
    req.licenseStatus = status;
    return next();
  });
};

function AllType(req, res, next){
  models.Type.findAll({
  }).then(function(types) {
    req.licenseType = types;
    return next();
  });
};

function renderAllLicenses(req, res) {
    res.send({
        wellLicenses: req.licenses,
        licenseStatus: req.licenseStatus,
        licenseType: req.licenseType
    });
  };

router.get('/', getLicenses, AllStatus, AllType, renderAllLicenses);
router.get('/:licenseID', getLicense ,AllStatus, AllType, renderLicense);
router.get('/:township/:company', getLicensesByTownshipAndCompany, AllStatus, AllType, renderAllLicenses);
router.get('/api/nonexpired/:company', getNonExpiredLicenses, AllStatus, AllType, renderAllLicenses);
module.exports = router;
