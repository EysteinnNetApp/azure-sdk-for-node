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
 * Target compute size collection.
 */
class TargetComputeSizeCollection extends Array {
  /**
   * Create a TargetComputeSizeCollection.
   * @member {string} [nextLink] The value of next link.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of TargetComputeSizeCollection
   *
   * @returns {object} metadata of TargetComputeSizeCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TargetComputeSizeCollection',
      type: {
        name: 'Composite',
        className: 'TargetComputeSizeCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TargetComputeSizeElementType',
                  type: {
                    name: 'Composite',
                    className: 'TargetComputeSize'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TargetComputeSizeCollection;