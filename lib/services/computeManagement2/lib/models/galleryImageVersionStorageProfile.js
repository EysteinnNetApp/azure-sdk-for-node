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
 * This is the storage profile of a gallery image version.
 *
 */
class GalleryImageVersionStorageProfile {
  /**
   * Create a GalleryImageVersionStorageProfile.
   * @member {object} [osDiskImage]
   * @member {array} [dataDiskImages] A list of data disk images.
   */
  constructor() {
  }

  /**
   * Defines the metadata of GalleryImageVersionStorageProfile
   *
   * @returns {object} metadata of GalleryImageVersionStorageProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GalleryImageVersionStorageProfile',
      type: {
        name: 'Composite',
        className: 'GalleryImageVersionStorageProfile',
        modelProperties: {
          osDiskImage: {
            required: false,
            serializedName: 'osDiskImage',
            type: {
              name: 'Composite',
              className: 'GalleryOSDiskImage'
            }
          },
          dataDiskImages: {
            required: false,
            serializedName: 'dataDiskImages',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GalleryDataDiskImageElementType',
                  type: {
                    name: 'Composite',
                    className: 'GalleryDataDiskImage'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GalleryImageVersionStorageProfile;