---
sidebar_position: 2
title: inject
---

This decorator targets a property or a parameter and provides the service associated.

```ts
import { inject } from '@cuaklabs/iocuak';

import { dummyFooServiceId } from 'some/path';

class Dummy {
  @inject(dummyFooServiceId)
  public foo: unknown;
}

```
