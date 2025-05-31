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
* **suitableNodes**: [IoK8SApiCoreV1NodeSelector](#iok8sapicorev1nodeselector): A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.

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

## IoK8SApiResourceV1Alpha2ResourceHandle
### Properties
* **data**: string: Data contains the opaque data associated with this ResourceHandle. It is set by the controller component of the resource driver whose name matches the DriverName set in the ResourceClaimStatus this ResourceHandle is embedded in. It is set at allocation time and is intended for processing by the kubelet plugin whose name matches the DriverName set in this ResourceHandle.

The maximum size of this field is 16KiB. This may get increased in the future, but not reduced.
* **driverName**: string: DriverName specifies the name of the resource driver whose kubelet plugin should be invoked to process this ResourceHandle's data once it lands on a node. This may differ from the DriverName set in ResourceClaimStatus this ResourceHandle is embedded in.

