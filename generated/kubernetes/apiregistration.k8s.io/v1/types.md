# apiregistration.k8s.io @ v1

## Resource apiregistration.k8s.io/APIService@v1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'apiregistration.k8s.io/v1' (ReadOnly, DeployTimeConstant): The api version.
* **kind**: 'APIService' (ReadOnly, DeployTimeConstant): The resource kind.
* **metadata**: [metadata](#metadata) (Required): The resource metadata.
* **spec**: [IoK8SKubeAggregatorPkgApisApiregistrationV1APIServiceSpec](#iok8skubeaggregatorpkgapisapiregistrationv1apiservicespec): APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
* **status**: [IoK8SKubeAggregatorPkgApisApiregistrationV1APIServiceStatus](#iok8skubeaggregatorpkgapisapiregistrationv1apiservicestatus): APIServiceStatus contains derived information about an API server

## annotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IoK8SKubeAggregatorPkgApisApiregistrationV1APIServiceCondition
### Properties
* **lastTransitionTime**: string: Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* **message**: string: Human-readable message indicating details about last transition.
* **reason**: string: Unique, one-word, CamelCase reason for the condition's last transition.
* **status**: string (Required): Status is the status of the condition. Can be True, False, Unknown.
* **type**: string (Required): Type is the type of the condition.

## IoK8SKubeAggregatorPkgApisApiregistrationV1APIServiceSpec
### Properties
* **caBundle**: any: CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used.
* **group**: string: Group is the API group name this server hosts
* **groupPriorityMinimum**: int (Required): GroupPriorityMininum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s
* **insecureSkipTLSVerify**: bool: InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged.  You should use the CABundle instead.
* **service**: [IoK8SKubeAggregatorPkgApisApiregistrationV1ServiceReference](#iok8skubeaggregatorpkgapisapiregistrationv1servicereference): ServiceReference holds a reference to Service.legacy.k8s.io
* **version**: string: Version is the API version this server hosts.  For example, "v1"
* **versionPriority**: int (Required): VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.

## IoK8SKubeAggregatorPkgApisApiregistrationV1APIServiceStatus
### Properties
* **conditions**: [IoK8SKubeAggregatorPkgApisApiregistrationV1APIServiceCondition](#iok8skubeaggregatorpkgapisapiregistrationv1apiservicecondition)[]: Current service state of apiService.

## IoK8SKubeAggregatorPkgApisApiregistrationV1ServiceReference
### Properties
* **name**: string: Name is the name of the service
* **namespace**: string: Namespace is the namespace of the service
* **port**: int: If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).

## labels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## metadata
### Properties
* **annotations**: [annotations](#annotations): The annotations for the resource.
* **labels**: [labels](#labels): The labels for the resource.
* **name**: string (Required, DeployTimeConstant): The name of the resource.

