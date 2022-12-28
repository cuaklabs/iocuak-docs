---
sidebar_position: 2
title: Creating modules
---

A container module declares a `load` method receiving a `ContainerModuleBindingService`. This service allows us to bind types and values.

```ts
import { ContainerModule, ContainerModuleBindingService } from '@cuaklabs/iocuak';

const container: Container = Container.build();

const containerModule: ContainerModule = {
  load: (containerModuleBindingService: ContainerModuleBindingService): void => {
      containerModuleBindingService.bind(Dummy);
  },
};

container.load(containerModule);
```

This way different service bindings can be grouped.
