"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":"unreleased","badge":true,"className":"docs-version-current","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Tutorial","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/iocuak-docs/docs/next/tutorial/introduction","docId":"tutorial/introduction"},{"type":"category","label":"Decorating classes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"The injectable decorator","href":"/iocuak-docs/docs/next/tutorial/decorating-classes/injectable-decorator","docId":"tutorial/decorating-classes/injectable-decorator"},{"type":"link","label":"The inject decorator","href":"/iocuak-docs/docs/next/tutorial/decorating-classes/inject-decorator","docId":"tutorial/decorating-classes/inject-decorator"},{"type":"link","label":"The injectTag decorator","href":"/iocuak-docs/docs/next/tutorial/decorating-classes/inject-tag-decorator","docId":"tutorial/decorating-classes/inject-tag-decorator"},{"type":"link","label":"The injectFromBase decorator","href":"/iocuak-docs/docs/next/tutorial/decorating-classes/injectFromBase-decorator","docId":"tutorial/decorating-classes/injectFromBase-decorator"}]},{"type":"category","label":"The container object","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/iocuak-docs/docs/next/tutorial/the-container-object/introduction","docId":"tutorial/the-container-object/introduction"},{"type":"link","label":"Binding a service","href":"/iocuak-docs/docs/next/tutorial/the-container-object/binding-a-service","docId":"tutorial/the-container-object/binding-a-service"},{"type":"link","label":"Creating instances","href":"/iocuak-docs/docs/next/tutorial/the-container-object/creating-instances","docId":"tutorial/the-container-object/creating-instances"},{"type":"link","label":"Child containers","href":"/iocuak-docs/docs/next/tutorial/the-container-object/child-containers","docId":"tutorial/the-container-object/child-containers"},{"type":"link","label":"Retrieving metadata","href":"/iocuak-docs/docs/next/tutorial/the-container-object/retrieving-metadata","docId":"tutorial/the-container-object/retrieving-metadata"}]},{"type":"category","label":"Container modules","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/iocuak-docs/docs/next/tutorial/container-modules/introduction","docId":"tutorial/container-modules/introduction"},{"type":"link","label":"Creating modules","href":"/iocuak-docs/docs/next/tutorial/container-modules/creating-modules","docId":"tutorial/container-modules/creating-modules"},{"type":"link","label":"Loading modules from metadata","href":"/iocuak-docs/docs/next/tutorial/container-modules/loading-modules-from-metadata","docId":"tutorial/container-modules/loading-modules-from-metadata"}]}]},{"type":"category","label":"Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Binding","href":"/iocuak-docs/docs/next/concepts/binding","docId":"concepts/binding"},{"type":"link","label":"Class metadata","href":"/iocuak-docs/docs/next/concepts/class-metadata","docId":"concepts/class-metadata"}]},{"type":"category","label":"API","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Metadata API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/iocuak-docs/docs/next/api/metadata-api/introduction","docId":"api/metadata-api/introduction"},{"type":"link","label":"Metadata provider","href":"/iocuak-docs/docs/next/api/metadata-api/metadata-provider","docId":"api/metadata-api/metadata-provider"}]}]}]},"docs":{"api/metadata-api/introduction":{"id":"api/metadata-api/introduction","title":"Introduction","description":"This library uses metadata to store service dependencies and scopes and provides an API to get metadata. This is commonly used to establish a bridge between iocuak and  other IoC libraries.","sidebar":"tutorialSidebar"},"api/metadata-api/metadata-provider":{"id":"api/metadata-api/metadata-provider","title":"Metadata provider","description":"The MetadataProvider class is provided to easily extract metadata of a given type","sidebar":"tutorialSidebar"},"concepts/binding":{"id":"concepts/binding","title":"Binding","description":"Represents a relation between an injectable element and a binding context. The binding contain things such as the scope of a service or the value of the service. Whenever a service is requested, its binding is read to know what to inject and how to inject the service. Any binding has these properties:","sidebar":"tutorialSidebar"},"concepts/class-metadata":{"id":"concepts/class-metadata","title":"Class metadata","description":"Represents a relation between an injectable element and its dependencies. Whenever a type service is attempted to be instantiated, it\'s class metadata is used to determine which services should be used as dependencies.","sidebar":"tutorialSidebar"},"tutorial/container-modules/creating-modules":{"id":"tutorial/container-modules/creating-modules","title":"Creating modules","description":"A container module declares a load method receiving a ContainerModuleBindingService. This service allows us to bind types and values.","sidebar":"tutorialSidebar"},"tutorial/container-modules/introduction":{"id":"tutorial/container-modules/introduction","title":"Introduction","description":"Dependency injection is more than just adding a bunch of bindings. Sometimes binding logic should be splitted for maintainability purposes. Sometimes binding logic can be used to generate services related to existing ones. Container modules are the key for accomplishing those tasks.","sidebar":"tutorialSidebar"},"tutorial/container-modules/loading-modules-from-metadata":{"id":"tutorial/container-modules/loading-modules-from-metadata","title":"Loading modules from metadata","description":"Some more complex scenarios could require containers to be injected in a certain order. Some others could require certain dependencies to perform bindings, such as config to establish a connection to a database.","sidebar":"tutorialSidebar"},"tutorial/decorating-classes/inject-decorator":{"id":"tutorial/decorating-classes/inject-decorator","title":"The inject decorator","description":"This decorator targets a property or a parameter and provides the service associated.","sidebar":"tutorialSidebar"},"tutorial/decorating-classes/inject-tag-decorator":{"id":"tutorial/decorating-classes/inject-tag-decorator","title":"The injectTag decorator","description":"This decorator targets a property or a parameter and provides the services associated to that tag.","sidebar":"tutorialSidebar"},"tutorial/decorating-classes/injectable-decorator":{"id":"tutorial/decorating-classes/injectable-decorator","title":"The injectable decorator","description":"This decorator targets a class and allows to provide options to set its binding.","sidebar":"tutorialSidebar"},"tutorial/decorating-classes/injectFromBase-decorator":{"id":"tutorial/decorating-classes/injectFromBase-decorator","title":"The injectFromBase decorator","description":"@injectabe and @inject metadata is not propagated to child classes. The purpose of @injectFromBase decorator exists for that purpose.","sidebar":"tutorialSidebar"},"tutorial/introduction":{"id":"tutorial/introduction","title":"Introduction","description":"Are you an OOP paradigm lover? Me too. Have you ever called a constructor with tons of dependencies with tons of dependencies? Me too, that was before using IoC techniques.","sidebar":"tutorialSidebar"},"tutorial/the-container-object/binding-a-service":{"id":"tutorial/the-container-object/binding-a-service","title":"Binding a service","description":"Services can be easily bound to the container calling it directly.","sidebar":"tutorialSidebar"},"tutorial/the-container-object/child-containers":{"id":"tutorial/the-container-object/child-containers","title":"Child containers","description":"Sometimes you want a container similar than a certain one. Container provides a createChild method which creates a container whose binding servide falls back to its parent. This way it\'s possible to extend containers.","sidebar":"tutorialSidebar"},"tutorial/the-container-object/creating-instances":{"id":"tutorial/the-container-object/creating-instances","title":"Creating instances","description":"Once a service and all its dependencies are bound, its possible to create an instance if all the classes involved are properly decorated","sidebar":"tutorialSidebar"},"tutorial/the-container-object/introduction":{"id":"tutorial/the-container-object/introduction","title":"Introduction","description":"The core of this library is the IoC container. It allows you to bind services and create instances based on those bindings.","sidebar":"tutorialSidebar"},"tutorial/the-container-object/retrieving-metadata":{"id":"tutorial/the-container-object/retrieving-metadata","title":"Retrieving metadata","description":"After releasing the metadata API, Container provides a new getAllBindinds method to retrieve all its registered Bindings.","sidebar":"tutorialSidebar"}}}')}}]);