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
 * Operation Display Resource object.
 *
 */
class OperationDisplayResource {
  /**
   * Create a OperationDisplayResource.
   * @member {string} [provider] Operation Display Resource Provider.
   * @member {string} [resource] Operation Display Resource.
   * @member {string} [operation] Operation Display Resource Operation.
   * @member {string} [description] Operation Display Resource Description.
   */
  constructor() {
  }

  /**
   * Defines the metadata of OperationDisplayResource
   *
   * @returns {object} metadata of OperationDisplayResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationDisplayResource',
      type: {
        name: 'Composite',
        className: 'OperationDisplayResource',
        modelProperties: {
          provider: {
            required: false,
            serializedName: 'provider',
            type: {
              name: 'String'
            }
          },
          resource: {
            required: false,
            serializedName: 'resource',
            type: {
              name: 'String'
            }
          },
          operation: {
            required: false,
            serializedName: 'operation',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OperationDisplayResource;
