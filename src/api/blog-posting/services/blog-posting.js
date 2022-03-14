'use strict';

/**
 * blog-posting service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-posting.blog-posting');
