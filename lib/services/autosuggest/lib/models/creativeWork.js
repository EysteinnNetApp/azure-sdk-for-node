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
 * The most generic kind of creative work, including books, movies,
 * photographs, software programs, etc.
 *
 * @extends models['Thing']
 */
class CreativeWork extends models['Thing'] {
  /**
   * Create a CreativeWork.
   * @member {array} [about] For internal use only.
   * @member {array} [mentions] For internal use only.
   * @member {array} [provider] The source of the creative work.
   * @member {object} [creator]
   * @member {string} [creator.name] The name of the thing represented by this
   * object.
   * @member {string} [creator.description] A short description of the item.
   * @member {string} [creator.wikipediaId]
   * @member {string} [creator.freebaseId]
   * @member {string} [creator.alternateName] An alias for the item
   * @member {string} [creator.bingId] An ID that uniquely identifies this
   * item.
   * @member {string} [creator.satoriId]
   * @member {string} [creator.ypId]
   * @member {string} [text] Text content of this creative work
   * @member {number} [commentCount]
   * @member {object} [mainEntity]
   * @member {string} [mainEntity.name] The name of the thing represented by
   * this object.
   * @member {string} [mainEntity.description] A short description of the item.
   * @member {string} [mainEntity.wikipediaId]
   * @member {string} [mainEntity.freebaseId]
   * @member {string} [mainEntity.alternateName] An alias for the item
   * @member {string} [mainEntity.bingId] An ID that uniquely identifies this
   * item.
   * @member {string} [mainEntity.satoriId]
   * @member {string} [mainEntity.ypId]
   * @member {string} [headLine]
   * @member {object} [copyrightHolder]
   * @member {string} [copyrightHolder.name] The name of the thing represented
   * by this object.
   * @member {string} [copyrightHolder.description] A short description of the
   * item.
   * @member {string} [copyrightHolder.wikipediaId]
   * @member {string} [copyrightHolder.freebaseId]
   * @member {string} [copyrightHolder.alternateName] An alias for the item
   * @member {string} [copyrightHolder.bingId] An ID that uniquely identifies
   * this item.
   * @member {string} [copyrightHolder.satoriId]
   * @member {string} [copyrightHolder.ypId]
   * @member {number} [copyrightYear]
   * @member {string} [disclaimer]
   * @member {boolean} [isAccessibleForFree]
   * @member {array} [genre]
   * @member {boolean} [isFamilyFriendly]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CreativeWork
   *
   * @returns {object} metadata of CreativeWork
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreativeWork',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'CreativeWork',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          potentialAction: {
            required: false,
            readOnly: true,
            serializedName: 'potentialAction',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActionElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Action'
                  }
              }
            }
          },
          immediateAction: {
            required: false,
            readOnly: true,
            serializedName: 'immediateAction',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActionElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Action'
                  }
              }
            }
          },
          adaptiveCard: {
            required: false,
            readOnly: true,
            serializedName: 'adaptiveCard',
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
          description: {
            required: false,
            readOnly: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          wikipediaId: {
            required: false,
            readOnly: true,
            serializedName: 'wikipediaId',
            type: {
              name: 'String'
            }
          },
          freebaseId: {
            required: false,
            readOnly: true,
            serializedName: 'freebaseId',
            type: {
              name: 'String'
            }
          },
          alternateName: {
            required: false,
            readOnly: true,
            serializedName: 'alternateName',
            type: {
              name: 'String'
            }
          },
          bingId: {
            required: false,
            readOnly: true,
            serializedName: 'bingId',
            type: {
              name: 'String'
            }
          },
          satoriId: {
            required: false,
            readOnly: true,
            serializedName: 'satoriId',
            type: {
              name: 'String'
            }
          },
          ypId: {
            required: false,
            readOnly: true,
            serializedName: 'ypId',
            type: {
              name: 'String'
            }
          },
          about: {
            required: false,
            readOnly: true,
            serializedName: 'about',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ThingElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Thing'
                  }
              }
            }
          },
          mentions: {
            required: false,
            readOnly: true,
            serializedName: 'mentions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ThingElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Thing'
                  }
              }
            }
          },
          provider: {
            required: false,
            readOnly: true,
            serializedName: 'provider',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ThingElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Thing'
                  }
              }
            }
          },
          creator: {
            required: false,
            readOnly: true,
            serializedName: 'creator',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'Thing'
            }
          },
          text: {
            required: false,
            readOnly: true,
            serializedName: 'text',
            type: {
              name: 'String'
            }
          },
          commentCount: {
            required: false,
            readOnly: true,
            serializedName: 'commentCount',
            type: {
              name: 'Number'
            }
          },
          mainEntity: {
            required: false,
            readOnly: true,
            serializedName: 'mainEntity',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'Thing'
            }
          },
          headLine: {
            required: false,
            readOnly: true,
            serializedName: 'headLine',
            type: {
              name: 'String'
            }
          },
          copyrightHolder: {
            required: false,
            readOnly: true,
            serializedName: 'copyrightHolder',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'Thing'
            }
          },
          copyrightYear: {
            required: false,
            readOnly: true,
            serializedName: 'copyrightYear',
            type: {
              name: 'Number'
            }
          },
          disclaimer: {
            required: false,
            readOnly: true,
            serializedName: 'disclaimer',
            type: {
              name: 'String'
            }
          },
          isAccessibleForFree: {
            required: false,
            readOnly: true,
            serializedName: 'isAccessibleForFree',
            type: {
              name: 'Boolean'
            }
          },
          genre: {
            required: false,
            readOnly: true,
            serializedName: 'genre',
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
          isFamilyFriendly: {
            required: false,
            readOnly: true,
            serializedName: 'isFamilyFriendly',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = CreativeWork;