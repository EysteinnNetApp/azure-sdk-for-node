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
 * Class representing a JitNetworkAccessPolicyInitiateRequest.
 */
class JitNetworkAccessPolicyInitiateRequest {
  /**
   * Create a JitNetworkAccessPolicyInitiateRequest.
   * @member {array} virtualMachines A list of virtual machines & ports to open
   * access for
   */
  constructor() {
  }

  /**
   * Defines the metadata of JitNetworkAccessPolicyInitiateRequest
   *
   * @returns {object} metadata of JitNetworkAccessPolicyInitiateRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JitNetworkAccessPolicyInitiateRequest',
      type: {
        name: 'Composite',
        className: 'JitNetworkAccessPolicyInitiateRequest',
        modelProperties: {
          virtualMachines: {
            required: true,
            serializedName: 'virtualMachines',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JitNetworkAccessPolicyInitiateVirtualMachineElementType',
                  type: {
                    name: 'Composite',
                    className: 'JitNetworkAccessPolicyInitiateVirtualMachine'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = JitNetworkAccessPolicyInitiateRequest;