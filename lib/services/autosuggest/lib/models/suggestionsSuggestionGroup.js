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
 * Class representing a SuggestionsSuggestionGroup.
 */
class SuggestionsSuggestionGroup {
  /**
   * Create a SuggestionsSuggestionGroup.
   * @member {string} name Possible values include: 'Unknown', 'Web',
   * 'StoreApps', 'SearchHistory', 'PersonalSearchDocuments',
   * 'PersonalSearchTags', 'Custom'. Default value: 'Unknown' .
   * @member {array} searchSuggestions
   */
  constructor() {
  }

  /**
   * Defines the metadata of SuggestionsSuggestionGroup
   *
   * @returns {object} metadata of SuggestionsSuggestionGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Suggestions/SuggestionGroup',
      type: {
        name: 'Composite',
        className: 'SuggestionsSuggestionGroup',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            defaultValue: 'Unknown',
            type: {
              name: 'String'
            }
          },
          searchSuggestions: {
            required: true,
            serializedName: 'searchSuggestions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SearchActionElementType',
                  type: {
                    name: 'Composite',
                    className: 'SearchAction'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = SuggestionsSuggestionGroup;