---
sidebar_position: 3
title: Creating instances
---

Once a service and all its dependencies are bound, its possible to create an instance if all the classes involved are properly decorated

```ts
import { ContainerApi, injectable } from '@cuaklabs/iocuak';

@injectable()
class Dummy {}

const containerApi: ContainerApi = ContainerApi.build();
containerApi.bind(Dummy);

const dummyInstance: Dummy = containerApi.get(Dummy);
```
