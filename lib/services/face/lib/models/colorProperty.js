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
 * Hair color and associated confidence
 *
 */
class ColorProperty {
  /**
   * Create a ColorProperty.
   * @member {string} [color] Name of the color.
   * @member {number} [confidence]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ColorProperty
   *
   * @returns {object} metadata of ColorProperty
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ColorProperty',
      type: {
        name: 'Composite',
        className: 'ColorProperty',
        modelProperties: {
          color: {
            required: false,
            serializedName: 'color',
            type: {
              name: 'String'
            }
          },
          confidence: {
            required: false,
            serializedName: 'confidence',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ColorProperty;