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
    instance = new Revisamigrietaappspotcom.RevisionModel();
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

  describe('RevisionModel', function() {
    it('should create an instance of RevisionModel', function() {
      // uncomment below and update the code to test RevisionModel
      //var instane = new Revisamigrietaappspotcom.RevisionModel();
      //expect(instance).to.be.a(Revisamigrietaappspotcom.RevisionModel);
    });

    it('should have the property comentarios (base name: "comentarios")', function() {
      // uncomment below and update the code to test the property comentarios
      //var instane = new Revisamigrietaappspotcom.RevisionModel();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new Revisamigrietaappspotcom.RevisionModel();
      //expect(instance).to.be();
    });

    it('should have the property diagonalesLosa (base name: "diagonalesLosa")', function() {
      // uncomment below and update the code to test the property diagonalesLosa
      //var instane = new Revisamigrietaappspotcom.RevisionModel();
      //expect(instance).to.be();
    });

    it('should have the property diagonalesPiso (base name: "diagonalesPiso")', function() {
      // uncomment below and update the code to test the property diagonalesPiso
      //var instane = new Revisamigrietaappspotcom.RevisionModel();
      //expect(instance).to.be();
    });

    it('should have the property grietaModelRef (base name: "grietaModelRef")', function() {
      // uncomment below and update the code to test the property grietaModelRef
      //var instane = new Revisamigrietaappspotcom.RevisionModel();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Revisamigrietaappspotcom.RevisionModel();
      //expect(instance).to.be();
    });

    it('should have the property modifiedOn (base name: "modifiedOn")', function() {
      // uncomment below and update the code to test the property modifiedOn
      //var instane = new Revisamigrietaappspotcom.RevisionModel();
      //expect(instance).to.be();
    });

    it('should have the property paralelasPiso (base name: "paralelasPiso")', function() {
      // uncomment below and update the code to test the property paralelasPiso
      //var instane = new Revisamigrietaappspotcom.RevisionModel();
      //expect(instance).to.be();
    });

    it('should have the property peligroInminente (base name: "peligroInminente")', function() {
      // uncomment below and update the code to test the property peligroInminente
      //var instane = new Revisamigrietaappspotcom.RevisionModel();
      //expect(instance).to.be();
    });

    it('should have the property revisadaPor (base name: "revisadaPor")', function() {
      // uncomment below and update the code to test the property revisadaPor
      //var instane = new Revisamigrietaappspotcom.RevisionModel();
      //expect(instance).to.be();
    });

  });

}));
