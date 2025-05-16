# admissionregistration.k8s.io @ v1

## Resource admissionregistration.k8s.io/MutatingWebhookConfiguration@v1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'admissionregistration.k8s.io/v1' (ReadOnly, DeployTimeConstant): The api version.
* **kind**: 'MutatingWebhookConfiguration' (ReadOnly, DeployTimeConstant): The resource kind.
* **metadata**: [metadata](#metadata) (Required): The resource metadata.
* **webhooks**: [IoK8SApiAdmissionregistrationV1MutatingWebhook](#iok8sapiadmissionregistrationv1mutatingwebhook)[]: Webhooks is a list of webhooks and the affected resources and operations.

## Resource admissionregistration.k8s.io/ValidatingAdmissionPolicy@v1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'admissionregistration.k8s.io/v1' (ReadOnly, DeployTimeConstant): The api version.
* **kind**: 'ValidatingAdmissionPolicy' (ReadOnly, DeployTimeConstant): The resource kind.
* **metadata**: [metadata](#metadata) (Required): The resource metadata.
* **spec**: [IoK8SApiAdmissionregistrationV1ValidatingAdmissionPolicySpec](#iok8sapiadmissionregistrationv1validatingadmissionpolicyspec): ValidatingAdmissionPolicySpec is the specification of the desired behavior of the AdmissionPolicy.
* **status**: [IoK8SApiAdmissionregistrationV1ValidatingAdmissionPolicyStatus](#iok8sapiadmissionregistrationv1validatingadmissionpolicystatus): ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.

## Resource admissionregistration.k8s.io/ValidatingAdmissionPolicyBinding@v1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'admissionregistration.k8s.io/v1' (ReadOnly, DeployTimeConstant): The api version.
* **kind**: 'ValidatingAdmissionPolicyBinding' (ReadOnly, DeployTimeConstant): The resource kind.
* **metadata**: [metadata](#metadata) (Required): The resource metadata.
* **spec**: [IoK8SApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec](#iok8sapiadmissionregistrationv1validatingadmissionpolicybindingspec): ValidatingAdmissionPolicyBindingSpec is the specification of the ValidatingAdmissionPolicyBinding.

## Resource admissionregistration.k8s.io/ValidatingWebhookConfiguration@v1
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: 'admissionregistration.k8s.io/v1' (ReadOnly, DeployTimeConstant): The api version.
* **kind**: 'ValidatingWebhookConfiguration' (ReadOnly, DeployTimeConstant): The resource kind.
* **metadata**: [metadata](#metadata) (Required): The resource metadata.
* **webhooks**: [IoK8SApiAdmissionregistrationV1ValidatingWebhook](#iok8sapiadmissionregistrationv1validatingwebhook)[]: Webhooks is a list of webhooks and the affected resources and operations.

## annotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## annotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## annotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## annotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IoK8SApiAdmissionregistrationV1AuditAnnotation
### Properties
* **key**: string (Required): key specifies the audit annotation key. The audit annotation keys of a ValidatingAdmissionPolicy must be unique. The key must be a qualified name ([A-Za-z0-9][-A-Za-z0-9_.]*) no more than 63 bytes in length.

The key is combined with the resource name of the ValidatingAdmissionPolicy to construct an audit annotation key: "{ValidatingAdmissionPolicy name}/{key}".

If an admission webhook uses the same resource name as this ValidatingAdmissionPolicy and the same audit annotation key, the annotation key will be identical. In this case, the first annotation written with the key will be included in the audit event and all subsequent annotations with the same key will be discarded.

Required.
* **valueExpression**: string (Required): valueExpression represents the expression which is evaluated by CEL to produce an audit annotation value. The expression must evaluate to either a string or null value. If the expression evaluates to a string, the audit annotation is included with the string value. If the expression evaluates to null or empty string the audit annotation will be omitted. The valueExpression may be no longer than 5kb in length. If the result of the valueExpression is more than 10kb in length, it will be truncated to 10kb.

If multiple ValidatingAdmissionPolicyBinding resources match an API request, then the valueExpression will be evaluated for each binding. All unique values produced by the valueExpressions will be joined together in a comma-separated list.

Required.

## IoK8SApiAdmissionregistrationV1ExpressionWarning
### Properties
* **fieldRef**: string (Required): The path to the field that refers the expression. For example, the reference to the expression of the first item of validations is "spec.validations[0].expression"
* **warning**: string (Required): The content of type checking information in a human-readable form. Each line of the warning contains the type that the expression is checked against, followed by the type check error from the compiler.

## IoK8SApiAdmissionregistrationV1MatchCondition
### Properties
* **expression**: string (Required): Expression represents the expression which will be evaluated by CEL. Must evaluate to bool. CEL expressions have access to the contents of the AdmissionRequest and Authorizer, organized into CEL variables:

'object' - The object from the incoming request. The value is null for DELETE requests. 'oldObject' - The existing object. The value is null for CREATE requests. 'request' - Attributes of the admission request(/pkg/apis/admission/types.go#AdmissionRequest). 'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.
  See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz
'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the
  request resource.
Documentation on CEL: https://kubernetes.io/docs/reference/using-api/cel/

Required.
* **name**: string (Required): Name is an identifier for this match condition, used for strategic merging of MatchConditions, as well as providing an identifier for logging purposes. A good name should be descriptive of the associated expression. Name must be a qualified name consisting of alphanumeric characters, '-', '_' or '.', and must start and end with an alphanumeric character (e.g. 'MyName',  or 'my.name',  or '123-abc', regex used for validation is '([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9]') with an optional DNS subdomain prefix and '/' (e.g. 'example.com/MyName')

Required.

## IoK8SApiAdmissionregistrationV1MatchResources
### Properties
* **excludeResourceRules**: [IoK8SApiAdmissionregistrationV1NamedRuleWithOperations](#iok8sapiadmissionregistrationv1namedrulewithoperations)[]: ExcludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
* **matchPolicy**: string: matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.

- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.

Defaults to "Equivalent"
* **namespaceSelector**: [IoK8SApimachineryPkgApisMetaV1LabelSelector](#iok8sapimachinerypkgapismetav1labelselector): A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* **objectSelector**: [IoK8SApimachineryPkgApisMetaV1LabelSelector](#iok8sapimachinerypkgapismetav1labelselector): A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* **resourceRules**: [IoK8SApiAdmissionregistrationV1NamedRuleWithOperations](#iok8sapiadmissionregistrationv1namedrulewithoperations)[]: ResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.

## IoK8SApiAdmissionregistrationV1MutatingWebhook
### Properties
* **admissionReviewVersions**: string[] (Required): AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.
* **clientConfig**: [IoK8SApiAdmissionregistrationV1WebhookClientConfig](#iok8sapiadmissionregistrationv1webhookclientconfig) (Required): WebhookClientConfig contains the information to make a TLS connection with the webhook
* **failurePolicy**: string: FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.
* **matchConditions**: [IoK8SApiAdmissionregistrationV1MatchCondition](#iok8sapiadmissionregistrationv1matchcondition)[]: MatchConditions is a list of conditions that must be met for a request to be sent to this webhook. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.

The exact matching logic is (in order):
  1. If ANY matchCondition evaluates to FALSE, the webhook is skipped.
  2. If ALL matchConditions evaluate to TRUE, the webhook is called.
  3. If any matchCondition evaluates to an error (but none are FALSE):
     - If failurePolicy=Fail, reject the request
     - If failurePolicy=Ignore, the error is ignored and the webhook is skipped
* **matchPolicy**: string: matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.

- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Equivalent"
* **name**: string (Required): The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
* **namespaceSelector**: [IoK8SApimachineryPkgApisMetaV1LabelSelector](#iok8sapimachinerypkgapismetav1labelselector): A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* **objectSelector**: [IoK8SApimachineryPkgApisMetaV1LabelSelector](#iok8sapimachinerypkgapismetav1labelselector): A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* **reinvocationPolicy**: string: reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".

Never: the webhook will not be called more than once in a single admission evaluation.

IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.

Defaults to "Never".
* **rules**: [IoK8SApiAdmissionregistrationV1RuleWithOperations](#iok8sapiadmissionregistrationv1rulewithoperations)[]: Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.
* **sideEffects**: string (Required): SideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.
* **timeoutSeconds**: int: TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.

## IoK8SApiAdmissionregistrationV1NamedRuleWithOperations
### Properties
* **apiGroups**: string[]: APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.
* **apiVersions**: string[]: APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.
* **operations**: string[]: Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required.
* **resourceNames**: string[]: ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
* **resources**: string[]: Resources is a list of resources this rule applies to.

For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '*/scale' means all scale subresources. '*/*' means all resources and their subresources.

If wildcard is present, the validation rule will ensure resources do not overlap with each other.

Depending on the enclosing object, subresources might not be allowed. Required.
* **scope**: string: scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "*".

## IoK8SApiAdmissionregistrationV1ParamKind
### Properties
* **apiVersion**: string: APIVersion is the API group version the resources belong to. In format of "group/version". Required.
* **kind**: string: Kind is the API kind the resources belong to. Required.

## IoK8SApiAdmissionregistrationV1ParamRef
### Properties
* **name**: string: name is the name of the resource being referenced.

One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.

A single parameter used for all admission requests can be configured by setting the `name` field, leaving `selector` blank, and setting namespace if `paramKind` is namespace-scoped.
* **namespace**: string: namespace is the namespace of the referenced resource. Allows limiting the search for params to a specific namespace. Applies to both `name` and `selector` fields.

A per-namespace parameter may be used by specifying a namespace-scoped `paramKind` in the policy and leaving this field empty.

- If `paramKind` is cluster-scoped, this field MUST be unset. Setting this field results in a configuration error.

- If `paramKind` is namespace-scoped, the namespace of the object being evaluated for admission will be used when this field is left unset. Take care that if this is left empty the binding must not match any cluster-scoped resources, which will result in an error.
* **parameterNotFoundAction**: string: `parameterNotFoundAction` controls the behavior of the binding when the resource exists, and name or selector is valid, but there are no parameters matched by the binding. If the value is set to `Allow`, then no matched parameters will be treated as successful validation by the binding. If set to `Deny`, then no matched parameters will be subject to the `failurePolicy` of the policy.

Allowed values are `Allow` or `Deny`

Required
* **selector**: [IoK8SApimachineryPkgApisMetaV1LabelSelector](#iok8sapimachinerypkgapismetav1labelselector): A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.

## IoK8SApiAdmissionregistrationV1RuleWithOperations
### Properties
* **apiGroups**: string[]: APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.
* **apiVersions**: string[]: APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.
* **operations**: string[]: Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required.
* **resources**: string[]: Resources is a list of resources this rule applies to.

For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '*/scale' means all scale subresources. '*/*' means all resources and their subresources.

If wildcard is present, the validation rule will ensure resources do not overlap with each other.

Depending on the enclosing object, subresources might not be allowed. Required.
* **scope**: string: scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "*".

## IoK8SApiAdmissionregistrationV1ServiceReference
### Properties
* **name**: string (Required): `name` is the name of the service. Required
* **namespace**: string (Required): `namespace` is the namespace of the service. Required
* **path**: string: `path` is an optional URL path which will be sent in any request to this service.
* **port**: int: If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).

## IoK8SApiAdmissionregistrationV1TypeChecking
### Properties
* **expressionWarnings**: [IoK8SApiAdmissionregistrationV1ExpressionWarning](#iok8sapiadmissionregistrationv1expressionwarning)[]: The type checking warnings for each expression.

## IoK8SApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec
### Properties
* **matchResources**: [IoK8SApiAdmissionregistrationV1MatchResources](#iok8sapiadmissionregistrationv1matchresources): MatchResources decides whether to run the admission control policy on an object based on whether it meets the match criteria. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
* **paramRef**: [IoK8SApiAdmissionregistrationV1ParamRef](#iok8sapiadmissionregistrationv1paramref): ParamRef describes how to locate the params to be used as input to expressions of rules applied by a policy binding.
* **policyName**: string: PolicyName references a ValidatingAdmissionPolicy name which the ValidatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.
* **validationActions**: string[]: validationActions declares how Validations of the referenced ValidatingAdmissionPolicy are enforced. If a validation evaluates to false it is always enforced according to these actions.

Failures defined by the ValidatingAdmissionPolicy's FailurePolicy are enforced according to these actions only if the FailurePolicy is set to Fail, otherwise the failures are ignored. This includes compilation errors, runtime errors and misconfigurations of the policy.

validationActions is declared as a set of action values. Order does not matter. validationActions may not contain duplicates of the same action.

The supported actions values are:

"Deny" specifies that a validation failure results in a denied request.

"Warn" specifies that a validation failure is reported to the request client in HTTP Warning headers, with a warning code of 299. Warnings can be sent both for allowed or denied admission responses.

"Audit" specifies that a validation failure is included in the published audit event for the request. The audit event will contain a `validation.policy.admission.k8s.io/validation_failure` audit annotation with a value containing the details of the validation failures, formatted as a JSON list of objects, each with the following fields: - message: The validation failure message string - policy: The resource name of the ValidatingAdmissionPolicy - binding: The resource name of the ValidatingAdmissionPolicyBinding - expressionIndex: The index of the failed validations in the ValidatingAdmissionPolicy - validationActions: The enforcement actions enacted for the validation failure Example audit annotation: `"validation.policy.admission.k8s.io/validation_failure": "[{\"message\": \"Invalid value\", {\"policy\": \"policy.example.com\", {\"binding\": \"policybinding.example.com\", {\"expressionIndex\": \"1\", {\"validationActions\": [\"Audit\"]}]"`

Clients should expect to handle additional values by ignoring any values not recognized.

"Deny" and "Warn" may not be used together since this combination needlessly duplicates the validation failure both in the API response body and the HTTP warning headers.

Required.

## IoK8SApiAdmissionregistrationV1ValidatingAdmissionPolicySpec
### Properties
* **auditAnnotations**: [IoK8SApiAdmissionregistrationV1AuditAnnotation](#iok8sapiadmissionregistrationv1auditannotation)[]: auditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. validations and auditAnnotations may not both be empty; a least one of validations or auditAnnotations is required.
* **failurePolicy**: string: failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.

A policy is invalid if spec.paramKind refers to a non-existent Kind. A binding is invalid if spec.paramRef.name refers to a non-existent resource.

failurePolicy does not define how validations that evaluate to false are handled.

When failurePolicy is set to Fail, ValidatingAdmissionPolicyBinding validationActions define how failures are enforced.

Allowed values are Ignore or Fail. Defaults to Fail.
* **matchConditions**: [IoK8SApiAdmissionregistrationV1MatchCondition](#iok8sapiadmissionregistrationv1matchcondition)[]: MatchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.

If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.

The exact matching logic is (in order):
  1. If ANY matchCondition evaluates to FALSE, the policy is skipped.
  2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.
  3. If any matchCondition evaluates to an error (but none are FALSE):
     - If failurePolicy=Fail, reject the request
     - If failurePolicy=Ignore, the policy is skipped
* **matchConstraints**: [IoK8SApiAdmissionregistrationV1MatchResources](#iok8sapiadmissionregistrationv1matchresources): MatchResources decides whether to run the admission control policy on an object based on whether it meets the match criteria. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
* **paramKind**: [IoK8SApiAdmissionregistrationV1ParamKind](#iok8sapiadmissionregistrationv1paramkind): ParamKind is a tuple of Group Kind and Version.
* **validations**: [IoK8SApiAdmissionregistrationV1Validation](#iok8sapiadmissionregistrationv1validation)[]: Validations contain CEL expressions which is used to apply the validation. Validations and AuditAnnotations may not both be empty; a minimum of one Validations or AuditAnnotations is required.
* **variables**: [IoK8SApiAdmissionregistrationV1Variable](#iok8sapiadmissionregistrationv1variable)[]: Variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except MatchConditions because MatchConditions are evaluated before the rest of the policy.

The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, Variables must be sorted by the order of first appearance and acyclic.

## IoK8SApiAdmissionregistrationV1ValidatingAdmissionPolicyStatus
### Properties
* **conditions**: [IoK8SApimachineryPkgApisMetaV1Condition](#iok8sapimachinerypkgapismetav1condition)[]: The conditions represent the latest available observations of a policy's current state.
* **observedGeneration**: int: The generation observed by the controller.
* **typeChecking**: [IoK8SApiAdmissionregistrationV1TypeChecking](#iok8sapiadmissionregistrationv1typechecking): TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy

## IoK8SApiAdmissionregistrationV1ValidatingWebhook
### Properties
* **admissionReviewVersions**: string[] (Required): AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.
* **clientConfig**: [IoK8SApiAdmissionregistrationV1WebhookClientConfig](#iok8sapiadmissionregistrationv1webhookclientconfig) (Required): WebhookClientConfig contains the information to make a TLS connection with the webhook
* **failurePolicy**: string: FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.
* **matchConditions**: [IoK8SApiAdmissionregistrationV1MatchCondition](#iok8sapiadmissionregistrationv1matchcondition)[]: MatchConditions is a list of conditions that must be met for a request to be sent to this webhook. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.

The exact matching logic is (in order):
  1. If ANY matchCondition evaluates to FALSE, the webhook is skipped.
  2. If ALL matchConditions evaluate to TRUE, the webhook is called.
  3. If any matchCondition evaluates to an error (but none are FALSE):
     - If failurePolicy=Fail, reject the request
     - If failurePolicy=Ignore, the error is ignored and the webhook is skipped
* **matchPolicy**: string: matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.

- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Equivalent"
* **name**: string (Required): The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
* **namespaceSelector**: [IoK8SApimachineryPkgApisMetaV1LabelSelector](#iok8sapimachinerypkgapismetav1labelselector): A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* **objectSelector**: [IoK8SApimachineryPkgApisMetaV1LabelSelector](#iok8sapimachinerypkgapismetav1labelselector): A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* **rules**: [IoK8SApiAdmissionregistrationV1RuleWithOperations](#iok8sapiadmissionregistrationv1rulewithoperations)[]: Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.
* **sideEffects**: string (Required): SideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.
* **timeoutSeconds**: int: TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.

## IoK8SApiAdmissionregistrationV1Validation
### Properties
* **expression**: string (Required): Expression represents the expression which will be evaluated by CEL. ref: https://github.com/google/cel-spec CEL expressions have access to the contents of the API request/response, organized into CEL variables as well as some other useful variables:

- 'object' - The object from the incoming request. The value is null for DELETE requests. - 'oldObject' - The existing object. The value is null for CREATE requests. - 'request' - Attributes of the API request([ref](/pkg/apis/admission/types.go#AdmissionRequest)). - 'params' - Parameter resource referred to by the policy binding being evaluated. Only populated if the policy has a ParamKind. - 'namespaceObject' - The namespace object that the incoming object belongs to. The value is null for cluster-scoped resources. - 'variables' - Map of composited variables, from its name to its lazily evaluated value.
  For example, a variable named 'foo' can be accessed as 'variables.foo'.
- 'authorizer' - A CEL Authorizer. May be used to perform authorization checks for the principal (user or service account) of the request.
  See https://pkg.go.dev/k8s.io/apiserver/pkg/cel/library#Authz
- 'authorizer.requestResource' - A CEL ResourceCheck constructed from the 'authorizer' and configured with the
  request resource.

The `apiVersion`, `kind`, `metadata.name` and `metadata.generateName` are always accessible from the root of the object. No other metadata properties are accessible.

Only property names of the form `[a-zA-Z_.-/][a-zA-Z0-9_.-/]*` are accessible. Accessible property names are escaped according to the following rules when accessed in the expression: - '__' escapes to '__underscores__' - '.' escapes to '__dot__' - '-' escapes to '__dash__' - '/' escapes to '__slash__' - Property names that exactly match a CEL RESERVED keyword escape to '__{keyword}__'. The keywords are:
	  "true", "false", "null", "in", "as", "break", "const", "continue", "else", "for", "function", "if",
	  "import", "let", "loop", "package", "namespace", "return".
Examples:
  - Expression accessing a property named "namespace": {"Expression": "object.__namespace__ > 0"}
  - Expression accessing a property named "x-prop": {"Expression": "object.x__dash__prop > 0"}
  - Expression accessing a property named "redact__d": {"Expression": "object.redact__underscores__d > 0"}

Equality on arrays with list type of 'set' or 'map' ignores element order, i.e. [1, 2] == [2, 1]. Concatenation on arrays with x-kubernetes-list-type use the semantics of the list type:
  - 'set': `X + Y` performs a union where the array positions of all elements in `X` are preserved and
    non-intersecting elements in `Y` are appended, retaining their partial order.
  - 'map': `X + Y` performs a merge where the array positions of all keys in `X` are preserved but the values
    are overwritten by values in `Y` when the key sets of `X` and `Y` intersect. Elements in `Y` with
    non-intersecting keys are appended, retaining their partial order.
Required.
* **message**: string: Message represents the message displayed when validation fails. The message is required if the Expression contains line breaks. The message must not contain line breaks. If unset, the message is "failed rule: {Rule}". e.g. "must be a URL with the host matching spec.host" If the Expression contains line breaks. Message is required. The message must not contain line breaks. If unset, the message is "failed Expression: {Expression}".
* **messageExpression**: string: messageExpression declares a CEL expression that evaluates to the validation failure message that is returned when this rule fails. Since messageExpression is used as a failure message, it must evaluate to a string. If both message and messageExpression are present on a validation, then messageExpression will be used if validation fails. If messageExpression results in a runtime error, the runtime error is logged, and the validation failure message is produced as if the messageExpression field were unset. If messageExpression evaluates to an empty string, a string with only spaces, or a string that contains line breaks, then the validation failure message will also be produced as if the messageExpression field were unset, and the fact that messageExpression produced an empty string/string with only spaces/string with line breaks will be logged. messageExpression has access to all the same variables as the `expression` except for 'authorizer' and 'authorizer.requestResource'. Example: "object.x must be less than max ("+string(params.max)+")"
* **reason**: string: Reason represents a machine-readable description of why this validation failed. If this is the first validation in the list to fail, this reason, as well as the corresponding HTTP response code, are used in the HTTP response to the client. The currently supported reasons are: "Unauthorized", "Forbidden", "Invalid", "RequestEntityTooLarge". If not set, StatusReasonInvalid is used in the response to the client.

## IoK8SApiAdmissionregistrationV1Variable
### Properties
* **expression**: string (Required): Expression is the expression that will be evaluated as the value of the variable. The CEL expression has access to the same identifiers as the CEL expressions in Validation.
* **name**: string (Required): Name is the name of the variable. The name must be a valid CEL identifier and unique among all variables. The variable can be accessed in other expressions through `variables` For example, if name is "foo", the variable will be available as `variables.foo`

## IoK8SApiAdmissionregistrationV1WebhookClientConfig
### Properties
* **caBundle**: any: `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.
* **service**: [IoK8SApiAdmissionregistrationV1ServiceReference](#iok8sapiadmissionregistrationv1servicereference): ServiceReference holds a reference to Service.legacy.k8s.io
* **url**: string: `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https://".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.

## IoK8SApimachineryPkgApisMetaV1Condition
### Properties
* **lastTransitionTime**: string (Required): Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* **message**: string (Required): message is a human readable message indicating details about the transition. This may be an empty string.
* **observedGeneration**: int: observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
* **reason**: string (Required): reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
* **status**: string (Required): status of the condition, one of True, False, Unknown.
* **type**: string (Required): type of condition in CamelCase or in foo.example.com/CamelCase.

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

## labels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## labels
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

