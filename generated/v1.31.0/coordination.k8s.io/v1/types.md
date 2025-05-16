# coordination.k8s.io @ v1

## Resource coordination.k8s.io/Lease@v1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'coordination.k8s.io/v1' (ReadOnly, DeployTimeConstant): The api version.
* **kind**: 'Lease' (ReadOnly, DeployTimeConstant): The resource kind.
* **metadata**: [metadata](#metadata) (Required): The resource metadata.
* **spec**: [IoK8SApiCoordinationV1LeaseSpec](#iok8sapicoordinationv1leasespec): LeaseSpec is a specification of a Lease.

## annotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IoK8SApiCoordinationV1LeaseSpec
### Properties
* **acquireTime**: string: MicroTime is version of Time with microsecond level precision.
* **holderIdentity**: string: holderIdentity contains the identity of the holder of a current lease. If Coordinated Leader Election is used, the holder identity must be equal to the elected LeaseCandidate.metadata.name field.
* **leaseDurationSeconds**: int: leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measured against the time of last observed renewTime.
* **leaseTransitions**: int: leaseTransitions is the number of transitions of a lease between holders.
* **preferredHolder**: string: PreferredHolder signals to a lease holder that the lease has a more optimal holder and should be given up. This field can only be set if Strategy is also set.
* **renewTime**: string: MicroTime is version of Time with microsecond level precision.
* **strategy**: string: Strategy indicates the strategy for picking the leader for coordinated leader election. If the field is not specified, there is no active coordination for this lease. (Alpha) Using this field requires the CoordinatedLeaderElection feature gate to be enabled.

## labels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## metadata
### Properties
* **annotations**: [annotations](#annotations): The annotations for the resource.
* **labels**: [labels](#labels): The labels for the resource.
* **name**: string (Required, DeployTimeConstant): The name of the resource.

