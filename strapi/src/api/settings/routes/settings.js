'use strict';

/**
 * settings router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::settings.settings');
