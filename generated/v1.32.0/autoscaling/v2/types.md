# autoscaling @ v2

## Resource autoscaling/HorizontalPodAutoscaler@v2
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'autoscaling/v2' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **kind**: 'HorizontalPodAutoscaler' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **spec**: [IoK8SApiAutoscalingV2HorizontalPodAutoscalerSpec](#iok8sapiautoscalingv2horizontalpodautoscalerspec): HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
* **status**: [IoK8SApiAutoscalingV2HorizontalPodAutoscalerStatus](#iok8sapiautoscalingv2horizontalpodautoscalerstatus): HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.

## IoK8SApiAutoscalingV2ContainerResourceMetricSource
### Properties
* **container**: string (Required): container is the name of the container in the pods of the scaling target
* **name**: string (Required): name is the name of the resource in question.
* **target**: [IoK8SApiAutoscalingV2MetricTarget](#iok8sapiautoscalingv2metrictarget) (Required): MetricTarget defines the target value, average value, or average utilization of a specific metric

## IoK8SApiAutoscalingV2ContainerResourceMetricStatus
### Properties
* **container**: string (Required): container is the name of the container in the pods of the scaling target
* **current**: [IoK8SApiAutoscalingV2MetricValueStatus](#iok8sapiautoscalingv2metricvaluestatus) (Required): MetricValueStatus holds the current value for a metric
* **name**: string (Required): name is the name of the resource in question.

## IoK8SApiAutoscalingV2CrossVersionObjectReference
### Properties
* **apiVersion**: string: apiVersion is the API version of the referent
* **kind**: string (Required): kind is the kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **name**: string (Required): name is the name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names

## IoK8SApiAutoscalingV2ExternalMetricSource
### Properties
* **metric**: [IoK8SApiAutoscalingV2MetricIdentifier](#iok8sapiautoscalingv2metricidentifier) (Required): MetricIdentifier defines the name and optionally selector for a metric
* **target**: [IoK8SApiAutoscalingV2MetricTarget](#iok8sapiautoscalingv2metrictarget) (Required): MetricTarget defines the target value, average value, or average utilization of a specific metric

## IoK8SApiAutoscalingV2ExternalMetricStatus
### Properties
* **current**: [IoK8SApiAutoscalingV2MetricValueStatus](#iok8sapiautoscalingv2metricvaluestatus) (Required): MetricValueStatus holds the current value for a metric
* **metric**: [IoK8SApiAutoscalingV2MetricIdentifier](#iok8sapiautoscalingv2metricidentifier) (Required): MetricIdentifier defines the name and optionally selector for a metric

## IoK8SApiAutoscalingV2HorizontalPodAutoscalerBehavior
### Properties
* **scaleDown**: [IoK8SApiAutoscalingV2HPAScalingRules](#iok8sapiautoscalingv2hpascalingrules): HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen.
* **scaleUp**: [IoK8SApiAutoscalingV2HPAScalingRules](#iok8sapiautoscalingv2hpascalingrules): HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen.

## IoK8SApiAutoscalingV2HorizontalPodAutoscalerCondition
### Properties
* **lastTransitionTime**: string: Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* **message**: string: message is a human-readable explanation containing details about the transition
* **reason**: string: reason is the reason for the condition's last transition.
* **status**: string (Required): status is the status of the condition (True, False, Unknown)
* **type**: string (Required): type describes the current condition

## IoK8SApiAutoscalingV2HorizontalPodAutoscalerSpec
### Properties
* **behavior**: [IoK8SApiAutoscalingV2HorizontalPodAutoscalerBehavior](#iok8sapiautoscalingv2horizontalpodautoscalerbehavior): HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
* **maxReplicas**: int (Required): maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
* **metrics**: [IoK8SApiAutoscalingV2MetricSpec](#iok8sapiautoscalingv2metricspec)[]: metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization.
* **minReplicas**: int: minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available.
* **scaleTargetRef**: [IoK8SApiAutoscalingV2CrossVersionObjectReference](#iok8sapiautoscalingv2crossversionobjectreference) (Required): CrossVersionObjectReference contains enough information to let you identify the referred resource.

## IoK8SApiAutoscalingV2HorizontalPodAutoscalerStatus
### Properties
* **conditions**: [IoK8SApiAutoscalingV2HorizontalPodAutoscalerCondition](#iok8sapiautoscalingv2horizontalpodautoscalercondition)[]: conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
* **currentMetrics**: [IoK8SApiAutoscalingV2MetricStatus](#iok8sapiautoscalingv2metricstatus)[]: currentMetrics is the last read state of the metrics used by this autoscaler.
* **currentReplicas**: int: currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
* **desiredReplicas**: int (Required): desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
* **lastScaleTime**: string: Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* **observedGeneration**: int: observedGeneration is the most recent generation observed by this autoscaler.

## IoK8SApiAutoscalingV2HPAScalingPolicy
### Properties
* **periodSeconds**: int (Required): periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
* **type**: string (Required): type is used to specify the scaling policy.
* **value**: int (Required): value contains the amount of change which is permitted by the policy. It must be greater than zero

## IoK8SApiAutoscalingV2HPAScalingRules
### Properties
* **policies**: [IoK8SApiAutoscalingV2HPAScalingPolicy](#iok8sapiautoscalingv2hpascalingpolicy)[]: policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid
* **selectPolicy**: string: selectPolicy is used to specify which policy should be used. If not set, the default value Max is used.
* **stabilizationWindowSeconds**: int: stabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).

## IoK8SApiAutoscalingV2MetricIdentifier
### Properties
* **name**: string (Required): name is the name of the given metric
* **selector**: [IoK8SApimachineryPkgApisMetaV1LabelSelector](#iok8sapimachinerypkgapismetav1labelselector): A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.

## IoK8SApiAutoscalingV2MetricSpec
### Properties
* **containerResource**: [IoK8SApiAutoscalingV2ContainerResourceMetricSource](#iok8sapiautoscalingv2containerresourcemetricsource): ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
* **external**: [IoK8SApiAutoscalingV2ExternalMetricSource](#iok8sapiautoscalingv2externalmetricsource): ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
* **object**: [IoK8SApiAutoscalingV2ObjectMetricSource](#iok8sapiautoscalingv2objectmetricsource): ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
* **pods**: [IoK8SApiAutoscalingV2PodsMetricSource](#iok8sapiautoscalingv2podsmetricsource): PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
* **resource**: [IoK8SApiAutoscalingV2ResourceMetricSource](#iok8sapiautoscalingv2resourcemetricsource): ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
* **type**: string (Required): type is the type of metric source.  It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object.

## IoK8SApiAutoscalingV2MetricStatus
### Properties
* **containerResource**: [IoK8SApiAutoscalingV2ContainerResourceMetricStatus](#iok8sapiautoscalingv2containerresourcemetricstatus): ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
* **external**: [IoK8SApiAutoscalingV2ExternalMetricStatus](#iok8sapiautoscalingv2externalmetricstatus): ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
* **object**: [IoK8SApiAutoscalingV2ObjectMetricStatus](#iok8sapiautoscalingv2objectmetricstatus): ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
* **pods**: [IoK8SApiAutoscalingV2PodsMetricStatus](#iok8sapiautoscalingv2podsmetricstatus): PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
* **resource**: [IoK8SApiAutoscalingV2ResourceMetricStatus](#iok8sapiautoscalingv2resourcemetricstatus): ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
* **type**: string (Required): type is the type of metric source.  It will be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each corresponds to a matching field in the object.

## IoK8SApiAutoscalingV2MetricTarget
### Properties
* **averageUtilization**: int: averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
* **averageValue**: string: Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.

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
* **type**: string (Required): type represents whether the metric type is Utilization, Value, or AverageValue
* **value**: string: Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.

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

## IoK8SApiAutoscalingV2MetricValueStatus
### Properties
* **averageUtilization**: int: currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
* **averageValue**: string: Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.

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
* **value**: string: Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.

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

## IoK8SApiAutoscalingV2ObjectMetricSource
### Properties
* **describedObject**: [IoK8SApiAutoscalingV2CrossVersionObjectReference](#iok8sapiautoscalingv2crossversionobjectreference) (Required): CrossVersionObjectReference contains enough information to let you identify the referred resource.
* **metric**: [IoK8SApiAutoscalingV2MetricIdentifier](#iok8sapiautoscalingv2metricidentifier) (Required): MetricIdentifier defines the name and optionally selector for a metric
* **target**: [IoK8SApiAutoscalingV2MetricTarget](#iok8sapiautoscalingv2metrictarget) (Required): MetricTarget defines the target value, average value, or average utilization of a specific metric

## IoK8SApiAutoscalingV2ObjectMetricStatus
### Properties
* **current**: [IoK8SApiAutoscalingV2MetricValueStatus](#iok8sapiautoscalingv2metricvaluestatus) (Required): MetricValueStatus holds the current value for a metric
* **describedObject**: [IoK8SApiAutoscalingV2CrossVersionObjectReference](#iok8sapiautoscalingv2crossversionobjectreference) (Required): CrossVersionObjectReference contains enough information to let you identify the referred resource.
* **metric**: [IoK8SApiAutoscalingV2MetricIdentifier](#iok8sapiautoscalingv2metricidentifier) (Required): MetricIdentifier defines the name and optionally selector for a metric

## IoK8SApiAutoscalingV2PodsMetricSource
### Properties
* **metric**: [IoK8SApiAutoscalingV2MetricIdentifier](#iok8sapiautoscalingv2metricidentifier) (Required): MetricIdentifier defines the name and optionally selector for a metric
* **target**: [IoK8SApiAutoscalingV2MetricTarget](#iok8sapiautoscalingv2metrictarget) (Required): MetricTarget defines the target value, average value, or average utilization of a specific metric

## IoK8SApiAutoscalingV2PodsMetricStatus
### Properties
* **current**: [IoK8SApiAutoscalingV2MetricValueStatus](#iok8sapiautoscalingv2metricvaluestatus) (Required): MetricValueStatus holds the current value for a metric
* **metric**: [IoK8SApiAutoscalingV2MetricIdentifier](#iok8sapiautoscalingv2metricidentifier) (Required): MetricIdentifier defines the name and optionally selector for a metric

## IoK8SApiAutoscalingV2ResourceMetricSource
### Properties
* **name**: string (Required): name is the name of the resource in question.
* **target**: [IoK8SApiAutoscalingV2MetricTarget](#iok8sapiautoscalingv2metrictarget) (Required): MetricTarget defines the target value, average value, or average utilization of a specific metric

## IoK8SApiAutoscalingV2ResourceMetricStatus
### Properties
* **current**: [IoK8SApiAutoscalingV2MetricValueStatus](#iok8sapiautoscalingv2metricvaluestatus) (Required): MetricValueStatus holds the current value for a metric
* **name**: string (Required): name is the name of the resource in question.

## IoK8SApimachineryPkgApisMetaV1LabelSelector
### Properties
* **matchExpressions**: [IoK8SApimachineryPkgApisMetaV1LabelSelectorRequirement](#iok8sapimachinerypkgapismetav1labelselectorrequirement)[]: matchExpressions is a list of label selector requirements. The requirements are ANDed.
* **matchLabels**: [IoK8SApimachineryPkgApisMetaV1LabelSelectorMatchLabels](#iok8sapimachinerypkgapismetav1labelselectormatchlabels): matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

## IoK8SApimachineryPkgApisMetaV1LabelSelectorMatchLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IoK8SApimachineryPkgApisMetaV1LabelSelectorRequirement
### Properties
* **key**: string (Required): key is the label key that the selector applies to.
* **operator**: string (Required): operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
* **values**: string[]: values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.

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

