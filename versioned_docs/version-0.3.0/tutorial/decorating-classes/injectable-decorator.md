---
sidebar_position: 1
title: The injectable decorator
---

This decorator targets a class and allows to provide options to set its binding.

```ts
import { injectable, BindingScope } from '@cuaklabs/iocuak';

/**
 * Foo is injectable on transient scope and its service id is the type Foo itself
 */
@injectable()
class Foo {}

const barSymbol: symbol = Symbol();

/** 
 * Bar is injectable on singleton scope. Its service id is the barSymbol symbol
 */
@injectable({
  id: barSymbol,
  scope: BindingScope.singleton,
})
class Bar {}

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

:::info

Consider [binding docs](../../concepts/binding) as reference.

:::
