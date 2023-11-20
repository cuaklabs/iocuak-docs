---
sidebar_position: 2
title: Class metadata
---

Represents a relation between an injectable element and its dependencies. Whenever a type service is attempted to be instantiated, it's class metadata is used to determine which services should be used as dependencies.

| Property             | Description                    | Type                                        |
| :---                 | :----:                         | :---:                                       |
| constructorArguments | Constructor arguments metadata | ClassElementMetadata                        |
| properties           | Properties metadata.           | Map\<string \| symbol, ClassElementMetadata\> |

## ClassElementMetadata

Class element metadata can be of two different kinds:

### ClassElementServiceIdMetadata

Represents a service dependency

| Property | Description                          | Type                             |
| :---     | :----:                               | :---:                            |
| type     | Class element metadata type          | ClassElementMetadatApi.serviceId |
| value    | Service id associated to the element | number \| string \| symbol       |

### ClassElementTagMetadataApi

Represents services associated to a tag dependency

| Property | Description                   | Type                       |
| :---     | :----:                        | :---:                      |
| type     | Class element metadata type   | ClassElementMetadatApi.tag |
| value    | Tag associated to the element | number \| string \| symbol |
