---
sidebar_position: 3
title: Creating instances
---

Once a service and all its dependencies are bound, its possible to create an instance if all the classes involved are properly decorated

```ts
import { Container, injectable } from '@cuaklabs/iocuak';

@injectable()
class Dummy {}

const container: Container = Container.build();
container.bind(Dummy);

const dummyInstance: Dummy = container.get(Dummy);
```
