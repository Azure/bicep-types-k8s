# networking.k8s.io @ v1alpha1

## Resource networking.k8s.io/IPAddress@v1alpha1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'networking.k8s.io/v1alpha1' (ReadOnly, DeployTimeConstant): The api version.
* **kind**: 'IPAddress' (ReadOnly, DeployTimeConstant): The resource kind.
* **metadata**: [metadata](#metadata) (Required): The resource metadata.
* **spec**: [IoK8SApiNetworkingV1Alpha1IPAddressSpec](#iok8sapinetworkingv1alpha1ipaddressspec): IPAddressSpec describe the attributes in an IP Address.

## Resource networking.k8s.io/ServiceCIDR@v1alpha1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'networking.k8s.io/v1alpha1' (ReadOnly, DeployTimeConstant): The api version.
* **kind**: 'ServiceCIDR' (ReadOnly, DeployTimeConstant): The resource kind.
* **metadata**: [metadata](#metadata) (Required): The resource metadata.
* **spec**: [IoK8SApiNetworkingV1Alpha1ServiceCidrSpec](#iok8sapinetworkingv1alpha1servicecidrspec): ServiceCIDRSpec define the CIDRs the user wants to use for allocating ClusterIPs for Services.
* **status**: [IoK8SApiNetworkingV1Alpha1ServiceCidrStatus](#iok8sapinetworkingv1alpha1servicecidrstatus): ServiceCIDRStatus describes the current state of the ServiceCIDR.

## annotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## annotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IoK8SApimachineryPkgApisMetaV1Condition
### Properties
* **lastTransitionTime**: string (Required): Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* **message**: string (Required): message is a human readable message indicating details about the transition. This may be an empty string.
* **observedGeneration**: int: observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
* **reason**: string (Required): reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
* **status**: string (Required): status of the condition, one of True, False, Unknown.
* **type**: string (Required): type of condition in CamelCase or in foo.example.com/CamelCase.

## IoK8SApiNetworkingV1Alpha1IPAddressSpec
### Properties
* **parentRef**: [IoK8SApiNetworkingV1Alpha1ParentReference](#iok8sapinetworkingv1alpha1parentreference) (Required): ParentReference describes a reference to a parent object.

## IoK8SApiNetworkingV1Alpha1ParentReference
### Properties
* **group**: string: Group is the group of the object being referenced.
* **name**: string (Required): Name is the name of the object being referenced.
* **namespace**: string: Namespace is the namespace of the object being referenced.
* **resource**: string (Required): Resource is the resource of the object being referenced.

## IoK8SApiNetworkingV1Alpha1ServiceCidrSpec
### Properties
* **cidrs**: string[]: CIDRs defines the IP blocks in CIDR notation (e.g. "192.168.0.0/24" or "2001:db8::/64") from which to assign service cluster IPs. Max of two CIDRs is allowed, one of each IP family. This field is immutable.

## IoK8SApiNetworkingV1Alpha1ServiceCidrStatus
### Properties
* **conditions**: [IoK8SApimachineryPkgApisMetaV1Condition](#iok8sapimachinerypkgapismetav1condition)[]: conditions holds an array of metav1.Condition that describe the state of the ServiceCIDR. Current service state

## labels
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

## metadata
### Properties
* **annotations**: [annotations](#annotations): The annotations for the resource.
* **labels**: [labels](#labels): The labels for the resource.
* **name**: string (Required, DeployTimeConstant): The name of the resource.

