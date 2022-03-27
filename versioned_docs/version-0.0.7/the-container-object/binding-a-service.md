---
sidebar_position: 2
title: Binding a service
---

Services can be easily bound to the container calling it directly.

```ts
import { ContainerApi } from '@cuaklabs/iocuak';

class Dummy {}

const containerApi: ContainerApi = new ContainerApi();
containerApi.bind(Dummy);

```

Services can also be bound through a `ContainerModuleApi`:

```ts
const containerModuleApi: ContainerModuleApi = {
  load: (container: ContainerApiService): void => {
      container.bind(Dummy);
  },
};

container.load(containerModuleApi);
```
