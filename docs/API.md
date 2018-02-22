# API reference of :

A store for routing of the Pigalle framework.

---
&#x1F34E; **__Warning !__ Work in progress...**
---
## API

<a name="module_routes-registry"></a>

### routes-registry
A store for routing of the Pigalle framework.

**Example**  
```js
const {RoutesRegistry} = require('@pigalle/registries.routes')
const {HttpRouteEntity} = require('@pigalle/entities.route.http')

const products = ['gold coin', 'apple', 'orange', 'strawberry']

const routesRegistry = RoutesRegistry.factory()

const getProducts = HttpRouteEntity.factory('/products', 'GET', () => { return products });
const getFirstProducts = HttpRouteEntity.factory('/product/1', 'GET', () => { return products[0] });

routesRegistry.add('getProducts', getProducts)
  .add('getFirstProducts', getFirstProducts)
```

* [routes-registry](#module_routes-registry)
    * [~RoutesRegistry](#module_routes-registry..RoutesRegistry)
        * [new RoutesRegistry(...args)](#new_module_routes-registry..RoutesRegistry_new)

<a name="module_routes-registry..RoutesRegistry"></a>

#### routes-registry~RoutesRegistry
A store class for Pigalle framework routing.

**Kind**: inner class of [<code>routes-registry</code>](#module_routes-registry)  
**Access**: public  
<a name="new_module_routes-registry..RoutesRegistry_new"></a>

##### new RoutesRegistry(...args)
Create a new instance of {RouteMap}.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>\*</code> | The arguments. |

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

***

_Documentation generated on Thu, 22 Feb 2018 17:54:49 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
