---
sidebar_position: 3
title: The injectFromBase decorator
---

`@injectabe` and `@inject` metadata is not propagated to child classes. The purpose of `@injectFromBase` decorator exists for that purpose.

```ts
import { inject, injectable } from '@cuaklabs/iocuak';

import { dummyFooServiceId, dummyBarServiceId } from 'some/path';

@injectable()
class Dummy {
  @inject(dummyFooServiceId)
  public foo: unknown;
}

/*
 * @injectFromBase() allows DummyChild to have a foo property with
 * the same metadata as if decorated with @inject(dummyFooServiceId
 */

@injectable()
@injectFromBase()
class DummyChild extends Dummy {
  @inject(dummyBarServiceId)
  public bar: unknown;
}

```