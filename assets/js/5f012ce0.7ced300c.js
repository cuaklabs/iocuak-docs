"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[2945],{7805:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"0.3.0","label":"0.3.0","banner":null,"badge":true,"noIndex":false,"className":"docs-version-0.3.0","isLast":true,"docsSidebars":{"sidebar":[{"type":"category","label":"Tutorial","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/iocuak-docs/docs/tutorial/introduction","docId":"tutorial/introduction"},{"type":"category","label":"Decorating classes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"The injectable decorator","href":"/iocuak-docs/docs/tutorial/decorating-classes/injectable-decorator","docId":"tutorial/decorating-classes/injectable-decorator"},{"type":"link","label":"The inject decorator","href":"/iocuak-docs/docs/tutorial/decorating-classes/inject-decorator","docId":"tutorial/decorating-classes/inject-decorator"}]},{"type":"category","label":"The container object","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/iocuak-docs/docs/tutorial/the-container-object/introduction","docId":"tutorial/the-container-object/introduction"},{"type":"link","label":"Binding a service","href":"/iocuak-docs/docs/tutorial/the-container-object/binding-a-service","docId":"tutorial/the-container-object/binding-a-service"},{"type":"link","label":"Creating instances","href":"/iocuak-docs/docs/tutorial/the-container-object/creating-instances","docId":"tutorial/the-container-object/creating-instances"}]},{"type":"category","label":"Container modules","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/iocuak-docs/docs/tutorial/container-modules/introduction","docId":"tutorial/container-modules/introduction"},{"type":"link","label":"Creating modules","href":"/iocuak-docs/docs/tutorial/container-modules/creating-modules","docId":"tutorial/container-modules/creating-modules"},{"type":"link","label":"Loading modules from metadata","href":"/iocuak-docs/docs/tutorial/container-modules/loading-modules-from-metadata","docId":"tutorial/container-modules/loading-modules-from-metadata"}]}]},{"type":"category","label":"Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Binding","href":"/iocuak-docs/docs/concepts/binding","docId":"concepts/binding"},{"type":"link","label":"Class metadata","href":"/iocuak-docs/docs/concepts/class-metadata","docId":"concepts/class-metadata"}]},{"type":"category","label":"API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Container API","href":"/iocuak-docs/docs/api/container","docId":"api/container"},{"type":"category","label":"Injection API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"injectable","href":"/iocuak-docs/docs/api/injection/injectable-decorator","docId":"api/injection/injectable-decorator"},{"type":"link","label":"inject","href":"/iocuak-docs/docs/api/injection/inject-decorator","docId":"api/injection/inject-decorator"},{"type":"link","label":"injectTag","href":"/iocuak-docs/docs/api/injection/inject-tag-decorator","docId":"api/injection/inject-tag-decorator"},{"type":"link","label":"injectFromBase","href":"/iocuak-docs/docs/api/injection/injectFromBase-decorator","docId":"api/injection/injectFromBase-decorator"}]},{"type":"category","label":"Metadata API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/iocuak-docs/docs/api/metadata/introduction","docId":"api/metadata/introduction"},{"type":"link","label":"Metadata provider","href":"/iocuak-docs/docs/api/metadata/metadata-provider","docId":"api/metadata/metadata-provider"}]}]}]},"docs":{"api/container":{"id":"api/container","title":"Container API","description":"bind(type)","sidebar":"sidebar"},"api/injection/inject-decorator":{"id":"api/injection/inject-decorator","title":"inject","description":"This decorator targets a property or a parameter and provides the service associated.","sidebar":"sidebar"},"api/injection/inject-tag-decorator":{"id":"api/injection/inject-tag-decorator","title":"injectTag","description":"This decorator targets a property or a parameter and provides the services associated to that tag.","sidebar":"sidebar"},"api/injection/injectable-decorator":{"id":"api/injection/injectable-decorator","title":"injectable","description":"This decorator targets a class and allows to provide options to set its binding.","sidebar":"sidebar"},"api/injection/injectFromBase-decorator":{"id":"api/injection/injectFromBase-decorator","title":"injectFromBase","description":"@injectabe and @inject metadata are not propagated to child classes. @injectFromBase decorator exists for that purpose.","sidebar":"sidebar"},"api/metadata/introduction":{"id":"api/metadata/introduction","title":"Introduction","description":"This library uses metadata to store service dependencies and scopes and provides an API to get metadata. This is commonly used to establish a bridge between iocuak and  other IoC libraries.","sidebar":"sidebar"},"api/metadata/metadata-provider":{"id":"api/metadata/metadata-provider","title":"Metadata provider","description":"The MetadataProvider class is provided to easily extract metadata of a given type","sidebar":"sidebar"},"concepts/binding":{"id":"concepts/binding","title":"Binding","description":"Represents a relation between an injectable element and a binding context. The binding contain things such as the scope of a service or the value of the service. Whenever a service is requested, its binding is read to know what to inject and how to inject the service. Any binding has these properties:","sidebar":"sidebar"},"concepts/class-metadata":{"id":"concepts/class-metadata","title":"Class metadata","description":"Represents a relation between an injectable element and its dependencies. Whenever a type service is attempted to be instantiated, it\'s class metadata is used to determine which services should be used as dependencies.","sidebar":"sidebar"},"tutorial/container-modules/creating-modules":{"id":"tutorial/container-modules/creating-modules","title":"Creating modules","description":"A container module declares a load method receiving a ContainerModuleBindingService. This service allows us to bind types and values.","sidebar":"sidebar"},"tutorial/container-modules/introduction":{"id":"tutorial/container-modules/introduction","title":"Introduction","description":"Dependency injection is more than just adding a bunch of bindings. Sometimes binding logic should be splitted for maintainability purposes. Sometimes binding logic can be used to generate services related to existing ones. Container modules are the key for accomplishing those tasks.","sidebar":"sidebar"},"tutorial/container-modules/loading-modules-from-metadata":{"id":"tutorial/container-modules/loading-modules-from-metadata","title":"Loading modules from metadata","description":"Some more complex scenarios could require containers to be injected in a certain order. Some others could require certain dependencies to perform bindings, such as config to establish a connection to a database.","sidebar":"sidebar"},"tutorial/decorating-classes/inject-decorator":{"id":"tutorial/decorating-classes/inject-decorator","title":"The inject decorator","description":"This decorator targets a property or a parameter and provides the service associated.","sidebar":"sidebar"},"tutorial/decorating-classes/injectable-decorator":{"id":"tutorial/decorating-classes/injectable-decorator","title":"The injectable decorator","description":"This decorator targets a class and allows to provide options to set its binding.","sidebar":"sidebar"},"tutorial/introduction":{"id":"tutorial/introduction","title":"Introduction","description":"Are you an OOP paradigm lover? Me too. Have you ever called a constructor with tons of dependencies with tons of dependencies? Me too, that was before using IoC techniques.","sidebar":"sidebar"},"tutorial/the-container-object/binding-a-service":{"id":"tutorial/the-container-object/binding-a-service","title":"Binding a service","description":"Services can be easily bound to the container calling it directly.","sidebar":"sidebar"},"tutorial/the-container-object/creating-instances":{"id":"tutorial/the-container-object/creating-instances","title":"Creating instances","description":"Once a service and all its dependencies are bound, its possible to create an instance if all the classes involved are properly decorated","sidebar":"sidebar"},"tutorial/the-container-object/introduction":{"id":"tutorial/the-container-object/introduction","title":"Introduction","description":"The core of this library is the IoC container. It allows you to bind services and create instances based on those bindings.","sidebar":"sidebar"}}}')}}]);