/**
 * This file is part of pigalle.registries.routes
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module routes-registry
 * @description A store for routing of the Pigalle framework.
 * @example
 *
 * const {RoutesRegistry} = require('@pigalle/registries.routes')
 * const {HttpRouteEntity} = require('@pigalle/entities.route.http')
 *
 * const products = ['gold coin', 'apple', 'orange', 'strawberry']
 *
 * const routesRegistry = RoutesRegistry.factory()
 *
 * const getProducts = HttpRouteEntity.factory('/products', 'GET', () => { return products });
 * const getFirstProducts = HttpRouteEntity.factory('/product/1', 'GET', () => { return products[0] });
 *
 * routesRegistry.add('getProducts', getProducts)
 *   .add('getFirstProducts', getFirstProducts)
 *
 */

const {RegistryBase} = require('@pigalle/registries.base')
const {RouteEntity} = require('@pigalle/entities.route')

/**
 * A store class for Pigalle framework routing.
 *
 * @class
 * @public
 */
class RoutesRegistry extends RegistryBase {

  /**
   * Create a new instance of {RouteMap}.
   * @param args {*} - The arguments.
   * @constructor
   * @public
   */
  constructor (...args) {
    super(RouteEntity, ...args)
  }
}

module.exports = {};
module.exports.RoutesRegistry = RoutesRegistry;
