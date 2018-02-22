/**
 * This file is part of pigalle.routes.store
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module routes-store
 * @description A store for routing of the Pigalle framework.
 * @example
 *
 * const {}
 */

const {RegistryBase} = require('@pigalle/registries.base')

const {RouteBase} = require('@pigalle/routes.base')

/**
 * A store class for Pigalle framework routing.
 *
 * @class
 * @public
 */
class RoutesStore extends RegistryBase {

  /**
   * Create a new instance of {RouteMap}.
   * @param args {*} - The arguments.
   * @constructor
   * @public
   */
  constructor (...args) {
    super(RouteBase, ...args)
  }
}

module.exports = {};
module.exports.RoutesStore = RoutesStore;
