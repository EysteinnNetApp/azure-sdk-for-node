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
 * ExpressRoute circuit peering identifier.
 *
 */
class ExpressRouteCircuitPeeringId {
  /**
   * Create a ExpressRouteCircuitPeeringId.
   * @property {string} [id] The ID of the ExpressRoute circuit peering.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExpressRouteCircuitPeeringId
   *
   * @returns {object} metadata of ExpressRouteCircuitPeeringId
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExpressRouteCircuitPeeringId',
      type: {
        name: 'Composite',
        className: 'ExpressRouteCircuitPeeringId',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExpressRouteCircuitPeeringId;