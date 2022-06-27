---
sidebar_position: 3
title: The injectTag decorator
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

This way the IoC container knows the property `foo` should be injected with the services associated to `dummyTag` tag.
