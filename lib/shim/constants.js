'use strict'

/**
 * Enumeration of module instrumentation types.
 *
 * @readonly
 * @enum {string}
 */
var MODULE_TYPE = {
  /** Utility/generic module, such as pooling libraries. */
  GENERIC: 'generic',

  /** Database module, such as the MongoDB or MySQL drivers. */
  DATASTORE: 'datastore',

  /** Web server framework module, such as Express or Restify. */
  WEB_FRAMEWORK: 'web-framework'
}


exports.MODULE_TYPE = MODULE_TYPE