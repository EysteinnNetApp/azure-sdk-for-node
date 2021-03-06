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
 * IaaS VM workload-specific backup item representing a classic virtual
 * machine.
 *
 * @extends models['IaaSVMContainer']
 */
class AzureIaaSClassicComputeVMContainer extends models['IaaSVMContainer'] {
  /**
   * Create a AzureIaaSClassicComputeVMContainer.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureIaaSClassicComputeVMContainer
   *
   * @returns {object} metadata of AzureIaaSClassicComputeVMContainer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Microsoft.ClassicCompute/virtualMachines',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'containerType',
          clientName: 'containerType'
        },
        uberParent: 'ProtectionContainer',
        className: 'AzureIaaSClassicComputeVMContainer',
        modelProperties: {
          friendlyName: {
            required: false,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          backupManagementType: {
            required: false,
            serializedName: 'backupManagementType',
            type: {
              name: 'String'
            }
          },
          registrationStatus: {
            required: false,
            serializedName: 'registrationStatus',
            type: {
              name: 'String'
            }
          },
          healthStatus: {
            required: false,
            serializedName: 'healthStatus',
            type: {
              name: 'String'
            }
          },
          containerType: {
            required: true,
            serializedName: 'containerType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          virtualMachineId: {
            required: false,
            serializedName: 'virtualMachineId',
            type: {
              name: 'String'
            }
          },
          virtualMachineVersion: {
            required: false,
            serializedName: 'virtualMachineVersion',
            type: {
              name: 'String'
            }
          },
          resourceGroup: {
            required: false,
            serializedName: 'resourceGroup',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureIaaSClassicComputeVMContainer;
