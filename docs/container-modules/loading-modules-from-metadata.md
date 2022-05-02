---
sidebar_position: 2
title: Loading modules from metadata
---

Some more complex scenarios could require containers to be injected in a certain order. Some others could require certain dependencies to perform bindings, such as config to establish a connection to a database.

Container module metadata is provided for those purposes.

### Container Module Factory Metatada

This approach uses a factory to create the module. This metadata can receive an `injects` property to receive injected dependencies.

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
          'service-id', someServiceDependency.someValue,
        );
      }
    }),
    imports: [someContainerModuleMetadataDependency],
    injects: [Dependency],
  }

  await container.loadMetadata(containerModuleMetadata);
}
 
```

Optionally, a container module to be loaded can be passed instead. This is equivalent to a factory metadata with no imports and a factory with no params that returns the module.

### Container Module Class Metadata

This approach receives a class which is used to create the module.

```ts
import {
  Container,
  ContainerModule,
  ContainerModuleBindingService,
  ContainerModuleMetadata,
} from '@cuaklabs/iocuak';

import { someContainerModuleMetadataDependency } from 'some/path';

@injectable()
class MyContainerModule implements ContainerModule {

  constructor(
    @inject(Dependency)
    public readonly someServiceDependency: Dependency,
  ) {}

  public load: (containerModuleBindingService: ContainerModuleBindingService) => {
    containerModuleBindingService.bindToValue(
      'service-id', someServiceDependency.someValue,
    );
  }
}

async function entryPoint(): Promise<void> {
  const container: Container = Container.build();

  const containerModuleMetadata: ContainerModuleMetadata = {
    imports: [someContainerModuleMetadataDependency],
    module: MyContainerModule,
  }

  await container.loadMetadata(containerModuleMetadata);
}
 
```

Optionally, a container module metadata class can be passed insted. This is equivalent to a metadata with the class as module and no imports.

This approach is highly inspired on [NestJs modules](https://docs.nestjs.com/fundamentals/dynamic-modules).
