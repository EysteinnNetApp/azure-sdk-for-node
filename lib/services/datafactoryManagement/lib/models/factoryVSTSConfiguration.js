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
 * Factory's VSTS repo information.
 *
 * @extends models['FactoryRepoConfiguration']
 */
class FactoryVSTSConfiguration extends models['FactoryRepoConfiguration'] {
  /**
   * Create a FactoryVSTSConfiguration.
   * @member {string} projectName VSTS project name.
   * @member {string} [tenantId] VSTS tenant id.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of FactoryVSTSConfiguration
   *
   * @returns {object} metadata of FactoryVSTSConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FactoryVSTSConfiguration',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'FactoryRepoConfiguration',
        className: 'FactoryVSTSConfiguration',
        modelProperties: {
          accountName: {
            required: true,
            serializedName: 'accountName',
            type: {
              name: 'String'
            }
          },
          repositoryName: {
            required: true,
            serializedName: 'repositoryName',
            type: {
              name: 'String'
            }
          },
          collaborationBranch: {
            required: true,
            serializedName: 'collaborationBranch',
            type: {
              name: 'String'
            }
          },
          rootFolder: {
            required: true,
            serializedName: 'rootFolder',
            type: {
              name: 'String'
            }
          },
          lastCommitId: {
            required: false,
            serializedName: 'lastCommitId',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          projectName: {
            required: true,
            serializedName: 'projectName',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: false,
            serializedName: 'tenantId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FactoryVSTSConfiguration;