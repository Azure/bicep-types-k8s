# coordination.k8s.io @ v1beta1

## Resource coordination.k8s.io/LeaseCandidate@v1beta1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'coordination.k8s.io/v1beta1' (ReadOnly, DeployTimeConstant): The api version.
* **kind**: 'LeaseCandidate' (ReadOnly, DeployTimeConstant): The resource kind.
* **metadata**: [metadata](#metadata) (Required): The resource metadata.
* **spec**: [IoK8SApiCoordinationV1Beta1LeaseCandidateSpec](#iok8sapicoordinationv1beta1leasecandidatespec): LeaseCandidateSpec is a specification of a Lease.

## annotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IoK8SApiCoordinationV1Beta1LeaseCandidateSpec
### Properties
* **binaryVersion**: string (Required): BinaryVersion is the binary version. It must be in a semver format without leading `v`. This field is required.
* **emulationVersion**: string: EmulationVersion is the emulation version. It must be in a semver format without leading `v`. EmulationVersion must be less than or equal to BinaryVersion. This field is required when strategy is "OldestEmulationVersion"
* **leaseName**: string (Required): LeaseName is the name of the lease for which this candidate is contending. The limits on this field are the same as on Lease.name. Multiple lease candidates may reference the same Lease.name. This field is immutable.
* **pingTime**: string: MicroTime is version of Time with microsecond level precision.
* **renewTime**: string: MicroTime is version of Time with microsecond level precision.
* **strategy**: string (Required): Strategy is the strategy that coordinated leader election will use for picking the leader. If multiple candidates for the same Lease return different strategies, the strategy provided by the candidate with the latest BinaryVersion will be used. If there is still conflict, this is a user error and coordinated leader election will not operate the Lease until resolved.

## labels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## metadata
### Properties
* **annotations**: [annotations](#annotations): The annotations for the resource.
* **labels**: [labels](#labels): The labels for the resource.
* **name**: string (Required, DeployTimeConstant): The name of the resource.

