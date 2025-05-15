# storage.k8s.io @ v1beta1

## Resource storage.k8s.io/VolumeAttributesClass@v1beta1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'storage.k8s.io/v1beta1' (ReadOnly, DeployTimeConstant): The api version.
* **driverName**: string (Required): Name of the CSI driver This field is immutable.
* **kind**: 'VolumeAttributesClass' (ReadOnly, DeployTimeConstant): The resource kind.
* **metadata**: [metadata](#metadata) (Required): The resource metadata.
* **parameters**: [IoK8SApiStorageV1Beta1VolumeAttributesClassParameters](#iok8sapistoragev1beta1volumeattributesclassparameters): parameters hold volume attributes defined by the CSI driver. These values are opaque to the Kubernetes and are passed directly to the CSI driver. The underlying storage provider supports changing these attributes on an existing volume, however the parameters field itself is immutable. To invoke a volume update, a new VolumeAttributesClass should be created with new parameters, and the PersistentVolumeClaim should be updated to reference the new VolumeAttributesClass.

This field is required and must contain at least one key/value pair. The keys cannot be empty, and the maximum number of parameters is 512, with a cumulative max size of 256K. If the CSI driver rejects invalid parameters, the target PersistentVolumeClaim will be set to an "Infeasible" state in the modifyVolumeStatus field.

## annotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IoK8SApiStorageV1Beta1VolumeAttributesClassParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## labels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## metadata
### Properties
* **annotations**: [annotations](#annotations): The annotations for the resource.
* **labels**: [labels](#labels): The labels for the resource.
* **name**: string (Required, DeployTimeConstant): The name of the resource.

