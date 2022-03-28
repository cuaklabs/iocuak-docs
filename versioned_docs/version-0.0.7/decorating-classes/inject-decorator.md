---
sidebar_position: 2
title: The inject decorator
---

This decorator targets a property or a parameter and provides the service id associated to that property or parameter.

```ts
import { inject } from '@cuaklabs/iocuak';

import { dummyFooServiceId } from 'some/path';

class Dummy {
  @inject(dummyFooServiceId)
  public foo: unknown;
}

```

This way the IoC container knows the property `foo` should be injected with the service associated to `dummyFooServiceId`.
