/**
 * This file is part of pigalle.registries.routes
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const should = require('should');

const {RoutesRegistry} = require('../lib/routes-registry');
const {RouteEntity} = require('@pigalle/entities.route');

const route = new RouteEntity();

describe('Create an instance of {RoutesRegistry}', () =>  {

  it('should return a {RoutesRegistry} object', () => {
    (new RoutesRegistry()).should.be.an.instanceOf(RoutesRegistry);
  });

});

describe('Add a route', () => {

  it('using an invalid type should throw a {Error}', () => {
    (() => { new RoutesRegistry().set('key', 'value'); }).should.throw(Error);
  });

  it('using an valid {Route} should not throw an {Error}', () => {
    (() => { new RoutesRegistry().set('key', route); }).should.not.throw(Error);
  });
});
