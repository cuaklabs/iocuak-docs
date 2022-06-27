---
sidebar_position: 1
title: Binding
---

Represents a relation between an injectable element and a binding context. The binding contain things such as the scope of a service or the value of the service. Whenever a service is requested, its binding is read to know what to inject and how to inject the service. Any binding has these properties:

| Property    | Description                                                                                               | Type                         |
| :---        | :----:                                                                                                    | :---:                        |
| id          | Service id. Any attempt to create a service matching this service id is going to use this binding.        | number \| string \| symbol   |
| tags        | Tags associated. Any attempt to create a service matching one of these tags is going to use this binding. | number \| string \| symbol   |

There are two kinds of bindings:

## TypeBinding

A class based binding. A type binding relies on a class constructor to instantiate the service.

| Property    | Description                                                                                               | Type                         |
| :---        | :----:                                                                                                    | :---:                        |
| scope       | Binding scope to determine wheter or not a service should be reused.                                      | BindingScope                 |
| type        | Class to be used to call its constructor                                                                  | Newable                      |

### Binding scope

When the container creates an instance, it may reuse an existing instance instead if its scope allows it. These are the current scopes of a binding:

- Transient: An instance of this service is never reused.
- Request: An instance of this service is reused if service is requested under the same `Container.get` request.

**Example**: Given the services `A`, `B` and `C`, both `A` and `B` services depends on `C`. In addition, `A` services depends on `B`. If `C` is injected on request scope, a request to the `A` service results in the same `C` instance being injected to both `A` and `B` services.

- Singleton: An instance of this service is allways reused.
