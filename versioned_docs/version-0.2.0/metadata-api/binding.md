---
sidebar_position: 2
title: Binding metadata
---

The `Binding` metadata provides a relation between an injectable element and a binding context. There are two kinds of `Binding` metadata:

- `TypeBinding` metadata: establish a relation between:
  - An injectable element: a type.
  - A binding context: a service id and a scope.

- `ValueBinding` metadata: establish a relation between:
  - An injectable element: an object.
  - A binding context: a service id.
