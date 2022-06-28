---
sidebar_position: 2
title: Metadata provider
---

The `MetadataProvider` class is provided to easily extract metadata of a given type

## `getBindingMetadata(type)`

Provides binding metadata associated to that type.

:::note

Values (bound by `Container.bindToValue()`) do not have metadata directly associated. Those bindings can be accessed via `Container.getAllBindings()`.

:::

```ts
import {
  inject,
  injectable,
  BindingScope,
  ClassMetadata,
  MetadataProvider,
  TypeBinding,
} from '@cuaklabs/iocuak';

import { dummyDummyServiceId, dummyFooServiceId } from 'some/path';

@injectable({
  id: dummyDummyServiceId,
  scope: BindingScope.singleton,
})
class Dummy {
  @inject(dummyFooServiceId)
  public foo: unknown;
}

const metadataProvider: MetadataProvider = new MetadataProvider();

const typeBindingMetadata: TypeBinding<MetadataProvider, []> = metadataProvider.getBindingMetadata(Dummy);
```

## `getClassMetadata(type)`

Provides class metadata associated to that type.

```ts
import {
  inject,
  injectable,
  BindingScope,
  ClassMetadata,
  MetadataProvider,
  TypeBinding,
} from '@cuaklabs/iocuak';

import { dummyDummyServiceId, dummyFooServiceId } from 'some/path';

@injectable({
  id: dummyDummyServiceId,
  scope: BindingScope.singleton,
})
class Dummy {
  @inject(dummyFooServiceId)
  public foo: unknown;
}

const metadataProvider: MetadataProvider = new MetadataProvider();

const classMetadata: ClassMetadata = metadataProvider.getClassMetadata(Dummy);
```
