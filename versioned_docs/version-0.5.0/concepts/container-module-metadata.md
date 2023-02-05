---
sidebar_position: 3
title: Container module metadata
---

Represents configuration to build and load a container module.

`ContainerModuleMetadata` can be of four different different kinds:

### ContainerModuleFactoryMetadata

Represents a container module to be built using a factory.

| Property             | Description                               | Type                      |
| :---                 | :----:                                    | :---:                     |
| id                   | ContainerModuleMetadata id                | ContainerModuleMetadataId |
| imports              | Dependencies required to build the module | ContainerModuleMetadata[] |
| factory              | Function to build the module              | Function                  |
| injects              | Services to be passed as arguments        | ServiceId[]               |

### ContainerModuleClassMetadata

Represents a container module to be built using a decorated ContainerModule class.

| Property             | Description                               | Type                               |
| :---                 | :----:                                    | :---:                              |
| id                   | ContainerModuleMetadata id                | ContainerModuleMetadataId          |
| imports              | Dependencies required to build the module | ContainerModuleMetadata[]          |
| module               | ContainerModuleMetadaClass to be loaded   | Newable&#60ContainerModuleMetadata&#62 |

### ContainerModule

Represents a ContainerModule instance to be loaded. Equivalent to a `ContainerModuleFactoryMetadata` with a factory with no arguments returning the module.

### Newable&#60ContainerModule&#62

Represents a `ContainerModule` class to be instantiated in order to load a container module. Equivalent to a `ContainerModuleClassMetadata` with no the class as module.
