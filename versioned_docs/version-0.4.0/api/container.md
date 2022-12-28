---
sidebar_position: 1
title: Container API
---

### `bind(type, options)`

Binds a type. The container takes any binding associated to that type and process it. Optionally, it receives an options parameter:

| Property    | Description                    | Type                                                         |
| :---        | :----:                         | :---:                                                        |
| scope       | Binding scope to apply         | BindingScope    |

### `bindToValue(options)`

Binds a value. The options parameter is described as follows:

| Property    | Description                    | Type                                                         |
| :---        | :----:                         | :---:                                                        |
| serviceId   | Service id to associate        | number \| string \| symbol                                   |
| tags        | Tags to associate              | number \| string \| symbol \| (number \| string \| symbol)[] |
| value       | Value to bind                  | unknown                                                      |

:::note

Values are always bound in singleton scope

:::

### `get(serviceId)`

Returns a service by its id. If necessary, the service is instantiated.

Consider the [binding](../concepts/binding.md) page as reference to know more about instance details.

### `getByTag(tag)`

Returns all the services associated to a tag. If necessary, services are instantiated.

### `getAllBindinds()`

Returns all the bindings registered in the container.

### `load(containerModule)`

Loads a container module.

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

### `loadMetadata(containerModuleMetadata)`

Loads container module metadata

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
        containerModuleBindingService.bindToValue({
          serviceId: 'service-id',
          value: someServiceDependency.someValue,
        });
      }
    }),
    imports: [someContainerModuleMetadataDependency],
    injects: [Dependency],
  }

  await container.loadMetadata(containerModuleMetadata);
}
 
```

### `unbind(serviceId)`

Unbinds a bound service by its id.
