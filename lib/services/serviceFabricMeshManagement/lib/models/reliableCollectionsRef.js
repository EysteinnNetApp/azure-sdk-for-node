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
 * Specifying this parameter adds support for reliable collections
 *
 */
class ReliableCollectionsRef {
  /**
   * Create a ReliableCollectionsRef.
   * @member {string} name Name of ReliableCollection resource. Right now it's
   * not used and you can use any string.
   * @member {boolean} [doNotPersistState] False (the default) if
   * ReliableCollections state is persisted to disk as usual. True if you do
   * not want to persist state, in which case replication is still enabled and
   * you can use ReliableCollections as distributed cache.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReliableCollectionsRef
   *
   * @returns {object} metadata of ReliableCollectionsRef
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReliableCollectionsRef',
      type: {
        name: 'Composite',
        className: 'ReliableCollectionsRef',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          doNotPersistState: {
            required: false,
            serializedName: 'doNotPersistState',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ReliableCollectionsRef;