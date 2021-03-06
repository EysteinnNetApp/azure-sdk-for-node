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
 * List of available SKUs for an existing Kusto Cluster.
 */
class ListResourceSkusResult extends Array {
  /**
   * Create a ListResourceSkusResult.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ListResourceSkusResult
   *
   * @returns {object} metadata of ListResourceSkusResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListResourceSkusResult',
      type: {
        name: 'Composite',
        className: 'ListResourceSkusResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AzureResourceSkuElementType',
                  type: {
                    name: 'Composite',
                    className: 'AzureResourceSku'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ListResourceSkusResult;
