'use strict';

/**
 *  blog-posting controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog-posting.blog-posting');
