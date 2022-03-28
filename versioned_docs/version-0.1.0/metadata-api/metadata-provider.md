---
sidebar_position: 4
title: Metadata provider
---

The `MetadataProvider` class is provided to easily extract metadata of a given type

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
const classMetadata: ClassMetadata = metadataProvider.getClassMetadata(Dummy);

```
