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
 * VPN client root certificate of P2SVpnServerConfiguration.
 *
 * @extends models['SubResource']
 */
class P2SVpnServerConfigVpnClientRootCertificate extends models['SubResource'] {
  /**
   * Create a P2SVpnServerConfigVpnClientRootCertificate.
   * @property {string} publicCertData The certificate public data.
   * @property {string} [provisioningState] The provisioning state of the
   * P2SVpnServerConfiguration VPN client root certificate resource. Possible
   * values are: 'Updating', 'Deleting', and 'Failed'.
   * @property {string} [name] The name of the resource that is unique within a
   * resource group. This name can be used to access the resource.
   * @property {string} [etag] A unique read-only string that changes whenever
   * the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of P2SVpnServerConfigVpnClientRootCertificate
   *
   * @returns {object} metadata of P2SVpnServerConfigVpnClientRootCertificate
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'P2SVpnServerConfigVpnClientRootCertificate',
      type: {
        name: 'Composite',
        className: 'P2SVpnServerConfigVpnClientRootCertificate',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          publicCertData: {
            required: true,
            serializedName: 'properties.publicCertData',
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
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = P2SVpnServerConfigVpnClientRootCertificate;