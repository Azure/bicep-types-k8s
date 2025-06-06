# resource.k8s.io @ v1alpha2

## Resource resource.k8s.io/PodSchedulingContext@v1alpha2
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'resource.k8s.io/v1alpha2' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **kind**: 'PodSchedulingContext' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **spec**: [IoK8SApiResourceV1Alpha2PodSchedulingContextSpec](#iok8sapiresourcev1alpha2podschedulingcontextspec) (Required): PodSchedulingContextSpec describes where resources for the Pod are needed.
* **status**: [IoK8SApiResourceV1Alpha2PodSchedulingContextStatus](#iok8sapiresourcev1alpha2podschedulingcontextstatus): PodSchedulingContextStatus describes where resources for the Pod can be allocated.

## Resource resource.k8s.io/ResourceClaim@v1alpha2
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'resource.k8s.io/v1alpha2' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **kind**: 'ResourceClaim' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **spec**: [IoK8SApiResourceV1Alpha2ResourceClaimSpec](#iok8sapiresourcev1alpha2resourceclaimspec) (Required): ResourceClaimSpec defines how a resource is to be allocated.
* **status**: [IoK8SApiResourceV1Alpha2ResourceClaimStatus](#iok8sapiresourcev1alpha2resourceclaimstatus): ResourceClaimStatus tracks whether the resource has been allocated and what the resulting attributes are.

## Resource resource.k8s.io/ResourceClaimParameters@v1alpha2
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'resource.k8s.io/v1alpha2' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **driverRequests**: [IoK8SApiResourceV1Alpha2DriverRequests](#iok8sapiresourcev1alpha2driverrequests)[]: DriverRequests describes all resources that are needed for the allocated claim. A single claim may use resources coming from different drivers. For each driver, this array has at most one entry which then may have one or more per-driver requests.

May be empty, in which case the claim can always be allocated.
* **generatedFrom**: [IoK8SApiResourceV1Alpha2ResourceClaimParametersReference](#iok8sapiresourcev1alpha2resourceclaimparametersreference): ResourceClaimParametersReference contains enough information to let you locate the parameters for a ResourceClaim. The object must be in the same namespace as the ResourceClaim.
* **kind**: 'ResourceClaimParameters' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **shareable**: bool: Shareable indicates whether the allocated claim is meant to be shareable by multiple consumers at the same time.

## Resource resource.k8s.io/ResourceClaimTemplate@v1alpha2
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'resource.k8s.io/v1alpha2' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **kind**: 'ResourceClaimTemplate' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **spec**: [IoK8SApiResourceV1Alpha2ResourceClaimTemplateSpec](#iok8sapiresourcev1alpha2resourceclaimtemplatespec) (Required): ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim.

## Resource resource.k8s.io/ResourceClass@v1alpha2
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'resource.k8s.io/v1alpha2' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **driverName**: string (Required): DriverName defines the name of the dynamic resource driver that is used for allocation of a ResourceClaim that uses this class.

Resource drivers have a unique name in forward domain order (acme.example.com).
* **kind**: 'ResourceClass' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **parametersRef**: [IoK8SApiResourceV1Alpha2ResourceClassParametersReference](#iok8sapiresourcev1alpha2resourceclassparametersreference): ResourceClassParametersReference contains enough information to let you locate the parameters for a ResourceClass.
* **structuredParameters**: bool: If and only if allocation of claims using this class is handled via structured parameters, then StructuredParameters must be set to true.
* **suitableNodes**: [IoK8SApiCoreV1NodeSelector](#iok8sapicorev1nodeselector): A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.

## Resource resource.k8s.io/ResourceClassParameters@v1alpha2
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'resource.k8s.io/v1alpha2' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **filters**: [IoK8SApiResourceV1Alpha2ResourceFilter](#iok8sapiresourcev1alpha2resourcefilter)[]: Filters describes additional contraints that must be met when using the class.
* **generatedFrom**: [IoK8SApiResourceV1Alpha2ResourceClassParametersReference](#iok8sapiresourcev1alpha2resourceclassparametersreference): ResourceClassParametersReference contains enough information to let you locate the parameters for a ResourceClass.
* **kind**: 'ResourceClassParameters' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **vendorParameters**: [IoK8SApiResourceV1Alpha2VendorParameters](#iok8sapiresourcev1alpha2vendorparameters)[]: VendorParameters are arbitrary setup parameters for all claims using this class. They are ignored while allocating the claim. There must not be more than one entry per driver.

## Resource resource.k8s.io/ResourceSlice@v1alpha2
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'resource.k8s.io/v1alpha2' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **driverName**: string (Required): DriverName identifies the DRA driver providing the capacity information. A field selector can be used to list only ResourceSlice objects with a certain driver name.
* **kind**: 'ResourceSlice' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **namedResources**: [IoK8SApiResourceV1Alpha2NamedResources](#iok8sapiresourcev1alpha2namedresources): NamedResourcesResources is used in ResourceModel.
* **nodeName**: string: NodeName identifies the node which provides the resources if they are local to a node.

A field selector can be used to list only ResourceSlice objects with a certain node name.

## IoK8SApiCoreV1NodeSelector
### Properties
* **nodeSelectorTerms**: [IoK8SApiCoreV1NodeSelectorTerm](#iok8sapicorev1nodeselectorterm)[] (Required): Required. A list of node selector terms. The terms are ORed.

## IoK8SApiCoreV1NodeSelectorRequirement
### Properties
* **key**: string (Required): The label key that the selector applies to.
* **operator**: string (Required): Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
* **values**: string[]: An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.

## IoK8SApiCoreV1NodeSelectorTerm
### Properties
* **matchExpressions**: [IoK8SApiCoreV1NodeSelectorRequirement](#iok8sapicorev1nodeselectorrequirement)[]: A list of node selector requirements by node's labels.
* **matchFields**: [IoK8SApiCoreV1NodeSelectorRequirement](#iok8sapicorev1nodeselectorrequirement)[]: A list of node selector requirements by node's fields.

## IoK8SApimachineryPkgApisMetaV1ManagedFieldsEntry
### Properties
* **apiVersion**: string: APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
* **fieldsType**: string: FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
* **fieldsV1**: any: Any object
* **manager**: string: Manager is an identifier of the workflow managing these fields.
* **operation**: string: Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
* **subresource**: string: Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
* **time**: string: Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.

## IoK8SApimachineryPkgApisMetaV1ObjectMeta
### Properties
* **annotations**: [IoK8SApimachineryPkgApisMetaV1ObjectMetaAnnotations](#iok8sapimachinerypkgapismetav1objectmetaannotations): Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
* **creationTimestamp**: string (ReadOnly): Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* **deletionGracePeriodSeconds**: int (ReadOnly): Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
* **deletionTimestamp**: string (ReadOnly): Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* **finalizers**: string[]: Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
* **generation**: int (ReadOnly): A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
* **labels**: [IoK8SApimachineryPkgApisMetaV1ObjectMetaLabels](#iok8sapimachinerypkgapismetav1objectmetalabels): Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
* **managedFields**: [IoK8SApimachineryPkgApisMetaV1ManagedFieldsEntry](#iok8sapimachinerypkgapismetav1managedfieldsentry)[] (ReadOnly): ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
* **name**: string (Required, DeployTimeConstant, Identifier): Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
* **namespace**: string (DeployTimeConstant, Identifier): Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.

Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
* **ownerReferences**: [IoK8SApimachineryPkgApisMetaV1OwnerReference](#iok8sapimachinerypkgapismetav1ownerreference)[]: List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
* **resourceVersion**: string (ReadOnly): An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.

Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
* **selfLink**: string (ReadOnly): Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
* **uid**: string (ReadOnly): UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.

Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids

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
* **blockOwnerDeletion**: bool: If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
* **controller**: bool: If true, this reference points to the managing controller.
* **kind**: string (Required): Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **name**: string (Required): Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
* **uid**: string (Required): UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids

## IoK8SApiResourceV1Alpha2AllocationResult
### Properties
* **availableOnNodes**: [IoK8SApiCoreV1NodeSelector](#iok8sapicorev1nodeselector): A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
* **resourceHandles**: [IoK8SApiResourceV1Alpha2ResourceHandle](#iok8sapiresourcev1alpha2resourcehandle)[]: ResourceHandles contain the state associated with an allocation that should be maintained throughout the lifetime of a claim. Each ResourceHandle contains data that should be passed to a specific kubelet plugin once it lands on a node. This data is returned by the driver after a successful allocation and is opaque to Kubernetes. Driver documentation may explain to users how to interpret this data if needed.

Setting this field is optional. It has a maximum size of 32 entries. If null (or empty), it is assumed this allocation will be processed by a single kubelet plugin with no ResourceHandle data attached. The name of the kubelet plugin invoked will match the DriverName set in the ResourceClaimStatus this AllocationResult is embedded in.
* **shareable**: bool: Shareable determines whether the resource supports more than one consumer at a time.

## IoK8SApiResourceV1Alpha2DriverAllocationResult
### Properties
* **namedResources**: [IoK8SApiResourceV1Alpha2NamedResourcesAllocationResult](#iok8sapiresourcev1alpha2namedresourcesallocationresult): NamedResourcesAllocationResult is used in AllocationResultModel.
* **vendorRequestParameters**: any: Any object

## IoK8SApiResourceV1Alpha2DriverRequests
### Properties
* **driverName**: string: DriverName is the name used by the DRA driver kubelet plugin.
* **requests**: [IoK8SApiResourceV1Alpha2ResourceRequest](#iok8sapiresourcev1alpha2resourcerequest)[]: Requests describes all resources that are needed from the driver.
* **vendorParameters**: any: Any object

## IoK8SApiResourceV1Alpha2NamedResources
### Properties
* **instances**: [IoK8SApiResourceV1Alpha2NamedResourcesInstance](#iok8sapiresourcev1alpha2namedresourcesinstance)[] (Required): The list of all individual resources instances currently available.

## IoK8SApiResourceV1Alpha2NamedResourcesAllocationResult
### Properties
* **name**: string (Required): Name is the name of the selected resource instance.

## IoK8SApiResourceV1Alpha2NamedResourcesAttribute
### Properties
* **bool**: bool: BoolValue is a true/false value.
* **int**: int: IntValue is a 64-bit integer.
* **intSlice**: [IoK8SApiResourceV1Alpha2NamedResourcesIntSlice](#iok8sapiresourcev1alpha2namedresourcesintslice): NamedResourcesIntSlice contains a slice of 64-bit integers.
* **name**: string (Required): Name is unique identifier among all resource instances managed by the driver on the node. It must be a DNS subdomain.
* **quantity**: string: Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.

The serialization format is:

``` <quantity>        ::= <signedNumber><suffix>

	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)

<digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei

	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)

<decimalSI>       ::= m | "" | k | M | G | T | P | E

	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)

<decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>

```

No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.

When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.

Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:

- No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.

The sign will be omitted unless the number is negative.

Examples:

- 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi"

Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.

Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)

This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
* **string**: string: StringValue is a string.
* **stringSlice**: [IoK8SApiResourceV1Alpha2NamedResourcesStringSlice](#iok8sapiresourcev1alpha2namedresourcesstringslice): NamedResourcesStringSlice contains a slice of strings.
* **version**: string: VersionValue is a semantic version according to semver.org spec 2.0.0.

## IoK8SApiResourceV1Alpha2NamedResourcesFilter
### Properties
* **selector**: string (Required): Selector is a CEL expression which must evaluate to true if a resource instance is suitable. The language is as defined in https://kubernetes.io/docs/reference/using-api/cel/

In addition, for each type NamedResourcesin AttributeValue there is a map that resolves to the corresponding value of the instance under evaluation. For example:

   attributes.quantity["a"].isGreaterThan(quantity("0")) &&
   attributes.stringslice["b"].isSorted()

## IoK8SApiResourceV1Alpha2NamedResourcesInstance
### Properties
* **attributes**: [IoK8SApiResourceV1Alpha2NamedResourcesAttribute](#iok8sapiresourcev1alpha2namedresourcesattribute)[]: Attributes defines the attributes of this resource instance. The name of each attribute must be unique.
* **name**: string (Required): Name is unique identifier among all resource instances managed by the driver on the node. It must be a DNS subdomain.

## IoK8SApiResourceV1Alpha2NamedResourcesIntSlice
### Properties
* **ints**: int[] (Required): Ints is the slice of 64-bit integers.

## IoK8SApiResourceV1Alpha2NamedResourcesRequest
### Properties
* **selector**: string (Required): Selector is a CEL expression which must evaluate to true if a resource instance is suitable. The language is as defined in https://kubernetes.io/docs/reference/using-api/cel/

In addition, for each type NamedResourcesin AttributeValue there is a map that resolves to the corresponding value of the instance under evaluation. For example:

   attributes.quantity["a"].isGreaterThan(quantity("0")) &&
   attributes.stringslice["b"].isSorted()

## IoK8SApiResourceV1Alpha2NamedResourcesStringSlice
### Properties
* **strings**: string[] (Required): Strings is the slice of strings.

## IoK8SApiResourceV1Alpha2PodSchedulingContextSpec
### Properties
* **potentialNodes**: string[]: PotentialNodes lists nodes where the Pod might be able to run.

The size of this field is limited to 128. This is large enough for many clusters. Larger clusters may need more attempts to find a node that suits all pending resources. This may get increased in the future, but not reduced.
* **selectedNode**: string: SelectedNode is the node for which allocation of ResourceClaims that are referenced by the Pod and that use "WaitForFirstConsumer" allocation is to be attempted.

## IoK8SApiResourceV1Alpha2PodSchedulingContextStatus
### Properties
* **resourceClaims**: [IoK8SApiResourceV1Alpha2ResourceClaimSchedulingStatus](#iok8sapiresourcev1alpha2resourceclaimschedulingstatus)[]: ResourceClaims describes resource availability for each pod.spec.resourceClaim entry where the corresponding ResourceClaim uses "WaitForFirstConsumer" allocation mode.

## IoK8SApiResourceV1Alpha2ResourceClaimConsumerReference
### Properties
* **apiGroup**: string: APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
* **name**: string (Required): Name is the name of resource being referenced.
* **resource**: string (Required): Resource is the type of resource being referenced, for example "pods".
* **uid**: string (Required): UID identifies exactly one incarnation of the resource.

## IoK8SApiResourceV1Alpha2ResourceClaimParametersReference
### Properties
* **apiGroup**: string: APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
* **kind**: string (Required): Kind is the type of resource being referenced. This is the same value as in the parameter object's metadata, for example "ConfigMap".
* **name**: string (Required): Name is the name of resource being referenced.

## IoK8SApiResourceV1Alpha2ResourceClaimSchedulingStatus
### Properties
* **name**: string: Name matches the pod.spec.resourceClaims[*].Name field.
* **unsuitableNodes**: string[]: UnsuitableNodes lists nodes that the ResourceClaim cannot be allocated for.

The size of this field is limited to 128, the same as for PodSchedulingSpec.PotentialNodes. This may get increased in the future, but not reduced.

## IoK8SApiResourceV1Alpha2ResourceClaimSpec
### Properties
* **allocationMode**: string: Allocation can start immediately or when a Pod wants to use the resource. "WaitForFirstConsumer" is the default.
* **parametersRef**: [IoK8SApiResourceV1Alpha2ResourceClaimParametersReference](#iok8sapiresourcev1alpha2resourceclaimparametersreference): ResourceClaimParametersReference contains enough information to let you locate the parameters for a ResourceClaim. The object must be in the same namespace as the ResourceClaim.
* **resourceClassName**: string (Required): ResourceClassName references the driver and additional parameters via the name of a ResourceClass that was created as part of the driver deployment.

## IoK8SApiResourceV1Alpha2ResourceClaimStatus
### Properties
* **allocation**: [IoK8SApiResourceV1Alpha2AllocationResult](#iok8sapiresourcev1alpha2allocationresult): AllocationResult contains attributes of an allocated resource.
* **deallocationRequested**: bool: DeallocationRequested indicates that a ResourceClaim is to be deallocated.

The driver then must deallocate this claim and reset the field together with clearing the Allocation field.

While DeallocationRequested is set, no new consumers may be added to ReservedFor.
* **driverName**: string: DriverName is a copy of the driver name from the ResourceClass at the time when allocation started.
* **reservedFor**: [IoK8SApiResourceV1Alpha2ResourceClaimConsumerReference](#iok8sapiresourcev1alpha2resourceclaimconsumerreference)[]: ReservedFor indicates which entities are currently allowed to use the claim. A Pod which references a ResourceClaim which is not reserved for that Pod will not be started.

There can be at most 32 such reservations. This may get increased in the future, but not reduced.

## IoK8SApiResourceV1Alpha2ResourceClaimTemplateSpec
### Properties
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **spec**: [IoK8SApiResourceV1Alpha2ResourceClaimSpec](#iok8sapiresourcev1alpha2resourceclaimspec) (Required): ResourceClaimSpec defines how a resource is to be allocated.

## IoK8SApiResourceV1Alpha2ResourceClassParametersReference
### Properties
* **apiGroup**: string: APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
* **kind**: string (Required): Kind is the type of resource being referenced. This is the same value as in the parameter object's metadata.
* **name**: string (Required): Name is the name of resource being referenced.
* **namespace**: string: Namespace that contains the referenced resource. Must be empty for cluster-scoped resources and non-empty for namespaced resources.

## IoK8SApiResourceV1Alpha2ResourceFilter
### Properties
* **driverName**: string: DriverName is the name used by the DRA driver kubelet plugin.
* **namedResources**: [IoK8SApiResourceV1Alpha2NamedResourcesFilter](#iok8sapiresourcev1alpha2namedresourcesfilter): NamedResourcesFilter is used in ResourceFilterModel.

## IoK8SApiResourceV1Alpha2ResourceHandle
### Properties
* **data**: string: Data contains the opaque data associated with this ResourceHandle. It is set by the controller component of the resource driver whose name matches the DriverName set in the ResourceClaimStatus this ResourceHandle is embedded in. It is set at allocation time and is intended for processing by the kubelet plugin whose name matches the DriverName set in this ResourceHandle.

The maximum size of this field is 16KiB. This may get increased in the future, but not reduced.
* **driverName**: string: DriverName specifies the name of the resource driver whose kubelet plugin should be invoked to process this ResourceHandle's data once it lands on a node. This may differ from the DriverName set in ResourceClaimStatus this ResourceHandle is embedded in.
* **structuredData**: [IoK8SApiResourceV1Alpha2StructuredResourceHandle](#iok8sapiresourcev1alpha2structuredresourcehandle): StructuredResourceHandle is the in-tree representation of the allocation result.

## IoK8SApiResourceV1Alpha2ResourceRequest
### Properties
* **namedResources**: [IoK8SApiResourceV1Alpha2NamedResourcesRequest](#iok8sapiresourcev1alpha2namedresourcesrequest): NamedResourcesRequest is used in ResourceRequestModel.
* **vendorParameters**: any: Any object

## IoK8SApiResourceV1Alpha2StructuredResourceHandle
### Properties
* **nodeName**: string: NodeName is the name of the node providing the necessary resources if the resources are local to a node.
* **results**: [IoK8SApiResourceV1Alpha2DriverAllocationResult](#iok8sapiresourcev1alpha2driverallocationresult)[] (Required): Results lists all allocated driver resources.
* **vendorClaimParameters**: any: Any object
* **vendorClassParameters**: any: Any object

## IoK8SApiResourceV1Alpha2VendorParameters
### Properties
* **driverName**: string: DriverName is the name used by the DRA driver kubelet plugin.
* **parameters**: any: Any object

