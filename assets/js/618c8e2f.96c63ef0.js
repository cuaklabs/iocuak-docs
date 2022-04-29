"use strict";(self.webpackChunkiocuak_docs=self.webpackChunkiocuak_docs||[]).push([[3701],{1608:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"0.1.0","label":"0.1.0","banner":"unmaintained","badge":true,"className":"docs-version-0.1.0","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/iocuak-docs/docs/0.1.0/introduction","docId":"introduction"},{"type":"category","label":"Tutorial - Decorating classes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"The injectable decorator","href":"/iocuak-docs/docs/0.1.0/decorating-classes/injectable-decorator","docId":"decorating-classes/injectable-decorator"},{"type":"link","label":"The inject decorator","href":"/iocuak-docs/docs/0.1.0/decorating-classes/inject-decorator","docId":"decorating-classes/inject-decorator"},{"type":"link","label":"The injectFromBase decorator","href":"/iocuak-docs/docs/0.1.0/decorating-classes/injectFromBase-decorator","docId":"decorating-classes/injectFromBase-decorator"}]},{"type":"category","label":"Tutorial - The container object","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/iocuak-docs/docs/0.1.0/the-container-object/introduction","docId":"the-container-object/introduction"},{"type":"link","label":"Binding a service","href":"/iocuak-docs/docs/0.1.0/the-container-object/binding-a-service","docId":"the-container-object/binding-a-service"},{"type":"link","label":"Creating instances","href":"/iocuak-docs/docs/0.1.0/the-container-object/creating-instances","docId":"the-container-object/creating-instances"},{"type":"link","label":"Child containers","href":"/iocuak-docs/docs/0.1.0/the-container-object/child-containers","docId":"the-container-object/child-containers"},{"type":"link","label":"Retrieving metadata","href":"/iocuak-docs/docs/0.1.0/the-container-object/retrieving-metadata","docId":"the-container-object/retrieving-metadata"}]},{"type":"category","label":"Metadata API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/iocuak-docs/docs/0.1.0/metadata-api/introduction","docId":"metadata-api/introduction"},{"type":"link","label":"Binding metadata","href":"/iocuak-docs/docs/0.1.0/metadata-api/binding","docId":"metadata-api/binding"},{"type":"link","label":"ClassMetadata metadata","href":"/iocuak-docs/docs/0.1.0/metadata-api/class-metadata","docId":"metadata-api/class-metadata"},{"type":"link","label":"Metadata provider","href":"/iocuak-docs/docs/0.1.0/metadata-api/metadata-provider","docId":"metadata-api/metadata-provider"}]}]},"docs":{"decorating-classes/inject-decorator":{"id":"decorating-classes/inject-decorator","title":"The inject decorator","description":"This decorator targets a property or a parameter and provides the service id associated to that property or parameter.","sidebar":"tutorialSidebar"},"decorating-classes/injectable-decorator":{"id":"decorating-classes/injectable-decorator","title":"The injectable decorator","description":"This decorator targets a class and allows to provide metadata about it.","sidebar":"tutorialSidebar"},"decorating-classes/injectFromBase-decorator":{"id":"decorating-classes/injectFromBase-decorator","title":"The injectFromBase decorator","description":"@injectabe and @inject metadata is not propagated to child classes. The purpose of @injectFromBase decorator exists for that purpose.","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"Are you an OOP paradigm lover? Me too. Have you ever called a constructor with tons of dependencies with tons of dependencies? Me too, that was before using IoC techniques.","sidebar":"tutorialSidebar"},"metadata-api/binding":{"id":"metadata-api/binding","title":"Binding metadata","description":"The Binding metadata provides a relation between an injectable element and a binding context. There are two kinds of Binding metadata:","sidebar":"tutorialSidebar"},"metadata-api/class-metadata":{"id":"metadata-api/class-metadata","title":"ClassMetadata metadata","description":"The ClassMetadata metadata provides a relation between an injectable element and its dependencies:","sidebar":"tutorialSidebar"},"metadata-api/introduction":{"id":"metadata-api/introduction","title":"Introduction","description":"This library uses metadata to store service dependencies and scopes and provides an API to get metadata. This is commonly used to establish a bridge between iocuak and  other IoC libraries.","sidebar":"tutorialSidebar"},"metadata-api/metadata-provider":{"id":"metadata-api/metadata-provider","title":"Metadata provider","description":"The MetadataProvider class is provided to easily extract metadata of a given type","sidebar":"tutorialSidebar"},"the-container-object/binding-a-service":{"id":"the-container-object/binding-a-service","title":"Binding a service","description":"Services can be easily bound to the container calling it directly.","sidebar":"tutorialSidebar"},"the-container-object/child-containers":{"id":"the-container-object/child-containers","title":"Child containers","description":"Sometimes you want a container similar than a certain one. Container provides a createChild method which creates a container whose binding servide falls back to its parent. This way it\'s possible to extend containers.","sidebar":"tutorialSidebar"},"the-container-object/creating-instances":{"id":"the-container-object/creating-instances","title":"Creating instances","description":"Once a service and all its dependencies are bound, its possible to create an instance if all the classes involved are properly decorated","sidebar":"tutorialSidebar"},"the-container-object/introduction":{"id":"the-container-object/introduction","title":"Introduction","description":"The core of this library is the IoC container. It allows you to bind services and create instances based on those bindings.","sidebar":"tutorialSidebar"},"the-container-object/retrieving-metadata":{"id":"the-container-object/retrieving-metadata","title":"Retrieving metadata","description":"After releasing the metadata API, Container provides a new getAllBindinds method to retrieve all its registered Bindings.","sidebar":"tutorialSidebar"}}}')}}]);