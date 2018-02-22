/**
 * This file is part of pigalle.routes.map
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const should = require('should');

const {RoutesStore} = require('../lib/index');
const {RouteBase} = require('@pigalle/routes.base');

const route = new RouteBase();

describe('Create an instance of {RoutesStore}', () =>  {

  it('should return a {RoutesStore} object', () => {
    (new RoutesStore()).should.be.an.instanceOf(RoutesStore);
  });

});

describe('Add a route', () => {

  it('using an invalid type should throw a {TypeError}', () => {
    (() => { new RoutesStore().set('key', 'value'); }).should.throw(TypeError);
  });

  it('using an valid {Route} should not throw an {Error}', () => {
    (() => { new RoutesStore().set('key', route); }).should.not.throw(Error);
  });
});
