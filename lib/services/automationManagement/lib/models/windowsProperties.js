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
 * Windows specific update configuration.
 *
 */
class WindowsProperties {
  /**
   * Create a WindowsProperties.
   * @member {string} [includedUpdateClassifications] Update classification
   * included in the software update configuration. A comma separated string
   * with required values. Possible values include: 'Unclassified', 'Critical',
   * 'Security', 'UpdateRollup', 'FeaturePack', 'ServicePack', 'Definition',
   * 'Tools', 'Updates'
   * @member {array} [excludedKbNumbers] KB numbers excluded from the software
   * update configuration.
   * @member {array} [includedKbNumbers] KB numbers included from the software
   * update configuration.
   * @member {string} [rebootSetting] Reboot setting for the software update
   * configuration.
   */
  constructor() {
  }

  /**
   * Defines the metadata of WindowsProperties
   *
   * @returns {object} metadata of WindowsProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WindowsProperties',
      type: {
        name: 'Composite',
        className: 'WindowsProperties',
        modelProperties: {
          includedUpdateClassifications: {
            required: false,
            serializedName: 'includedUpdateClassifications',
            type: {
              name: 'String'
            }
          },
          excludedKbNumbers: {
            required: false,
            serializedName: 'excludedKbNumbers',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          includedKbNumbers: {
            required: false,
            serializedName: 'includedKbNumbers',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          rebootSetting: {
            required: false,
            serializedName: 'rebootSetting',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WindowsProperties;