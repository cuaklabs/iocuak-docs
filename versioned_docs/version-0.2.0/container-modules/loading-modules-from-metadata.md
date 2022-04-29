---
sidebar_position: 2
title: Loading modules from metadata
---

Some more complex scenarios could require containers to be injected in a certain order. Some others could require certain dependencies to perform bindings, such as config to establish a connection to a database.

Container module metadata is provided for those purposes:

```ts
import {
  Container,
  ContainerModuleBindingService,
  ContainerModuleMetadata,
} from '@cuaklabs/iocuak';

import { someContainerModuleMetadataDependency } from 'some/path';

async function entryPoint(): Promise<void> {
  const container: Container = Container.build();

  const containerModuleMetadata: ContainerModuleMetadata = {
    factory: (someServiceDependency: Dependency) => ({
      load: (containerModuleBindingService: ContainerModuleBindingService) => {
        containerModuleBindingService.bindToValue(
          'service-id', containerModuleBindingService.someValue,
        );
      }
    }),
    imports: [someContainerModuleMetadataDependency],
    injects: [Dependency],
  }

  await container.loadMetadata(containerModuleMetadata);
}
 
```

This approach is highly inspired on [NestJs modules](https://docs.nestjs.com/fundamentals/dynamic-modules).
