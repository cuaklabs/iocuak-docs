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

```

:::info

Consider [binding docs](../../concepts/binding) as reference.

:::
