---
sidebar_position: 3
title: injectTag
---

This decorator targets a property or a parameter and provides the services associated to that tag.

```ts
import { injectTag } from '@cuaklabs/iocuak';

import { dummyTag } from 'some/path';

class Dummy {
  @injectTag(dummyTag)
  public foo: unknown[];
}

```

Troperty `foo` is injected with the services associated to the `dummyTag` tag.
