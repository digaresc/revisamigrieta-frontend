/**
 * revisamigrieta.appspot.com
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Revisamigrietaappspotcom);
  }
}(this, function(expect, Revisamigrietaappspotcom) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Revisamigrietaappspotcom.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('grietaPublish', function() {
      it('should call grietaPublish successfully', function(done) {
        //uncomment below and update the code to test grietaPublish
        //instance.grietaPublish(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('grietaPublishReview', function() {
      it('should call grietaPublishReview successfully', function(done) {
        //uncomment below and update the code to test grietaPublishReview
        //instance.grietaPublishReview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('grietaRetrieveAllGrietas', function() {
      it('should call grietaRetrieveAllGrietas successfully', function(done) {
        //uncomment below and update the code to test grietaRetrieveAllGrietas
        //instance.grietaRetrieveAllGrietas(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('grietaRetrieveAllGrietasReview', function() {
      it('should call grietaRetrieveAllGrietasReview successfully', function(done) {
        //uncomment below and update the code to test grietaRetrieveAllGrietasReview
        //instance.grietaRetrieveAllGrietasReview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('grietaRetrieveAllPendingGrietas', function() {
      it('should call grietaRetrieveAllPendingGrietas successfully', function(done) {
        //uncomment below and update the code to test grietaRetrieveAllPendingGrietas
        //instance.grietaRetrieveAllPendingGrietas(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('grietaRetrieveGrietas', function() {
      it('should call grietaRetrieveGrietas successfully', function(done) {
        //uncomment below and update the code to test grietaRetrieveGrietas
        //instance.grietaRetrieveGrietas(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('grietaRetrieveGrietasReview', function() {
      it('should call grietaRetrieveGrietasReview successfully', function(done) {
        //uncomment below and update the code to test grietaRetrieveGrietasReview
        //instance.grietaRetrieveGrietasReview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
