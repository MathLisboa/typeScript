/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
/// <reference types="cypress" />

require("tsconfig-paths").register();
require("dotenv").config();

const baseUrls = require("../support/config/baseUrls.json");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on: any, config: any) => {
  config.env.ENVIRONMENT = process.env.ENVIRONMENT || "urlBase";

  config.baseUrl = baseUrls.web[config.env.ENVIRONMENT];
  return config;
};
