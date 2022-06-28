---
sidebar_position: 1
title: injectable
---

This decorator targets a class and allows to provide options to set its binding.

```ts
import { injectable, BindingScope } from '@cuaklabs/iocuak';

/**
 * Foo is injectable on transient scope and its service id is the type Foo itself
 */
@injectable()
class Foo {}

const bazSymbol: symbol = Symbol();

/** 
 * Bar is injectable on request scope. Its service id is the bazSymbol symbol.
 * It's associated to the providers tag
 */
@injectable({
  id: bazSymbol,
  scope: BindingScope.request,
  tags: [providers]
})
class Baz {}
```

The options parameter is described as follows:

| Property    | Description                    | Type                                                         |
| :---        | :----:                         | :---:                                                        |
| serviceId   | Service id to associate        | number \| string \| symbol                                   |
| tags        | Tags to associate              | number \| string \| symbol \| (number \| string \| symbol)[] |
| scope       | Binding scope                  | BindingScope                                                 |

:::info

Consider [binding docs](../../concepts/binding) as reference.

:::
