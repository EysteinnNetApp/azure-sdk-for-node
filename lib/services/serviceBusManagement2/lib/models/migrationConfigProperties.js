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
 * Single item in List or Get Migration Config operation
 *
 * @extends models['Resource']
 */
class MigrationConfigProperties extends models['Resource'] {
  /**
   * Create a MigrationConfigProperties.
   * @member {string} [provisioningState] Provisioning state of Migration
   * Configuration
   * @member {number} [pendingReplicationOperationsCount] Number of entities
   * pending to be replicated.
   * @member {string} targetNamespace Existing premium Namespace ARM Id name
   * which has no entities, will be used for migration
   * @member {string} postMigrationName Name to access Standard Namespace after
   * migration
   * @member {string} [migrationState] State in which Standard to Premium
   * Migration is, possible values : Unknown, Reverting, Completing,
   * Initiating, Syncing, Active
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MigrationConfigProperties
   *
   * @returns {object} metadata of MigrationConfigProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MigrationConfigProperties',
      type: {
        name: 'Composite',
        className: 'MigrationConfigProperties',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          pendingReplicationOperationsCount: {
            required: false,
            readOnly: true,
            serializedName: 'properties.pendingReplicationOperationsCount',
            type: {
              name: 'Number'
            }
          },
          targetNamespace: {
            required: true,
            serializedName: 'properties.targetNamespace',
            type: {
              name: 'String'
            }
          },
          postMigrationName: {
            required: true,
            serializedName: 'properties.postMigrationName',
            type: {
              name: 'String'
            }
          },
          migrationState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.migrationState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MigrationConfigProperties;
