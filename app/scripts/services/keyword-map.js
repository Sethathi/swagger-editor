'use strict';

PhonicsApp.service('KeywordMap', function KeywordMap(defaults) {
  var map = {
    swagger: String,
    info: {
      version: String,
      title: String,
      description: String,
      contact: {
        name: String,
        url: String,
        email: String
      }
    },
    host: String,
    schemas: {

      // schema index (number)
      '.': String
    },
    basePath: String,
    produces: {
      '.': String
    },
    consumes: {
      '.': String
    },

    paths: {

      //path
      '.': {

        // operation
        '.': {
          summary: String,
          description: String,
          parameters: {

            // parameter index
            '.': {
              name: String,
              in: String,
              description: String,
              required: String,
              type: String,
              format: String
            }
          },

          responses: {

            // response code
            '.': {
              description: String,
              schema: {
                type: String
              }
            }
          },

          tags: {

            // Tag index
            '.': String
          }
        }
      }
    },

    definitions: {

      // Definition name
      '.': {
        properties: {

          // property name
          '.': String
        }
      }
    }
  };

  this.get = function () {
    var extension = angular.isObject(defaults.autocompleteExtension) ?
      defaults.autocompleteExtension : {};
    return _.extend(map, extension);
  };
});
