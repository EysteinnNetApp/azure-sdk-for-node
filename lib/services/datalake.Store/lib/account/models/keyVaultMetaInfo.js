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
 * Metadata information used by account encryption.
 *
 */
class KeyVaultMetaInfo {
  /**
   * Create a KeyVaultMetaInfo.
   * @property {string} keyVaultResourceId The resource identifier for the user
   * managed Key Vault being used to encrypt.
   * @property {string} encryptionKeyName The name of the user managed
   * encryption key.
   * @property {string} encryptionKeyVersion The version of the user managed
   * encryption key.
   */
  constructor() {
  }

  /**
   * Defines the metadata of KeyVaultMetaInfo
   *
   * @returns {object} metadata of KeyVaultMetaInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'KeyVaultMetaInfo',
      type: {
        name: 'Composite',
        className: 'KeyVaultMetaInfo',
        modelProperties: {
          keyVaultResourceId: {
            required: true,
            serializedName: 'keyVaultResourceId',
            type: {
              name: 'String'
            }
          },
          encryptionKeyName: {
            required: true,
            serializedName: 'encryptionKeyName',
            type: {
              name: 'String'
            }
          },
          encryptionKeyVersion: {
            required: true,
            serializedName: 'encryptionKeyVersion',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = KeyVaultMetaInfo;