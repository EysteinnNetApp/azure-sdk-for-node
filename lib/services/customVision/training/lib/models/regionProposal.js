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

const models = require('./index');

/**
 * Class representing a RegionProposal.
 */
class RegionProposal {
  /**
   * Create a RegionProposal.
   * @member {number} [confidence]
   * @member {object} [boundingBox]
   * @member {number} [boundingBox.left]
   * @member {number} [boundingBox.top]
   * @member {number} [boundingBox.width]
   * @member {number} [boundingBox.height]
   */
  constructor() {
  }

  /**
   * Defines the metadata of RegionProposal
   *
   * @returns {object} metadata of RegionProposal
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RegionProposal',
      type: {
        name: 'Composite',
        className: 'RegionProposal',
        modelProperties: {
          confidence: {
            required: false,
            readOnly: true,
            serializedName: 'confidence',
            type: {
              name: 'Number'
            }
          },
          boundingBox: {
            required: false,
            readOnly: true,
            serializedName: 'boundingBox',
            type: {
              name: 'Composite',
              className: 'BoundingBox'
            }
          }
        }
      }
    };
  }
}

module.exports = RegionProposal;