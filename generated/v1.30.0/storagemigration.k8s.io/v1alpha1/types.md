# storagemigration.k8s.io @ v1alpha1

## Resource storagemigration.k8s.io/StorageVersionMigration@v1alpha1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'storagemigration.k8s.io/v1alpha1' (ReadOnly, DeployTimeConstant): The api version.
* **kind**: 'StorageVersionMigration' (ReadOnly, DeployTimeConstant): The resource kind.
* **metadata**: [metadata](#metadata) (Required): The resource metadata.
* **spec**: [IoK8SApiStoragemigrationV1Alpha1StorageVersionMigrationSpec](#iok8sapistoragemigrationv1alpha1storageversionmigrationspec): Spec of the storage version migration.
* **status**: [IoK8SApiStoragemigrationV1Alpha1StorageVersionMigrationStatus](#iok8sapistoragemigrationv1alpha1storageversionmigrationstatus): Status of the storage version migration.

## annotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IoK8SApiStoragemigrationV1Alpha1GroupVersionResource
### Properties
* **group**: string: The name of the group.
* **resource**: string: The name of the resource.
* **version**: string: The name of the version.

## IoK8SApiStoragemigrationV1Alpha1MigrationCondition
### Properties
* **lastUpdateTime**: string: Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* **message**: string: A human readable message indicating details about the transition.
* **reason**: string: The reason for the condition's last transition.
* **status**: string (Required): Status of the condition, one of True, False, Unknown.
* **type**: string (Required): Type of the condition.

## IoK8SApiStoragemigrationV1Alpha1StorageVersionMigrationSpec
### Properties
* **continueToken**: string: The token used in the list options to get the next chunk of objects to migrate. When the .status.conditions indicates the migration is "Running", users can use this token to check the progress of the migration.
* **resource**: [IoK8SApiStoragemigrationV1Alpha1GroupVersionResource](#iok8sapistoragemigrationv1alpha1groupversionresource) (Required): The names of the group, the version, and the resource.

## IoK8SApiStoragemigrationV1Alpha1StorageVersionMigrationStatus
### Properties
* **conditions**: [IoK8SApiStoragemigrationV1Alpha1MigrationCondition](#iok8sapistoragemigrationv1alpha1migrationcondition)[]: The latest available observations of the migration's current state.
* **resourceVersion**: string: ResourceVersion to compare with the GC cache for performing the migration. This is the current resource version of given group, version and resource when kube-controller-manager first observes this StorageVersionMigration resource.

## labels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## metadata
### Properties
* **annotations**: [annotations](#annotations): The annotations for the resource.
* **labels**: [labels](#labels): The labels for the resource.
* **name**: string (Required, DeployTimeConstant): The name of the resource.

