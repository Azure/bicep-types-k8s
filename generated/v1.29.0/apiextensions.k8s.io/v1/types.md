# apiextensions.k8s.io @ v1

## Resource apiextensions.k8s.io/CustomResourceDefinition@v1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'apiextensions.k8s.io/v1' (ReadOnly, DeployTimeConstant): APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
* **kind**: 'CustomResourceDefinition' (ReadOnly, DeployTimeConstant): Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* **metadata**: [IoK8SApimachineryPkgApisMetaV1ObjectMeta](#iok8sapimachinerypkgapismetav1objectmeta) (Required, Identifier): ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* **spec**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec](#iok8sapiextensionsapiserverpkgapisapiextensionsv1customresourcedefinitionspec) (Required): CustomResourceDefinitionSpec describes how a user wants their resource to appear
* **status**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus](#iok8sapiextensionsapiserverpkgapisapiextensionsv1customresourcedefinitionstatus): CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition
### Properties
* **description**: string: description is a human readable description of this column.
* **format**: string: format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
* **jsonPath**: string (Required): jsonPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column.
* **name**: string (Required): name is a human readable name for the column.
* **priority**: int: priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0.
* **type**: string (Required): type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion
### Properties
* **strategy**: string (Required): strategy specifies how custom resources are converted between versions. Allowed values are: - `"None"`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `"Webhook"`: API Server will call to an external webhook to do the conversion. Additional information
  is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.
* **webhook**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion](#iok8sapiextensionsapiserverpkgapisapiextensionsv1webhookconversion): WebhookConversion describes how to call a conversion webhook

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition
### Properties
* **lastTransitionTime**: string: Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* **message**: string: message is a human-readable message indicating details about last transition.
* **reason**: string: reason is a unique, one-word, CamelCase reason for the condition's last transition.
* **status**: string (Required): status is the status of the condition. Can be True, False, Unknown.
* **type**: string (Required): type is the type of the condition. Types include Established, NamesAccepted and Terminating.

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames
### Properties
* **categories**: string[]: categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.
* **kind**: string (Required): kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.
* **listKind**: string: listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".
* **plural**: string (Required): plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.
* **shortNames**: string[]: shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.
* **singular**: string: singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec
### Properties
* **conversion**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion](#iok8sapiextensionsapiserverpkgapisapiextensionsv1customresourceconversion): CustomResourceConversion describes how to convert different versions of a CR.
* **group**: string (Required): group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`).
* **names**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames](#iok8sapiextensionsapiserverpkgapisapiextensionsv1customresourcedefinitionnames) (Required): CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
* **preserveUnknownFields**: bool: preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. This field is deprecated in favor of setting `x-preserve-unknown-fields` to true in `spec.versions[*].schema.openAPIV3Schema`. See https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#field-pruning for details.
* **scope**: string (Required): scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`.
* **versions**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion](#iok8sapiextensionsapiserverpkgapisapiextensionsv1customresourcedefinitionversion)[] (Required): versions is the list of all API versions of the defined custom resource. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus
### Properties
* **acceptedNames**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames](#iok8sapiextensionsapiserverpkgapisapiextensionsv1customresourcedefinitionnames): CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
* **conditions**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition](#iok8sapiextensionsapiserverpkgapisapiextensionsv1customresourcedefinitioncondition)[]: conditions indicate state for particular aspects of a CustomResourceDefinition
* **storedVersions**: string[]: storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion
### Properties
* **additionalPrinterColumns**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition](#iok8sapiextensionsapiserverpkgapisapiextensionsv1customresourcecolumndefinition)[]: additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used.
* **deprecated**: bool: deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false.
* **deprecationWarning**: string: deprecationWarning overrides the default warning returned to API clients. May only be set when `deprecated` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists.
* **name**: string (Required): name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true.
* **schema**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation](#iok8sapiextensionsapiserverpkgapisapiextensionsv1customresourcevalidation): CustomResourceValidation is a list of validation methods for CustomResources.
* **served**: bool (Required): served is a flag enabling/disabling this version from being served via REST APIs
* **storage**: bool (Required): storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true.
* **subresources**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources](#iok8sapiextensionsapiserverpkgapisapiextensionsv1customresourcesubresources): CustomResourceSubresources defines the status and scale subresources for CustomResources.

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources
### Properties
* **scale**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale](#iok8sapiextensionsapiserverpkgapisapiextensionsv1customresourcesubresourcescale): CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources.
* **status**: any: Any object

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale
### Properties
* **labelSelectorPath**: string: labelSelectorPath defines the JSON path inside of a custom resource that corresponds to Scale `status.selector`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status` or `.spec`. Must be set to work with HorizontalPodAutoscaler. The field pointed by this JSON path must be a string field (not a complex selector struct) which contains a serialized label selector in string form. More info: https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions#scale-subresource If there is no value under the given path in the custom resource, the `status.selector` value in the `/scale` subresource will default to the empty string.
* **specReplicasPath**: string (Required): specReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `spec.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.spec`. If there is no value under the given path in the custom resource, the `/scale` subresource will return an error on GET.
* **statusReplicasPath**: string (Required): statusReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `status.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status`. If there is no value under the given path in the custom resource, the `status.replicas` value in the `/scale` subresource will default to 0.

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation
### Properties
* **openAPIV3Schema**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaProps](#iok8sapiextensionsapiserverpkgapisapiextensionsv1jsonschemaprops): JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation
### Properties
* **description**: string
* **url**: string

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaProps
### Properties
* **$ref**: string
* **$schema**: string
* **additionalItems**: any: Anything
* **additionalProperties**: any: Anything
* **allOf**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaProps](#iok8sapiextensionsapiserverpkgapisapiextensionsv1jsonschemaprops)[]: Array of io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps
* **anyOf**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaProps](#iok8sapiextensionsapiserverpkgapisapiextensionsv1jsonschemaprops)[]: Array of io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps
* **default**: any: Anything
* **definitions**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaPropsDefinitions](#iok8sapiextensionsapiserverpkgapisapiextensionsv1jsonschemapropsdefinitions): Dictionary of <io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps>
* **dependencies**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaPropsDependencies](#iok8sapiextensionsapiserverpkgapisapiextensionsv1jsonschemapropsdependencies): Dictionary of <any>
* **description**: string
* **enum**: any[]: Array of any
* **example**: any: Anything
* **exclusiveMaximum**: bool
* **exclusiveMinimum**: bool
* **externalDocs**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation](#iok8sapiextensionsapiserverpkgapisapiextensionsv1externaldocumentation): ExternalDocumentation allows referencing an external resource for extended documentation.
* **format**: string: format is an OpenAPI v3 format string. Unknown formats are ignored. The following formats are validated:

- bsonobjectid: a bson object ID, i.e. a 24 characters hex string - uri: an URI as parsed by Golang net/url.ParseRequestURI - email: an email address as parsed by Golang net/mail.ParseAddress - hostname: a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. - ipv4: an IPv4 IP as parsed by Golang net.ParseIP - ipv6: an IPv6 IP as parsed by Golang net.ParseIP - cidr: a CIDR as parsed by Golang net.ParseCIDR - mac: a MAC address as parsed by Golang net.ParseMAC - uuid: an UUID that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid3: an UUID3 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?3[0-9a-f]{3}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid4: an UUID4 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - uuid5: an UUID5 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?5[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - isbn: an ISBN10 or ISBN13 number string like "0321751043" or "978-0321751041" - isbn10: an ISBN10 number string like "0321751043" - isbn13: an ISBN13 number string like "978-0321751041" - creditcard: a credit card number defined by the regex ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$ with any non digit characters mixed in - ssn: a U.S. social security number following the regex ^\d{3}[- ]?\d{2}[- ]?\d{4}$ - hexcolor: an hexadecimal color code like "#FFFFFF: following the regex ^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$ - rgbcolor: an RGB color code like rgb like "rgb(255,255,2559" - byte: base64 encoded binary data - password: any kind of string - date: a date string like "2006-01-02" as defined by full-date in RFC3339 - duration: a duration string like "22 ns" as parsed by Golang time.ParseDuration or compatible with Scala duration format - datetime: a date time string like "2014-12-15T19:30:20.000Z" as defined by date-time in RFC3339.
* **id**: string
* **items**: any: Anything
* **maximum**: int
* **maxItems**: int
* **maxLength**: int
* **maxProperties**: int
* **minimum**: int
* **minItems**: int
* **minLength**: int
* **minProperties**: int
* **multipleOf**: int
* **not**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaProps](#iok8sapiextensionsapiserverpkgapisapiextensionsv1jsonschemaprops): JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).
* **nullable**: bool
* **oneOf**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaProps](#iok8sapiextensionsapiserverpkgapisapiextensionsv1jsonschemaprops)[]: Array of io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps
* **pattern**: string
* **patternProperties**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaPropsPatternProperties](#iok8sapiextensionsapiserverpkgapisapiextensionsv1jsonschemapropspatternproperties): Dictionary of <io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps>
* **properties**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaPropsProperties](#iok8sapiextensionsapiserverpkgapisapiextensionsv1jsonschemapropsproperties): Dictionary of <io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps>
* **required**: string[]: Array of IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaPropsRequiredItem
* **title**: string
* **type**: string
* **uniqueItems**: bool
* **x-kubernetes-embedded-resource**: bool: x-kubernetes-embedded-resource defines that the value is an embedded Kubernetes runtime.Object, with TypeMeta and ObjectMeta. The type must be object. It is allowed to further restrict the embedded object. kind, apiVersion and metadata are validated automatically. x-kubernetes-preserve-unknown-fields is allowed to be true, but does not have to be if the object is fully specified (up to kind, apiVersion, metadata).
* **x-kubernetes-int-or-string**: bool: x-kubernetes-int-or-string specifies that this value is either an integer or a string. If this is true, an empty type is allowed and type as child of anyOf is permitted if following one of the following patterns:

1) anyOf:
   - type: integer
   - type: string
2) allOf:
   - anyOf:
     - type: integer
     - type: string
   - ... zero or more
* **x-kubernetes-list-map-keys**: string[]: x-kubernetes-list-map-keys annotates an array with the x-kubernetes-list-type `map` by specifying the keys used as the index of the map.

This tag MUST only be used on lists that have the "x-kubernetes-list-type" extension set to "map". Also, the values specified for this attribute must be a scalar typed field of the child structure (no nesting is supported).

The properties specified must either be required or have a default value, to ensure those properties are present for all list items.
* **x-kubernetes-list-type**: string: x-kubernetes-list-type annotates an array to further describe its topology. This extension must only be used on lists and may have 3 possible values:

1) `atomic`: the list is treated as a single entity, like a scalar.
     Atomic lists will be entirely replaced when updated. This extension
     may be used on any type of list (struct, scalar, ...).
2) `set`:
     Sets are lists that must not have multiple items with the same value. Each
     value must be a scalar, an object with x-kubernetes-map-type `atomic` or an
     array with x-kubernetes-list-type `atomic`.
3) `map`:
     These lists are like maps in that their elements have a non-index key
     used to identify them. Order is preserved upon merge. The map tag
     must only be used on a list with elements of type object.
Defaults to atomic for arrays.
* **x-kubernetes-map-type**: string: x-kubernetes-map-type annotates an object to further describe its topology. This extension must only be used when type is object and may have 2 possible values:

1) `granular`:
     These maps are actual maps (key-value pairs) and each fields are independent
     from each other (they can each be manipulated by separate actors). This is
     the default behaviour for all maps.
2) `atomic`: the list is treated as a single entity, like a scalar.
     Atomic maps will be entirely replaced when updated.
* **x-kubernetes-preserve-unknown-fields**: bool: x-kubernetes-preserve-unknown-fields stops the API server decoding step from pruning fields which are not specified in the validation schema. This affects fields recursively, but switches back to normal pruning behaviour if nested properties or additionalProperties are specified in the schema. This can either be true or undefined. False is forbidden.
* **x-kubernetes-validations**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1ValidationRule](#iok8sapiextensionsapiserverpkgapisapiextensionsv1validationrule)[]: x-kubernetes-validations describes a list of validation rules written in the CEL expression language. This field is an alpha-level. Using this field requires the feature gate `CustomResourceValidationExpressions` to be enabled.

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaPropsDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaProps](#iok8sapiextensionsapiserverpkgapisapiextensionsv1jsonschemaprops)

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaPropsDependencies
### Properties
### Additional Properties
* **Additional Properties Type**: any

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaPropsPatternProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaProps](#iok8sapiextensionsapiserverpkgapisapiextensionsv1jsonschemaprops)

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaPropsProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1JsonSchemaProps](#iok8sapiextensionsapiserverpkgapisapiextensionsv1jsonschemaprops)

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1ServiceReference
### Properties
* **name**: string (Required): name is the name of the service. Required
* **namespace**: string (Required): namespace is the namespace of the service. Required
* **path**: string: path is an optional URL path at which the webhook will be contacted.
* **port**: int: port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1ValidationRule
### Properties
* **fieldPath**: string: fieldPath represents the field path returned when the validation fails. It must be a relative JSON path (i.e. with array notation) scoped to the location of this x-kubernetes-validations extension in the schema and refer to an existing field. e.g. when validation checks if a specific attribute `foo` under a map `testMap`, the fieldPath could be set to `.testMap.foo` If the validation checks two lists must have unique attributes, the fieldPath could be set to either of the list: e.g. `.testList` It does not support list numeric index. It supports child operation to refer to an existing field currently. Refer to [JSONPath support in Kubernetes](https://kubernetes.io/docs/reference/kubectl/jsonpath/) for more info. Numeric index of array is not supported. For field name which contains special characters, use `['specialName']` to refer the field name. e.g. for attribute `foo.34$` appears in a list `testList`, the fieldPath could be set to `.testList['foo.34$']`
* **message**: string: Message represents the message displayed when validation fails. The message is required if the Rule contains line breaks. The message must not contain line breaks. If unset, the message is "failed rule: {Rule}". e.g. "must be a URL with the host matching spec.host"
* **messageExpression**: string: MessageExpression declares a CEL expression that evaluates to the validation failure message that is returned when this rule fails. Since messageExpression is used as a failure message, it must evaluate to a string. If both message and messageExpression are present on a rule, then messageExpression will be used if validation fails. If messageExpression results in a runtime error, the runtime error is logged, and the validation failure message is produced as if the messageExpression field were unset. If messageExpression evaluates to an empty string, a string with only spaces, or a string that contains line breaks, then the validation failure message will also be produced as if the messageExpression field were unset, and the fact that messageExpression produced an empty string/string with only spaces/string with line breaks will be logged. messageExpression has access to all the same variables as the rule; the only difference is the return type. Example: "x must be less than max ("+string(self.max)+")"
* **optionalOldSelf**: bool: optionalOldSelf is used to opt a transition rule into evaluation even when the object is first created, or if the old object is missing the value.

When enabled `oldSelf` will be a CEL optional whose value will be `None` if there is no old value, or when the object is initially created.

You may check for presence of oldSelf using `oldSelf.hasValue()` and unwrap it after checking using `oldSelf.value()`. Check the CEL documentation for Optional types for more information: https://pkg.go.dev/github.com/google/cel-go/cel#OptionalTypes

May not be set unless `oldSelf` is used in `rule`.
* **reason**: string: reason provides a machine-readable validation failure reason that is returned to the caller when a request fails this validation rule. The HTTP status code returned to the caller will match the reason of the reason of the first failed validation rule. The currently supported reasons are: "FieldValueInvalid", "FieldValueForbidden", "FieldValueRequired", "FieldValueDuplicate". If not set, default to use "FieldValueInvalid". All future added reasons must be accepted by clients when reading this value and unknown reasons should be treated as FieldValueInvalid.
* **rule**: string (Required): Rule represents the expression which will be evaluated by CEL. ref: https://github.com/google/cel-spec The Rule is scoped to the location of the x-kubernetes-validations extension in the schema. The `self` variable in the CEL expression is bound to the scoped value. Example: - Rule scoped to the root of a resource with a status subresource: {"rule": "self.status.actual <= self.spec.maxDesired"}

If the Rule is scoped to an object with properties, the accessible properties of the object are field selectable via `self.field` and field presence can be checked via `has(self.field)`. Null valued fields are treated as absent fields in CEL expressions. If the Rule is scoped to an object with additionalProperties (i.e. a map) the value of the map are accessible via `self[mapKey]`, map containment can be checked via `mapKey in self` and all entries of the map are accessible via CEL macros and functions such as `self.all(...)`. If the Rule is scoped to an array, the elements of the array are accessible via `self[i]` and also by macros and functions. If the Rule is scoped to a scalar, `self` is bound to the scalar value. Examples: - Rule scoped to a map of objects: {"rule": "self.components['Widget'].priority < 10"} - Rule scoped to a list of integers: {"rule": "self.values.all(value, value >= 0 && value < 100)"} - Rule scoped to a string value: {"rule": "self.startsWith('kube')"}

The `apiVersion`, `kind`, `metadata.name` and `metadata.generateName` are always accessible from the root of the object and from any x-kubernetes-embedded-resource annotated objects. No other metadata properties are accessible.

Unknown data preserved in custom resources via x-kubernetes-preserve-unknown-fields is not accessible in CEL expressions. This includes: - Unknown field values that are preserved by object schemas with x-kubernetes-preserve-unknown-fields. - Object properties where the property schema is of an "unknown type". An "unknown type" is recursively defined as:
  - A schema with no type and x-kubernetes-preserve-unknown-fields set to true
  - An array where the items schema is of an "unknown type"
  - An object where the additionalProperties schema is of an "unknown type"

Only property names of the form `[a-zA-Z_.-/][a-zA-Z0-9_.-/]*` are accessible. Accessible property names are escaped according to the following rules when accessed in the expression: - '__' escapes to '__underscores__' - '.' escapes to '__dot__' - '-' escapes to '__dash__' - '/' escapes to '__slash__' - Property names that exactly match a CEL RESERVED keyword escape to '__{keyword}__'. The keywords are:
	  "true", "false", "null", "in", "as", "break", "const", "continue", "else", "for", "function", "if",
	  "import", "let", "loop", "package", "namespace", "return".
Examples:
  - Rule accessing a property named "namespace": {"rule": "self.__namespace__ > 0"}
  - Rule accessing a property named "x-prop": {"rule": "self.x__dash__prop > 0"}
  - Rule accessing a property named "redact__d": {"rule": "self.redact__underscores__d > 0"}

Equality on arrays with x-kubernetes-list-type of 'set' or 'map' ignores element order, i.e. [1, 2] == [2, 1]. Concatenation on arrays with x-kubernetes-list-type use the semantics of the list type:
  - 'set': `X + Y` performs a union where the array positions of all elements in `X` are preserved and
    non-intersecting elements in `Y` are appended, retaining their partial order.
  - 'map': `X + Y` performs a merge where the array positions of all keys in `X` are preserved but the values
    are overwritten by values in `Y` when the key sets of `X` and `Y` intersect. Elements in `Y` with
    non-intersecting keys are appended, retaining their partial order.

If `rule` makes use of the `oldSelf` variable it is implicitly a `transition rule`.

By default, the `oldSelf` variable is the same type as `self`. When `optionalOldSelf` is true, the `oldSelf` variable is a CEL optional
 variable whose value() is the same type as `self`.
See the documentation for the `optionalOldSelf` field for details.

Transition rules by default are applied only on UPDATE requests and are skipped if an old value could not be found. You can opt a transition rule into unconditional evaluation by setting `optionalOldSelf` to true.

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig
### Properties
* **caBundle**: any: caBundle is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.
* **service**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1ServiceReference](#iok8sapiextensionsapiserverpkgapisapiextensionsv1servicereference): ServiceReference holds a reference to Service.legacy.k8s.io
* **url**: string: url gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https://".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.

## IoK8SApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion
### Properties
* **clientConfig**: [IoK8SApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig](#iok8sapiextensionsapiserverpkgapisapiextensionsv1webhookclientconfig): WebhookClientConfig contains the information to make a TLS connection with the webhook.
* **conversionReviewVersions**: string[] (Required): conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.

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
* **generation**: int (ReadOnly): A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
* **labels**: [IoK8SApimachineryPkgApisMetaV1ObjectMetaLabels](#iok8sapimachinerypkgapismetav1objectmetalabels): Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
* **managedFields**: [IoK8SApimachineryPkgApisMetaV1ManagedFieldsEntry](#iok8sapimachinerypkgapismetav1managedfieldsentry)[] (ReadOnly): ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
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

