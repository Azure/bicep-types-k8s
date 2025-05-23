# flowcontrol.apiserver.k8s.io @ v1beta3

## Resource flowcontrol.apiserver.k8s.io/FlowSchema@v1beta3
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'flowcontrol.apiserver.k8s.io/v1beta3' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **kind**: 'FlowSchema' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **spec**: [IoK8SApiFlowcontrolV1Beta3FlowSchemaSpec](#iok8sapiflowcontrolv1beta3flowschemaspec): FlowSchemaSpec describes how the FlowSchema's specification looks like.
* **status**: [IoK8SApiFlowcontrolV1Beta3FlowSchemaStatus](#iok8sapiflowcontrolv1beta3flowschemastatus): FlowSchemaStatus represents the current state of a FlowSchema.

## Resource flowcontrol.apiserver.k8s.io/PriorityLevelConfiguration@v1beta3
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'flowcontrol.apiserver.k8s.io/v1beta3' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **kind**: 'PriorityLevelConfiguration' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **spec**: [IoK8SApiFlowcontrolV1Beta3PriorityLevelConfigurationSpec](#iok8sapiflowcontrolv1beta3prioritylevelconfigurationspec): PriorityLevelConfigurationSpec specifies the configuration of a priority level.
* **status**: [IoK8SApiFlowcontrolV1Beta3PriorityLevelConfigurationStatus](#iok8sapiflowcontrolv1beta3prioritylevelconfigurationstatus): PriorityLevelConfigurationStatus represents the current state of a "request-priority".

## IoK8SApiFlowcontrolV1Beta3ExemptPriorityLevelConfiguration
### Properties
* **lendablePercent**: int: `lendablePercent` prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels.  This value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows.

LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )
* **nominalConcurrencyShares**: int: `nominalConcurrencyShares` (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats nominally reserved for this priority level. This DOES NOT limit the dispatching from this priority level but affects the other priority levels through the borrowing mechanism. The server's concurrency limit (ServerCL) is divided among all the priority levels in proportion to their NCS values:

NominalCL(i)  = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k)

Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level. This field has a default value of zero.

## IoK8SApiFlowcontrolV1Beta3FlowDistinguisherMethod
### Properties
* **type**: string (Required): `type` is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required.

## IoK8SApiFlowcontrolV1Beta3FlowSchemaCondition
### Properties
* **lastTransitionTime**: string: Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* **message**: string: `message` is a human-readable message indicating details about last transition.
* **reason**: string: `reason` is a unique, one-word, CamelCase reason for the condition's last transition.
* **status**: string: `status` is the status of the condition. Can be True, False, Unknown. Required.
* **type**: string: `type` is the type of the condition. Required.

## IoK8SApiFlowcontrolV1Beta3FlowSchemaSpec
### Properties
* **distinguisherMethod**: [IoK8SApiFlowcontrolV1Beta3FlowDistinguisherMethod](#iok8sapiflowcontrolv1beta3flowdistinguishermethod): FlowDistinguisherMethod specifies the method of a flow distinguisher.
* **matchingPrecedence**: int: `matchingPrecedence` is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.
* **priorityLevelConfiguration**: [IoK8SApiFlowcontrolV1Beta3PriorityLevelConfigurationReference](#iok8sapiflowcontrolv1beta3prioritylevelconfigurationreference) (Required): PriorityLevelConfigurationReference contains information that points to the "request-priority" being used.
* **rules**: [IoK8SApiFlowcontrolV1Beta3PolicyRulesWithSubjects](#iok8sapiflowcontrolv1beta3policyruleswithsubjects)[]: `rules` describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema.

## IoK8SApiFlowcontrolV1Beta3FlowSchemaStatus
### Properties
* **conditions**: [IoK8SApiFlowcontrolV1Beta3FlowSchemaCondition](#iok8sapiflowcontrolv1beta3flowschemacondition)[]: `conditions` is a list of the current states of FlowSchema.

## IoK8SApiFlowcontrolV1Beta3GroupSubject
### Properties
* **name**: string (Required): name is the user group that matches, or "*" to match all user groups. See https://github.com/kubernetes/apiserver/blob/master/pkg/authentication/user/user.go for some well-known group names. Required.

## IoK8SApiFlowcontrolV1Beta3LimitedPriorityLevelConfiguration
### Properties
* **borrowingLimitPercent**: int: `borrowingLimitPercent`, if present, configures a limit on how many seats this priority level can borrow from other priority levels. The limit is known as this level's BorrowingConcurrencyLimit (BorrowingCL) and is a limit on the total number of seats that this level may borrow at any one time. This field holds the ratio of that limit to the level's nominal concurrency limit. When this field is non-nil, it must hold a non-negative integer and the limit is calculated as follows.

BorrowingCL(i) = round( NominalCL(i) * borrowingLimitPercent(i)/100.0 )

The value of this field can be more than 100, implying that this priority level can borrow a number of seats that is greater than its own nominal concurrency limit (NominalCL). When this field is left `nil`, the limit is effectively infinite.
* **lendablePercent**: int: `lendablePercent` prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels. The value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows.

LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )
* **limitResponse**: [IoK8SApiFlowcontrolV1Beta3LimitResponse](#iok8sapiflowcontrolv1beta3limitresponse): LimitResponse defines how to handle requests that can not be executed right now.
* **nominalConcurrencyShares**: int: `nominalConcurrencyShares` (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats available at this priority level. This is used both for requests dispatched from this priority level as well as requests dispatched from other priority levels borrowing seats from this level. The server's concurrency limit (ServerCL) is divided among the Limited priority levels in proportion to their NCS values:

NominalCL(i)  = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k)

Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level. This field has a default value of 30.

## IoK8SApiFlowcontrolV1Beta3LimitResponse
### Properties
* **queuing**: [IoK8SApiFlowcontrolV1Beta3QueuingConfiguration](#iok8sapiflowcontrolv1beta3queuingconfiguration): QueuingConfiguration holds the configuration parameters for queuing
* **type**: string (Required): `type` is "Queue" or "Reject". "Queue" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. "Reject" means that requests that can not be executed upon arrival are rejected. Required.

## IoK8SApiFlowcontrolV1Beta3NonResourcePolicyRule
### Properties
* **nonResourceURLs**: string[] (Required): `nonResourceURLs` is a set of url prefixes that a user should have access to and may not be empty. For example:
  - "/healthz" is legal
  - "/hea*" is illegal
  - "/hea" is legal but matches nothing
  - "/hea/*" also matches nothing
  - "/healthz/*" matches all per-component health checks.
"*" matches all non-resource urls. if it is present, it must be the only entry. Required.
* **verbs**: string[] (Required): `verbs` is a list of matching verbs and may not be empty. "*" matches all verbs. If it is present, it must be the only entry. Required.

## IoK8SApiFlowcontrolV1Beta3PolicyRulesWithSubjects
### Properties
* **nonResourceRules**: [IoK8SApiFlowcontrolV1Beta3NonResourcePolicyRule](#iok8sapiflowcontrolv1beta3nonresourcepolicyrule)[]: `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.
* **resourceRules**: [IoK8SApiFlowcontrolV1Beta3ResourcePolicyRule](#iok8sapiflowcontrolv1beta3resourcepolicyrule)[]: `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty.
* **subjects**: [IoK8SApiFlowcontrolV1Beta3Subject](#iok8sapiflowcontrolv1beta3subject)[] (Required): subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.

## IoK8SApiFlowcontrolV1Beta3PriorityLevelConfigurationCondition
### Properties
* **lastTransitionTime**: string: Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* **message**: string: `message` is a human-readable message indicating details about last transition.
* **reason**: string: `reason` is a unique, one-word, CamelCase reason for the condition's last transition.
* **status**: string: `status` is the status of the condition. Can be True, False, Unknown. Required.
* **type**: string: `type` is the type of the condition. Required.

## IoK8SApiFlowcontrolV1Beta3PriorityLevelConfigurationReference
### Properties
* **name**: string (Required): `name` is the name of the priority level configuration being referenced Required.

## IoK8SApiFlowcontrolV1Beta3PriorityLevelConfigurationSpec
### Properties
* **exempt**: [IoK8SApiFlowcontrolV1Beta3ExemptPriorityLevelConfiguration](#iok8sapiflowcontrolv1beta3exemptprioritylevelconfiguration): ExemptPriorityLevelConfiguration describes the configurable aspects of the handling of exempt requests. In the mandatory exempt configuration object the values in the fields here can be modified by authorized users, unlike the rest of the `spec`.
* **limited**: [IoK8SApiFlowcontrolV1Beta3LimitedPriorityLevelConfiguration](#iok8sapiflowcontrolv1beta3limitedprioritylevelconfiguration): LimitedPriorityLevelConfiguration specifies how to handle requests that are subject to limits. It addresses two issues:
  - How are requests for this priority level limited?
  - What should be done with requests that exceed the limit?
* **type**: string (Required): `type` indicates whether this priority level is subject to limitation on request execution.  A value of `"Exempt"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `"Limited"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server's limited capacity is made available exclusively to this priority level. Required.

## IoK8SApiFlowcontrolV1Beta3PriorityLevelConfigurationStatus
### Properties
* **conditions**: [IoK8SApiFlowcontrolV1Beta3PriorityLevelConfigurationCondition](#iok8sapiflowcontrolv1beta3prioritylevelconfigurationcondition)[]: `conditions` is the current state of "request-priority".

## IoK8SApiFlowcontrolV1Beta3QueuingConfiguration
### Properties
* **handSize**: int: `handSize` is a small positive number that configures the shuffle sharding of requests into queues.  When enqueuing a request at this priority level the request's flow identifier (a string pair) is hashed and the hash value is used to shuffle the list of queues and deal a hand of the size specified here.  The request is put into one of the shortest queues in that hand. `handSize` must be no larger than `queues`, and should be significantly smaller (so that a few heavy flows do not saturate most of the queues).  See the user-facing documentation for more extensive guidance on setting this field.  This field has a default value of 8.
* **queueLengthLimit**: int: `queueLengthLimit` is the maximum number of requests allowed to be waiting in a given queue of this priority level at a time; excess requests are rejected.  This value must be positive.  If not specified, it will be defaulted to 50.
* **queues**: int: `queues` is the number of queues for this priority level. The queues exist independently at each apiserver. The value must be positive.  Setting it to 1 effectively precludes shufflesharding and thus makes the distinguisher method of associated flow schemas irrelevant.  This field has a default value of 64.

## IoK8SApiFlowcontrolV1Beta3ResourcePolicyRule
### Properties
* **apiGroups**: string[] (Required): `apiGroups` is a list of matching API groups and may not be empty. "*" matches all API groups and, if present, must be the only entry. Required.
* **clusterScope**: bool: `clusterScope` indicates whether to match requests that do not specify a namespace (which happens either because the resource is not namespaced or the request targets all namespaces). If this field is omitted or false then the `namespaces` field must contain a non-empty list.
* **namespaces**: string[]: `namespaces` is a list of target namespaces that restricts matches.  A request that specifies a target namespace matches only if either (a) this list contains that target namespace or (b) this list contains "*".  Note that "*" matches any specified namespace but does not match a request that _does not specify_ a namespace (see the `clusterScope` field for that). This list may be empty, but only if `clusterScope` is true.
* **resources**: string[] (Required): `resources` is a list of matching resources (i.e., lowercase and plural) with, if desired, subresource.  For example, [ "services", "nodes/status" ].  This list may not be empty. "*" matches all resources and, if present, must be the only entry. Required.
* **verbs**: string[] (Required): `verbs` is a list of matching verbs and may not be empty. "*" matches all verbs and, if present, must be the only entry. Required.

## IoK8SApiFlowcontrolV1Beta3ServiceAccountSubject
### Properties
* **name**: string (Required): `name` is the name of matching ServiceAccount objects, or "*" to match regardless of name. Required.
* **namespace**: string (Required): `namespace` is the namespace of matching ServiceAccount objects. Required.

## IoK8SApiFlowcontrolV1Beta3Subject
### Properties
* **group**: [IoK8SApiFlowcontrolV1Beta3GroupSubject](#iok8sapiflowcontrolv1beta3groupsubject): GroupSubject holds detailed information for group-kind subject.
* **kind**: string (Required): `kind` indicates which one of the other fields is non-empty. Required
* **serviceAccount**: [IoK8SApiFlowcontrolV1Beta3ServiceAccountSubject](#iok8sapiflowcontrolv1beta3serviceaccountsubject): ServiceAccountSubject holds detailed information for service-account-kind subject.
* **user**: [IoK8SApiFlowcontrolV1Beta3UserSubject](#iok8sapiflowcontrolv1beta3usersubject): UserSubject holds detailed information for user-kind subject.

## IoK8SApiFlowcontrolV1Beta3UserSubject
### Properties
* **name**: string (Required): `name` is the username that matches, or "*" to match all usernames. Required.

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
* **generateName**: string: GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.

If this field is specified and the generated name exists, the server will return a 409.

Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
* **generation**: int (ReadOnly): A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
* **labels**: [IoK8SApimachineryPkgApisMetaV1ObjectMetaLabels](#iok8sapimachinerypkgapismetav1objectmetalabels): Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
* **managedFields**: [IoK8SApimachineryPkgApisMetaV1ManagedFieldsEntry](#iok8sapimachinerypkgapismetav1managedfieldsentry)[]: ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
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

