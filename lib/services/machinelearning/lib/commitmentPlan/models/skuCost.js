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
 * Describes metadata for SKU cost info.
 *
 */
class SkuCost {
  /**
   * Create a SkuCost.
   * @property {string} [meterID] The meter used for this part of a SKU's cost.
   * @property {number} [quantity] The multiplier for the meter ID.
   * @property {string} [extendedUnit] The overall duration represented by the
   * quantity.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SkuCost
   *
   * @returns {object} metadata of SkuCost
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SkuCost',
      type: {
        name: 'Composite',
        className: 'SkuCost',
        modelProperties: {
          meterID: {
            required: false,
            readOnly: true,
            serializedName: 'meterID',
            type: {
              name: 'String'
            }
          },
          quantity: {
            required: false,
            readOnly: true,
            serializedName: 'quantity',
            type: {
              name: 'Number'
            }
          },
          extendedUnit: {
            required: false,
            readOnly: true,
            serializedName: 'extendedUnit',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SkuCost;