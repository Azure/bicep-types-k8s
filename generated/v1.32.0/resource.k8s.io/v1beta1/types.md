# resource.k8s.io @ v1beta1

## Resource resource.k8s.io/DeviceClass@v1beta1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'resource.k8s.io/v1beta1' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **kind**: 'DeviceClass' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **spec**: [IoK8SApiResourceV1Beta1DeviceClassSpec](#iok8sapiresourcev1beta1deviceclassspec) (Required): DeviceClassSpec is used in a [DeviceClass] to define what can be allocated and how to configure it.

## Resource resource.k8s.io/ResourceClaim@v1beta1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'resource.k8s.io/v1beta1' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **kind**: 'ResourceClaim' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **spec**: [IoK8SApiResourceV1Beta1ResourceClaimSpec](#iok8sapiresourcev1beta1resourceclaimspec) (Required): ResourceClaimSpec defines what is being requested in a ResourceClaim and how to configure it.
* **status**: [IoK8SApiResourceV1Beta1ResourceClaimStatus](#iok8sapiresourcev1beta1resourceclaimstatus): ResourceClaimStatus tracks whether the resource has been allocated and what the result of that was.

## Resource resource.k8s.io/ResourceClaimTemplate@v1beta1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'resource.k8s.io/v1beta1' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **kind**: 'ResourceClaimTemplate' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **spec**: [IoK8SApiResourceV1Beta1ResourceClaimTemplateSpec](#iok8sapiresourcev1beta1resourceclaimtemplatespec) (Required): ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim.

## Resource resource.k8s.io/ResourceSlice@v1beta1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'resource.k8s.io/v1beta1' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **kind**: 'ResourceSlice' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **spec**: [IoK8SApiResourceV1Beta1ResourceSliceSpec](#iok8sapiresourcev1beta1resourceslicespec) (Required): ResourceSliceSpec contains the information published by the driver in one ResourceSlice.

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

## IoK8SApimachineryPkgApisMetaV1Condition
### Properties
* **lastTransitionTime**: string (Required): Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* **message**: string (Required): message is a human readable message indicating details about the transition. This may be an empty string.
* **observedGeneration**: int: observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
* **reason**: string (Required): reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
* **status**: string (Required): status of the condition, one of True, False, Unknown.
* **type**: string (Required): type of condition in CamelCase or in foo.example.com/CamelCase.

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

## IoK8SApiResourceV1Beta1AllocatedDeviceStatus
### Properties
* **conditions**: [IoK8SApimachineryPkgApisMetaV1Condition](#iok8sapimachinerypkgapismetav1condition)[]: Conditions contains the latest observation of the device's state. If the device has been configured according to the class and claim config references, the `Ready` condition should be True.
* **data**: any: Any object
* **device**: string (Required): Device references one device instance via its name in the driver's resource pool. It must be a DNS label.
* **driver**: string (Required): Driver specifies the name of the DRA driver whose kubelet plugin should be invoked to process the allocation once the claim is needed on a node.

Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver.
* **networkData**: [IoK8SApiResourceV1Beta1NetworkDeviceData](#iok8sapiresourcev1beta1networkdevicedata): NetworkDeviceData provides network-related details for the allocated device. This information may be filled by drivers or other components to configure or identify the device within a network context.
* **pool**: string (Required): This name together with the driver name and the device name field identify which device was allocated (`<driver name>/<pool name>/<device name>`).

Must not be longer than 253 characters and may contain one or more DNS sub-domains separated by slashes.

## IoK8SApiResourceV1Beta1AllocationResult
### Properties
* **devices**: [IoK8SApiResourceV1Beta1DeviceAllocationResult](#iok8sapiresourcev1beta1deviceallocationresult): DeviceAllocationResult is the result of allocating devices.
* **nodeSelector**: [IoK8SApiCoreV1NodeSelector](#iok8sapicorev1nodeselector): A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.

## IoK8SApiResourceV1Beta1BasicDevice
### Properties
* **attributes**: [IoK8SApiResourceV1Beta1BasicDeviceAttributes](#iok8sapiresourcev1beta1basicdeviceattributes): Attributes defines the set of attributes for this device. The name of each attribute must be unique in that set.

The maximum number of attributes and capacities combined is 32.
* **capacity**: [IoK8SApiResourceV1Beta1BasicDeviceCapacity](#iok8sapiresourcev1beta1basicdevicecapacity): Capacity defines the set of capacities for this device. The name of each capacity must be unique in that set.

The maximum number of attributes and capacities combined is 32.

## IoK8SApiResourceV1Beta1BasicDeviceAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: [IoK8SApiResourceV1Beta1DeviceAttribute](#iok8sapiresourcev1beta1deviceattribute)

## IoK8SApiResourceV1Beta1BasicDeviceCapacity
### Properties
### Additional Properties
* **Additional Properties Type**: [IoK8SApiResourceV1Beta1DeviceCapacity](#iok8sapiresourcev1beta1devicecapacity)

## IoK8SApiResourceV1Beta1CELDeviceSelector
### Properties
* **expression**: string (Required): Expression is a CEL expression which evaluates a single device. It must evaluate to true when the device under consideration satisfies the desired criteria, and false when it does not. Any other result is an error and causes allocation of devices to abort.

The expression's input is an object named "device", which carries the following properties:
 - driver (string): the name of the driver which defines this device.
 - attributes (map[string]object): the device's attributes, grouped by prefix
   (e.g. device.attributes["dra.example.com"] evaluates to an object with all
   of the attributes which were prefixed by "dra.example.com".
 - capacity (map[string]object): the device's capacities, grouped by prefix.

Example: Consider a device with driver="dra.example.com", which exposes two attributes named "model" and "ext.example.com/family" and which exposes one capacity named "modules". This input to this expression would have the following fields:

    device.driver
    device.attributes["dra.example.com"].model
    device.attributes["ext.example.com"].family
    device.capacity["dra.example.com"].modules

The device.driver field can be used to check for a specific driver, either as a high-level precondition (i.e. you only want to consider devices from this driver) or as part of a multi-clause expression that is meant to consider devices from different drivers.

The value type of each attribute is defined by the device definition, and users who write these expressions must consult the documentation for their specific drivers. The value type of each capacity is Quantity.

If an unknown prefix is used as a lookup in either device.attributes or device.capacity, an empty map will be returned. Any reference to an unknown field will cause an evaluation error and allocation to abort.

A robust expression should check for the existence of attributes before referencing them.

For ease of use, the cel.bind() function is enabled, and can be used to simplify expressions that access multiple attributes with the same domain. For example:

    cel.bind(dra, device.attributes["dra.example.com"], dra.someBool && dra.anotherBool)

The length of the expression must be smaller or equal to 10 Ki. The cost of evaluating it is also limited based on the estimated number of logical steps.

## IoK8SApiResourceV1Beta1Device
### Properties
* **basic**: [IoK8SApiResourceV1Beta1BasicDevice](#iok8sapiresourcev1beta1basicdevice): BasicDevice defines one device instance.
* **name**: string (Required): Name is unique identifier among all devices managed by the driver in the pool. It must be a DNS label.

## IoK8SApiResourceV1Beta1DeviceAllocationConfiguration
### Properties
* **opaque**: [IoK8SApiResourceV1Beta1OpaqueDeviceConfiguration](#iok8sapiresourcev1beta1opaquedeviceconfiguration): OpaqueDeviceConfiguration contains configuration parameters for a driver in a format defined by the driver vendor.
* **requests**: string[]: Requests lists the names of requests where the configuration applies. If empty, its applies to all requests.
* **source**: string (Required): Source records whether the configuration comes from a class and thus is not something that a normal user would have been able to set or from a claim.

## IoK8SApiResourceV1Beta1DeviceAllocationResult
### Properties
* **config**: [IoK8SApiResourceV1Beta1DeviceAllocationConfiguration](#iok8sapiresourcev1beta1deviceallocationconfiguration)[]: This field is a combination of all the claim and class configuration parameters. Drivers can distinguish between those based on a flag.

This includes configuration parameters for drivers which have no allocated devices in the result because it is up to the drivers which configuration parameters they support. They can silently ignore unknown configuration parameters.
* **results**: [IoK8SApiResourceV1Beta1DeviceRequestAllocationResult](#iok8sapiresourcev1beta1devicerequestallocationresult)[]: Results lists all allocated devices.

## IoK8SApiResourceV1Beta1DeviceAttribute
### Properties
* **bool**: bool: BoolValue is a true/false value.
* **int**: int: IntValue is a number.
* **string**: string: StringValue is a string. Must not be longer than 64 characters.
* **version**: string: VersionValue is a semantic version according to semver.org spec 2.0.0. Must not be longer than 64 characters.

## IoK8SApiResourceV1Beta1DeviceCapacity
### Properties
* **value**: string (Required): Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.

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

## IoK8SApiResourceV1Beta1DeviceClaim
### Properties
* **config**: [IoK8SApiResourceV1Beta1DeviceClaimConfiguration](#iok8sapiresourcev1beta1deviceclaimconfiguration)[]: This field holds configuration for multiple potential drivers which could satisfy requests in this claim. It is ignored while allocating the claim.
* **constraints**: [IoK8SApiResourceV1Beta1DeviceConstraint](#iok8sapiresourcev1beta1deviceconstraint)[]: These constraints must be satisfied by the set of devices that get allocated for the claim.
* **requests**: [IoK8SApiResourceV1Beta1DeviceRequest](#iok8sapiresourcev1beta1devicerequest)[]: Requests represent individual requests for distinct devices which must all be satisfied. If empty, nothing needs to be allocated.

## IoK8SApiResourceV1Beta1DeviceClaimConfiguration
### Properties
* **opaque**: [IoK8SApiResourceV1Beta1OpaqueDeviceConfiguration](#iok8sapiresourcev1beta1opaquedeviceconfiguration): OpaqueDeviceConfiguration contains configuration parameters for a driver in a format defined by the driver vendor.
* **requests**: string[]: Requests lists the names of requests where the configuration applies. If empty, it applies to all requests.

## IoK8SApiResourceV1Beta1DeviceClassConfiguration
### Properties
* **opaque**: [IoK8SApiResourceV1Beta1OpaqueDeviceConfiguration](#iok8sapiresourcev1beta1opaquedeviceconfiguration): OpaqueDeviceConfiguration contains configuration parameters for a driver in a format defined by the driver vendor.

## IoK8SApiResourceV1Beta1DeviceClassSpec
### Properties
* **config**: [IoK8SApiResourceV1Beta1DeviceClassConfiguration](#iok8sapiresourcev1beta1deviceclassconfiguration)[]: Config defines configuration parameters that apply to each device that is claimed via this class. Some classses may potentially be satisfied by multiple drivers, so each instance of a vendor configuration applies to exactly one driver.

They are passed to the driver, but are not considered while allocating the claim.
* **selectors**: [IoK8SApiResourceV1Beta1DeviceSelector](#iok8sapiresourcev1beta1deviceselector)[]: Each selector must be satisfied by a device which is claimed via this class.

## IoK8SApiResourceV1Beta1DeviceConstraint
### Properties
* **matchAttribute**: string: MatchAttribute requires that all devices in question have this attribute and that its type and value are the same across those devices.

For example, if you specified "dra.example.com/numa" (a hypothetical example!), then only devices in the same NUMA node will be chosen. A device which does not have that attribute will not be chosen. All devices should use a value of the same type for this attribute because that is part of its specification, but if one device doesn't, then it also will not be chosen.

Must include the domain qualifier.
* **requests**: string[]: Requests is a list of the one or more requests in this claim which must co-satisfy this constraint. If a request is fulfilled by multiple devices, then all of the devices must satisfy the constraint. If this is not specified, this constraint applies to all requests in this claim.

## IoK8SApiResourceV1Beta1DeviceRequest
### Properties
* **adminAccess**: bool: AdminAccess indicates that this is a claim for administrative access to the device(s). Claims with AdminAccess are expected to be used for monitoring or other management services for a device.  They ignore all ordinary claims to the device with respect to access modes and any resource allocations.

This is an alpha field and requires enabling the DRAAdminAccess feature gate. Admin access is disabled if this field is unset or set to false, otherwise it is enabled.
* **allocationMode**: string: AllocationMode and its related fields define how devices are allocated to satisfy this request. Supported values are:

- ExactCount: This request is for a specific number of devices.
  This is the default. The exact number is provided in the
  count field.

- All: This request is for all of the matching devices in a pool.
  Allocation will fail if some devices are already allocated,
  unless adminAccess is requested.

If AlloctionMode is not specified, the default mode is ExactCount. If the mode is ExactCount and count is not specified, the default count is one. Any other requests must specify this field.

More modes may get added in the future. Clients must refuse to handle requests with unknown modes.
* **count**: int: Count is used only when the count mode is "ExactCount". Must be greater than zero. If AllocationMode is ExactCount and this field is not specified, the default is one.
* **deviceClassName**: string (Required): DeviceClassName references a specific DeviceClass, which can define additional configuration and selectors to be inherited by this request.

A class is required. Which classes are available depends on the cluster.

Administrators may use this to restrict which devices may get requested by only installing classes with selectors for permitted devices. If users are free to request anything without restrictions, then administrators can create an empty DeviceClass for users to reference.
* **name**: string (Required): Name can be used to reference this request in a pod.spec.containers[].resources.claims entry and in a constraint of the claim.

Must be a DNS label.
* **selectors**: [IoK8SApiResourceV1Beta1DeviceSelector](#iok8sapiresourcev1beta1deviceselector)[]: Selectors define criteria which must be satisfied by a specific device in order for that device to be considered for this request. All selectors must be satisfied for a device to be considered.

## IoK8SApiResourceV1Beta1DeviceRequestAllocationResult
### Properties
* **adminAccess**: bool: AdminAccess indicates that this device was allocated for administrative access. See the corresponding request field for a definition of mode.

This is an alpha field and requires enabling the DRAAdminAccess feature gate. Admin access is disabled if this field is unset or set to false, otherwise it is enabled.
* **device**: string (Required): Device references one device instance via its name in the driver's resource pool. It must be a DNS label.
* **driver**: string (Required): Driver specifies the name of the DRA driver whose kubelet plugin should be invoked to process the allocation once the claim is needed on a node.

Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver.
* **pool**: string (Required): This name together with the driver name and the device name field identify which device was allocated (`<driver name>/<pool name>/<device name>`).

Must not be longer than 253 characters and may contain one or more DNS sub-domains separated by slashes.
* **request**: string (Required): Request is the name of the request in the claim which caused this device to be allocated. Multiple devices may have been allocated per request.

## IoK8SApiResourceV1Beta1DeviceSelector
### Properties
* **cel**: [IoK8SApiResourceV1Beta1CELDeviceSelector](#iok8sapiresourcev1beta1celdeviceselector): CELDeviceSelector contains a CEL expression for selecting a device.

## IoK8SApiResourceV1Beta1NetworkDeviceData
### Properties
* **hardwareAddress**: string: HardwareAddress represents the hardware address (e.g. MAC Address) of the device's network interface.

Must not be longer than 128 characters.
* **interfaceName**: string: InterfaceName specifies the name of the network interface associated with the allocated device. This might be the name of a physical or virtual network interface being configured in the pod.

Must not be longer than 256 characters.
* **ips**: string[]: IPs lists the network addresses assigned to the device's network interface. This can include both IPv4 and IPv6 addresses. The IPs are in the CIDR notation, which includes both the address and the associated subnet mask. e.g.: "192.0.2.5/24" for IPv4 and "2001:db8::5/64" for IPv6.

## IoK8SApiResourceV1Beta1OpaqueDeviceConfiguration
### Properties
* **driver**: string (Required): Driver is used to determine which kubelet plugin needs to be passed these configuration parameters.

An admission policy provided by the driver developer could use this to decide whether it needs to validate them.

Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver.
* **parameters**: any (Required): Any object

## IoK8SApiResourceV1Beta1ResourceClaimConsumerReference
### Properties
* **apiGroup**: string: APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
* **name**: string (Required): Name is the name of resource being referenced.
* **resource**: string (Required): Resource is the type of resource being referenced, for example "pods".
* **uid**: string (Required): UID identifies exactly one incarnation of the resource.

## IoK8SApiResourceV1Beta1ResourceClaimSpec
### Properties
* **devices**: [IoK8SApiResourceV1Beta1DeviceClaim](#iok8sapiresourcev1beta1deviceclaim): DeviceClaim defines how to request devices with a ResourceClaim.

## IoK8SApiResourceV1Beta1ResourceClaimStatus
### Properties
* **allocation**: [IoK8SApiResourceV1Beta1AllocationResult](#iok8sapiresourcev1beta1allocationresult): AllocationResult contains attributes of an allocated resource.
* **devices**: [IoK8SApiResourceV1Beta1AllocatedDeviceStatus](#iok8sapiresourcev1beta1allocateddevicestatus)[]: Devices contains the status of each device allocated for this claim, as reported by the driver. This can include driver-specific information. Entries are owned by their respective drivers.
* **reservedFor**: [IoK8SApiResourceV1Beta1ResourceClaimConsumerReference](#iok8sapiresourcev1beta1resourceclaimconsumerreference)[]: ReservedFor indicates which entities are currently allowed to use the claim. A Pod which references a ResourceClaim which is not reserved for that Pod will not be started. A claim that is in use or might be in use because it has been reserved must not get deallocated.

In a cluster with multiple scheduler instances, two pods might get scheduled concurrently by different schedulers. When they reference the same ResourceClaim which already has reached its maximum number of consumers, only one pod can be scheduled.

Both schedulers try to add their pod to the claim.status.reservedFor field, but only the update that reaches the API server first gets stored. The other one fails with an error and the scheduler which issued it knows that it must put the pod back into the queue, waiting for the ResourceClaim to become usable again.

There can be at most 32 such reservations. This may get increased in the future, but not reduced.

## IoK8SApiResourceV1Beta1ResourceClaimTemplateSpec
### Properties
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **spec**: [IoK8SApiResourceV1Beta1ResourceClaimSpec](#iok8sapiresourcev1beta1resourceclaimspec) (Required): ResourceClaimSpec defines what is being requested in a ResourceClaim and how to configure it.

## IoK8SApiResourceV1Beta1ResourcePool
### Properties
* **generation**: int (Required): Generation tracks the change in a pool over time. Whenever a driver changes something about one or more of the resources in a pool, it must change the generation in all ResourceSlices which are part of that pool. Consumers of ResourceSlices should only consider resources from the pool with the highest generation number. The generation may be reset by drivers, which should be fine for consumers, assuming that all ResourceSlices in a pool are updated to match or deleted.

Combined with ResourceSliceCount, this mechanism enables consumers to detect pools which are comprised of multiple ResourceSlices and are in an incomplete state.
* **name**: string (Required): Name is used to identify the pool. For node-local devices, this is often the node name, but this is not required.

It must not be longer than 253 characters and must consist of one or more DNS sub-domains separated by slashes. This field is immutable.
* **resourceSliceCount**: int (Required): ResourceSliceCount is the total number of ResourceSlices in the pool at this generation number. Must be greater than zero.

Consumers can use this to check whether they have seen all ResourceSlices belonging to the same pool.

## IoK8SApiResourceV1Beta1ResourceSliceSpec
### Properties
* **allNodes**: bool: AllNodes indicates that all nodes have access to the resources in the pool.

Exactly one of NodeName, NodeSelector and AllNodes must be set.
* **devices**: [IoK8SApiResourceV1Beta1Device](#iok8sapiresourcev1beta1device)[]: Devices lists some or all of the devices in this pool.

Must not have more than 128 entries.
* **driver**: string (Required): Driver identifies the DRA driver providing the capacity information. A field selector can be used to list only ResourceSlice objects with a certain driver name.

Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver. This field is immutable.
* **nodeName**: string: NodeName identifies the node which provides the resources in this pool. A field selector can be used to list only ResourceSlice objects belonging to a certain node.

This field can be used to limit access from nodes to ResourceSlices with the same node name. It also indicates to autoscalers that adding new nodes of the same type as some old node might also make new resources available.

Exactly one of NodeName, NodeSelector and AllNodes must be set. This field is immutable.
* **nodeSelector**: [IoK8SApiCoreV1NodeSelector](#iok8sapicorev1nodeselector): A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
* **pool**: [IoK8SApiResourceV1Beta1ResourcePool](#iok8sapiresourcev1beta1resourcepool) (Required): ResourcePool describes the pool that ResourceSlices belong to.

