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
 * Application Created event.
 *
 * @extends models['ApplicationEvent']
 */
class ApplicationCreatedEvent extends models['ApplicationEvent'] {
  /**
   * Create a ApplicationCreatedEvent.
   * @member {string} applicationTypeName Application type name.
   * @member {string} applicationTypeVersion Application type version.
   * @member {string} applicationDefinitionKind Application definition kind.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ApplicationCreatedEvent
   *
   * @returns {object} metadata of ApplicationCreatedEvent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationCreated',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'Kind',
          clientName: 'kind'
        },
        uberParent: 'FabricEvent',
        className: 'ApplicationCreatedEvent',
        modelProperties: {
          eventInstanceId: {
            required: true,
            serializedName: 'EventInstanceId',
            type: {
              name: 'String'
            }
          },
          timeStamp: {
            required: true,
            serializedName: 'TimeStamp',
            type: {
              name: 'DateTime'
            }
          },
          hasCorrelatedEvents: {
            required: false,
            serializedName: 'HasCorrelatedEvents',
            type: {
              name: 'Boolean'
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          applicationId: {
            required: true,
            serializedName: 'ApplicationId',
            type: {
              name: 'String'
            }
          },
          applicationTypeName: {
            required: true,
            serializedName: 'ApplicationTypeName',
            type: {
              name: 'String'
            }
          },
          applicationTypeVersion: {
            required: true,
            serializedName: 'ApplicationTypeVersion',
            type: {
              name: 'String'
            }
          },
          applicationDefinitionKind: {
            required: true,
            serializedName: 'ApplicationDefinitionKind',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationCreatedEvent;