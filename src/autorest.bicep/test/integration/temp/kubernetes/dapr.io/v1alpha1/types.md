# dapr.io @ v1alpha1

## Resource dapr.io/Component@v1alpha1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'dapr.io/v1alpha1' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **auth**: [IoDaprV1Alpha1ComponentAuth](#iodaprv1alpha1componentauth): Auth represents authentication details for the component
* **kind**: 'Component' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **scopes**: string[]: Array of IoDaprV1Alpha1ComponentScopesItem
* **spec**: [IoDaprV1Alpha1ComponentSpec](#iodaprv1alpha1componentspec): ComponentSpec is the spec for a component

## Resource dapr.io/Configuration@v1alpha1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'dapr.io/v1alpha1' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **kind**: 'Configuration' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **spec**: [IoDaprV1Alpha1ConfigurationSpec](#iodaprv1alpha1configurationspec): ConfigurationSpec is the spec for an configuration

## Resource dapr.io/Subscription@v1alpha1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'dapr.io/v1alpha1' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **kind**: 'Subscription' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **scopes**: string[]: Array of IoDaprV1Alpha1SubscriptionScopesItem
* **spec**: [IoDaprV1Alpha1SubscriptionSpec](#iodaprv1alpha1subscriptionspec): SubscriptionSpec is the spec for an event subscription

## IoDaprV1Alpha1ComponentAuth
### Properties
* **secretStore**: string (Required)

## IoDaprV1Alpha1ComponentSpec
### Properties
* **ignoreErrors**: bool
* **initTimeout**: string
* **metadata**: [IoDaprV1Alpha1ComponentSpecMetadataItem](#iodaprv1alpha1componentspecmetadataitem)[] (Required): Array of io.dapr.v1alpha1.Component-spec-metadataItem
* **type**: string (Required)
* **version**: string (Required)

## IoDaprV1Alpha1ComponentSpecMetadataItem
### Properties
* **name**: string (Required)
* **secretKeyRef**: [IoDaprV1Alpha1ComponentSpecMetadataItemSecretKeyRef](#iodaprv1alpha1componentspecmetadataitemsecretkeyref): SecretKeyRef is a reference to a secret holding the value for the metadata item. Name is the secret name, and key is the field in the secret.
* **value**: any: Anything

## IoDaprV1Alpha1ComponentSpecMetadataItemSecretKeyRef
### Properties
* **key**: string (Required)
* **name**: string (Required)

## IoDaprV1Alpha1ConfigurationSpec
### Properties
* **accessControl**: [IoDaprV1Alpha1ConfigurationSpecAccessControl](#iodaprv1alpha1configurationspecaccesscontrol): AccessControlSpec is the spec object in ConfigurationSpec
* **httpPipeline**: [IoDaprV1Alpha1ConfigurationSpecHttpPipeline](#iodaprv1alpha1configurationspechttppipeline): PipelineSpec defines the middleware pipeline
* **metric**: [IoDaprV1Alpha1ConfigurationSpecMetric](#iodaprv1alpha1configurationspecmetric): MetricSpec defines metrics configuration
* **mtls**: [IoDaprV1Alpha1ConfigurationSpecMtls](#iodaprv1alpha1configurationspecmtls): MTLSSpec defines mTLS configuration
* **secrets**: [IoDaprV1Alpha1ConfigurationSpecSecrets](#iodaprv1alpha1configurationspecsecrets): SecretsSpec is the spec for secrets configuration
* **tracing**: [IoDaprV1Alpha1ConfigurationSpecTracing](#iodaprv1alpha1configurationspectracing): TracingSpec is the spec object in ConfigurationSpec

## IoDaprV1Alpha1ConfigurationSpecAccessControl
### Properties
* **defaultAction**: string
* **policies**: [IoDaprV1Alpha1ConfigurationSpecAccessControlPoliciesItem](#iodaprv1alpha1configurationspecaccesscontrolpoliciesitem)[]: Array of io.dapr.v1alpha1.Configuration-spec-accessControl-policiesItem
* **trustDomain**: string

## IoDaprV1Alpha1ConfigurationSpecAccessControlPoliciesItem
### Properties
* **appId**: string (Required)
* **defaultAction**: string
* **namespace**: string
* **operations**: [IoDaprV1Alpha1ConfigurationSpecAccessControlPoliciesPropertiesItemsItem](#iodaprv1alpha1configurationspecaccesscontrolpoliciespropertiesitemsitem)[]: Array of io.dapr.v1alpha1.Configuration-spec-accessControl-policies-properties-itemsItem
* **trustDomain**: string

## IoDaprV1Alpha1ConfigurationSpecAccessControlPoliciesPropertiesItemsItem
### Properties
* **action**: string (Required)
* **httpVerb**: string[]: Array of IoDaprV1Alpha1ConfigurationSpecAccessControlPoliciesPropertiesItemsHttpVerbItem
* **name**: string (Required)

## IoDaprV1Alpha1ConfigurationSpecHttpPipeline
### Properties
* **handlers**: [IoDaprV1Alpha1ConfigurationSpecHttpPipelineHandlersItem](#iodaprv1alpha1configurationspechttppipelinehandlersitem)[] (Required): Array of io.dapr.v1alpha1.Configuration-spec-httpPipeline-handlersItem

## IoDaprV1Alpha1ConfigurationSpecHttpPipelineHandlersItem
### Properties
* **name**: string (Required)
* **selector**: [IoDaprV1Alpha1ConfigurationSpecHttpPipelineHandlersItemSelector](#iodaprv1alpha1configurationspechttppipelinehandlersitemselector): SelectorSpec selects target services to which the handler is to be applied
* **type**: string (Required)

## IoDaprV1Alpha1ConfigurationSpecHttpPipelineHandlersItemSelector
### Properties
* **fields**: [IoDaprV1Alpha1ConfigurationSpecHttpPipelineHandlersPropertiesItemsItem](#iodaprv1alpha1configurationspechttppipelinehandlerspropertiesitemsitem)[] (Required): Array of io.dapr.v1alpha1.Configuration-spec-httpPipeline-handlers-properties-properties-itemsItem

## IoDaprV1Alpha1ConfigurationSpecHttpPipelineHandlersPropertiesItemsItem
### Properties
* **field**: string (Required)
* **value**: string (Required)

## IoDaprV1Alpha1ConfigurationSpecMetric
### Properties
* **enabled**: bool (Required)

## IoDaprV1Alpha1ConfigurationSpecMtls
### Properties
* **allowedClockSkew**: string
* **enabled**: bool (Required)
* **workloadCertTTL**: string

## IoDaprV1Alpha1ConfigurationSpecSecrets
### Properties
* **scopes**: [IoDaprV1Alpha1ConfigurationSpecSecretsScopesItem](#iodaprv1alpha1configurationspecsecretsscopesitem)[] (Required): Array of io.dapr.v1alpha1.Configuration-spec-secrets-scopesItem

## IoDaprV1Alpha1ConfigurationSpecSecretsScopesItem
### Properties
* **allowedSecrets**: string[]: Array of IoDaprV1Alpha1ConfigurationSpecSecretsScopesPropertiesItemsItem
* **defaultAccess**: string
* **deniedSecrets**: string[]: Array of String
* **storeName**: string (Required)

## IoDaprV1Alpha1ConfigurationSpecTracing
### Properties
* **samplingRate**: string (Required)
* **zipkin**: [IoDaprV1Alpha1ConfigurationSpecTracingZipkin](#iodaprv1alpha1configurationspectracingzipkin): Defines the Zipkin trace configurations

## IoDaprV1Alpha1ConfigurationSpecTracingZipkin
### Properties
* **endpointAddress**: string: The endpoint address of Zipkin server to receive traces

## IoDaprV1Alpha1SubscriptionSpec
### Properties
* **pubsubname**: string (Required)
* **route**: string (Required)
* **topic**: string (Required)

## IoK8SApimachineryPkgApisMetaV1ManagedFieldsEntry
### Properties
* **apiVersion**: string: APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
* **fieldsType**: string: FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
* **fieldsV1**: any: Any object
* **manager**: string: Manager is an identifier of the workflow managing these fields.
* **operation**: string: Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
* **time**: string: Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.

## IoK8SApimachineryPkgApisMetaV1ObjectMeta
### Properties
* **annotations**: [IoK8SApimachineryPkgApisMetaV1ObjectMetaAnnotations](#iok8sapimachinerypkgapismetav1objectmetaannotations): Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
* **clusterName**: string: The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request.
* **creationTimestamp**: string (ReadOnly): Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* **deletionGracePeriodSeconds**: int (ReadOnly): Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
* **deletionTimestamp**: string (ReadOnly): Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* **finalizers**: string[]: Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
* **generation**: int (ReadOnly): A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
* **labels**: [IoK8SApimachineryPkgApisMetaV1ObjectMetaLabels](#iok8sapimachinerypkgapismetav1objectmetalabels): Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
* **managedFields**: [IoK8SApimachineryPkgApisMetaV1ManagedFieldsEntry](#iok8sapimachinerypkgapismetav1managedfieldsentry)[] (ReadOnly): ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
* **name**: string (Required, DeployTimeConstant, Identifier): Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
* **namespace**: string (DeployTimeConstant, Identifier): Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.

Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces
* **ownerReferences**: [IoK8SApimachineryPkgApisMetaV1OwnerReference](#iok8sapimachinerypkgapismetav1ownerreference)[]: List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
* **resourceVersion**: string (ReadOnly): An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.

Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
* **selfLink**: string (ReadOnly): SelfLink is a URL representing this object. Populated by the system. Read-only.

DEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release.
* **uid**: string (ReadOnly): UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.

Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids

## IoK8SApimachineryPkgApisMetaV1ObjectMetaAnnotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IoK8SApimachineryPkgApisMetaV1ObjectMetaLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IoK8SApimachineryPkgApisMetaV1OwnerReference
### Properties
* **apiVersion**: string (Required): API version of the referent.
* **blockOwnerDeletion**: bool: If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
* **controller**: bool: If true, this reference points to the managing controller.
* **kind**: string (Required): Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **name**: string (Required): Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
* **uid**: string (Required): UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids

