# coordination.k8s.io @ v1alpha1

## Resource coordination.k8s.io/LeaseCandidate@v1alpha1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'coordination.k8s.io/v1alpha1' (ReadOnly, DeployTimeConstant): The api version.
* **kind**: 'LeaseCandidate' (ReadOnly, DeployTimeConstant): The resource kind.
* **metadata**: [metadata](#metadata) (Required): The resource metadata.
* **spec**: [IoK8SApiCoordinationV1Alpha1LeaseCandidateSpec](#iok8sapicoordinationv1alpha1leasecandidatespec): LeaseCandidateSpec is a specification of a Lease.

## annotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IoK8SApiCoordinationV1Alpha1LeaseCandidateSpec
### Properties
* **binaryVersion**: string: BinaryVersion is the binary version. It must be in a semver format without leading `v`. This field is required when strategy is "OldestEmulationVersion"
* **emulationVersion**: string: EmulationVersion is the emulation version. It must be in a semver format without leading `v`. EmulationVersion must be less than or equal to BinaryVersion. This field is required when strategy is "OldestEmulationVersion"
* **leaseName**: string (Required): LeaseName is the name of the lease for which this candidate is contending. This field is immutable.
* **pingTime**: string: MicroTime is version of Time with microsecond level precision.
* **preferredStrategies**: string[] (Required): PreferredStrategies indicates the list of strategies for picking the leader for coordinated leader election. The list is ordered, and the first strategy supersedes all other strategies. The list is used by coordinated leader election to make a decision about the final election strategy. This follows as - If all clients have strategy X as the first element in this list, strategy X will be used. - If a candidate has strategy [X] and another candidate has strategy [Y, X], Y supersedes X and strategy Y
  will be used.
- If a candidate has strategy [X, Y] and another candidate has strategy [Y, X], this is a user error and leader
  election will not operate the Lease until resolved.
(Alpha) Using this field requires the CoordinatedLeaderElection feature gate to be enabled.
* **renewTime**: string: MicroTime is version of Time with microsecond level precision.

## labels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## metadata
### Properties
* **annotations**: [annotations](#annotations): The annotations for the resource.
* **labels**: [labels](#labels): The labels for the resource.
* **name**: string (Required, DeployTimeConstant): The name of the resource.

