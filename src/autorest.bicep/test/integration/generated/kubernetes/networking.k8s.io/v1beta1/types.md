# networking.k8s.io @ v1beta1

## Resource networking.k8s.io/Ingress@v1beta1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'networking.k8s.io/v1beta1' (ReadOnly, DeployTimeConstant): The api version.
* **kind**: 'Ingress' (ReadOnly, DeployTimeConstant): The resource kind.
* **metadata**: [metadata](#metadata) (Required): The resource metadata.
* **spec**: [IoK8SApiNetworkingV1Beta1IngressSpec](#iok8sapinetworkingv1beta1ingressspec): IngressSpec describes the Ingress the user wishes to exist.
* **status**: [IoK8SApiNetworkingV1Beta1IngressStatus](#iok8sapinetworkingv1beta1ingressstatus): IngressStatus describe the current state of the Ingress.

## Resource networking.k8s.io/IngressClass@v1beta1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'networking.k8s.io/v1beta1' (ReadOnly, DeployTimeConstant): The api version.
* **kind**: 'IngressClass' (ReadOnly, DeployTimeConstant): The resource kind.
* **metadata**: [metadata](#metadata) (Required): The resource metadata.
* **spec**: [IoK8SApiNetworkingV1Beta1IngressClassSpec](#iok8sapinetworkingv1beta1ingressclassspec): IngressClassSpec provides information about the class of an Ingress.

## annotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## annotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IoK8SApiCoreV1LoadBalancerIngress
### Properties
* **hostname**: string: Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
* **ip**: string: IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)

## IoK8SApiCoreV1LoadBalancerStatus
### Properties
* **ingress**: [IoK8SApiCoreV1LoadBalancerIngress](#iok8sapicorev1loadbalanceringress)[]: Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.

## IoK8SApiCoreV1TypedLocalObjectReference
### Properties
* **apiGroup**: string: APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
* **kind**: string (Required): Kind is the type of resource being referenced
* **name**: string (Required): Name is the name of resource being referenced

## IoK8SApiNetworkingV1Beta1HttpIngressPath
### Properties
* **backend**: [IoK8SApiNetworkingV1Beta1IngressBackend](#iok8sapinetworkingv1beta1ingressbackend) (Required): IngressBackend describes all endpoints for a given service and port.
* **path**: string: Path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/'. When unspecified, all paths from incoming requests are matched.
* **pathType**: string: PathType determines the interpretation of the Path matching. PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by '/'. Matching is
  done on a path element by element basis. A path element refers is the
  list of labels in the path split by the '/' separator. A request is a
  match for path p if every p is an element-wise prefix of p of the
  request path. Note that if the last element of the path is a substring
  of the last element in request path, it is not a match (e.g. /foo/bar
  matches /foo/bar/baz, but does not match /foo/barbaz).
* ImplementationSpecific: Interpretation of the Path matching is up to
  the IngressClass. Implementations can treat this as a separate PathType
  or treat it identically to Prefix or Exact path types.
Implementations are required to support all path types. Defaults to ImplementationSpecific.

## IoK8SApiNetworkingV1Beta1HttpIngressRuleValue
### Properties
* **paths**: [IoK8SApiNetworkingV1Beta1HttpIngressPath](#iok8sapinetworkingv1beta1httpingresspath)[] (Required): A collection of paths that map requests to backends.

## IoK8SApiNetworkingV1Beta1IngressBackend
### Properties
* **resource**: [IoK8SApiCoreV1TypedLocalObjectReference](#iok8sapicorev1typedlocalobjectreference): TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
* **serviceName**: string: Specifies the name of the referenced service.
* **servicePort**: string: IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.

## IoK8SApiNetworkingV1Beta1IngressClassSpec
### Properties
* **controller**: string: Controller refers to the name of the controller that should handle this class. This allows for different "flavors" that are controlled by the same controller. For example, you may have different Parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. "acme.io/ingress-controller". This field is immutable.
* **parameters**: [IoK8SApiCoreV1TypedLocalObjectReference](#iok8sapicorev1typedlocalobjectreference): TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.

## IoK8SApiNetworkingV1Beta1IngressRule
### Properties
* **host**: string: Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to
   the IP in the Spec of the parent Ingress.
2. The `:` delimiter is not respected because ports are not allowed.
	  Currently the port of an Ingress is implicitly :80 for http and
	  :443 for https.
Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.

Host can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.bar.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. "*.foo.com"). The wildcard character '*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == "*"). Requests will be matched against the Host field in the following way: 1. If Host is precise, the request matches this rule if the http host header is equal to Host. 2. If Host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.
* **http**: [IoK8SApiNetworkingV1Beta1HttpIngressRuleValue](#iok8sapinetworkingv1beta1httpingressrulevalue): HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.

## IoK8SApiNetworkingV1Beta1IngressSpec
### Properties
* **backend**: [IoK8SApiNetworkingV1Beta1IngressBackend](#iok8sapinetworkingv1beta1ingressbackend): IngressBackend describes all endpoints for a given service and port.
* **ingressClassName**: string: IngressClassName is the name of the IngressClass cluster resource. The associated IngressClass defines which controller will implement the resource. This replaces the deprecated `kubernetes.io/ingress.class` annotation. For backwards compatibility, when that annotation is set, it must be given precedence over this field. The controller may emit a warning if the field and annotation have different values. Implementations of this API should ignore Ingresses without a class specified. An IngressClass resource may be marked as default, which can be used to set a default value for this field. For more information, refer to the IngressClass documentation.
* **rules**: [IoK8SApiNetworkingV1Beta1IngressRule](#iok8sapinetworkingv1beta1ingressrule)[]: A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
* **tls**: [IoK8SApiNetworkingV1Beta1IngressTLS](#iok8sapinetworkingv1beta1ingresstls)[]: TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.

## IoK8SApiNetworkingV1Beta1IngressStatus
### Properties
* **loadBalancer**: [IoK8SApiCoreV1LoadBalancerStatus](#iok8sapicorev1loadbalancerstatus): LoadBalancerStatus represents the status of a load-balancer.

## IoK8SApiNetworkingV1Beta1IngressTLS
### Properties
* **hosts**: string[]: Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
* **secretName**: string: SecretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.

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
* **namespace**: string (DeployTimeConstant): The namespace of the resource.

## metadata
### Properties
* **annotations**: [annotations](#annotations): The annotations for the resource.
* **labels**: [labels](#labels): The labels for the resource.
* **name**: string (Required, DeployTimeConstant): The name of the resource.

