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
 * The query filters that can be used with the inquire container API.
 *
 */
class BMSContainersInquiryQueryObject {
  /**
   * Create a BMSContainersInquiryQueryObject.
   * @member {string} [backupManagementType] Backup management type for this
   * container. Possible values include: 'Invalid', 'AzureIaasVM', 'MAB',
   * 'DPM', 'AzureBackupServer', 'AzureSql', 'AzureStorage', 'AzureWorkload',
   * 'DefaultBackup'
   * @member {string} [workloadType] Workload type for this container. Possible
   * values include: 'Invalid', 'VM', 'FileFolder', 'AzureSqlDb', 'SQLDB',
   * 'Exchange', 'Sharepoint', 'VMwareVM', 'SystemState', 'Client',
   * 'GenericDataSource', 'SQLDataBase', 'AzureFileShare', 'SAPHanaDatabase'
   */
  constructor() {
  }

  /**
   * Defines the metadata of BMSContainersInquiryQueryObject
   *
   * @returns {object} metadata of BMSContainersInquiryQueryObject
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BMSContainersInquiryQueryObject',
      type: {
        name: 'Composite',
        className: 'BMSContainersInquiryQueryObject',
        modelProperties: {
          backupManagementType: {
            required: false,
            serializedName: 'backupManagementType',
            type: {
              name: 'String'
            }
          },
          workloadType: {
            required: false,
            serializedName: 'workloadType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BMSContainersInquiryQueryObject;