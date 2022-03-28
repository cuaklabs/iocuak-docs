---
sidebar_position: 2
title: Binding a service
---

Services can be easily bound to the container calling it directly.

```ts
import { Container } from '@cuaklabs/iocuak';

class Dummy {}

const container: Container = Container.build();
container.bind(Dummy);

```

Services can also be bound through a `ContainerModule`:

```ts
import { ContainerModule, ContainerService } from '@cuaklabs/iocuak';

const container: Container = Container.build();

const containerModule: ContainerModule = {
  load: (container: ContainerService): void => {
      container.bind(Dummy);
  },
};

container.load(containerModule);
```
