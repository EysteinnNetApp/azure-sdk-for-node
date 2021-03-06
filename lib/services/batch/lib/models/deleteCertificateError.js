/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @summary An error encountered by the Batch service when deleting a
 * certificate.
  *
 */
class DeleteCertificateError {
  /**
   * Create a DeleteCertificateError.
   * @property {string} [code] An identifier for the certificate deletion
   * error. Codes are invariant and are intended to be consumed
   * programmatically.
   * @property {string} [message] A message describing the certificate deletion
   * error, intended to be suitable for display in a user interface.
   * @property {array} [values] A list of additional error details related to
   * the certificate deletion error. This list includes details such as the
   * active pools and nodes referencing this certificate. However, if a large
   * number of resources reference the certificate, the list contains only
   * about the first hundred.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeleteCertificateError
   *
   * @returns {object} metadata of DeleteCertificateError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeleteCertificateError',
      type: {
        name: 'Composite',
        className: 'DeleteCertificateError',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          values: {
            required: false,
            serializedName: 'values',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NameValuePairElementType',
                  type: {
                    name: 'Composite',
                    className: 'NameValuePair'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DeleteCertificateError;
