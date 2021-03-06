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
 * Parameters body to pass for resource name availability check.
 *
 */
class CheckNameAvailabilityParameters {
  /**
   * Create a CheckNameAvailabilityParameters.
   * @property {string} name Resource name.
   * @property {string} type Resource type. The only legal value of this
   * property for checking redis cache name availability is
   * 'Microsoft.Cache/redis'.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CheckNameAvailabilityParameters
   *
   * @returns {object} metadata of CheckNameAvailabilityParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CheckNameAvailabilityParameters',
      type: {
        name: 'Composite',
        className: 'CheckNameAvailabilityParameters',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CheckNameAvailabilityParameters;
