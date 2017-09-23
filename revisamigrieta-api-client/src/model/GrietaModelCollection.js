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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GrietaModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GrietaModel'));
  } else {
    // Browser globals (root is window)
    if (!root.Revisamigrietaappspotcom) {
      root.Revisamigrietaappspotcom = {};
    }
    root.Revisamigrietaappspotcom.GrietaModelCollection = factory(root.Revisamigrietaappspotcom.ApiClient, root.Revisamigrietaappspotcom.GrietaModel);
  }
}(this, function(ApiClient, GrietaModel) {
  'use strict';




  /**
   * The GrietaModelCollection model module.
   * @module model/GrietaModelCollection
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GrietaModelCollection</code>.
   * @alias module:model/GrietaModelCollection
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GrietaModelCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GrietaModelCollection} obj Optional instance to populate.
   * @return {module:model/GrietaModelCollection} The populated <code>GrietaModelCollection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [GrietaModel]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/GrietaModel>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


