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
 * The response of a list operation.
 */
class LabVirtualMachineList extends Array {
  /**
   * Create a LabVirtualMachineList.
   * @property {string} [nextLink] Link for next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of LabVirtualMachineList
   *
   * @returns {object} metadata of LabVirtualMachineList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LabVirtualMachineList',
      type: {
        name: 'Composite',
        className: 'LabVirtualMachineList',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LabVirtualMachineElementType',
                  type: {
                    name: 'Composite',
                    className: 'LabVirtualMachine'
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

module.exports = LabVirtualMachineList;