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
 * Class representing a ListWorkspaceKeysResult.
 */
class ListWorkspaceKeysResult {
  /**
   * Create a ListWorkspaceKeysResult.
   * @member {string} [userStorageKey]
   * @member {string} [userStorageResourceId]
   * @member {string} [appInsightsInstrumentationKey]
   * @member {object} [containerRegistryCredentials]
   * @member {string} [containerRegistryCredentials.location]
   * @member {string} [containerRegistryCredentials.username]
   * @member {array} [containerRegistryCredentials.passwords]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListWorkspaceKeysResult
   *
   * @returns {object} metadata of ListWorkspaceKeysResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListWorkspaceKeysResult',
      type: {
        name: 'Composite',
        className: 'ListWorkspaceKeysResult',
        modelProperties: {
          userStorageKey: {
            required: false,
            readOnly: true,
            serializedName: 'userStorageKey',
            type: {
              name: 'String'
            }
          },
          userStorageResourceId: {
            required: false,
            readOnly: true,
            serializedName: 'userStorageResourceId',
            type: {
              name: 'String'
            }
          },
          appInsightsInstrumentationKey: {
            required: false,
            readOnly: true,
            serializedName: 'appInsightsInstrumentationKey',
            type: {
              name: 'String'
            }
          },
          containerRegistryCredentials: {
            required: false,
            readOnly: true,
            serializedName: 'containerRegistryCredentials',
            type: {
              name: 'Composite',
              className: 'RegistryListCredentialsResult'
            }
          }
        }
      }
    };
  }
}

module.exports = ListWorkspaceKeysResult;
