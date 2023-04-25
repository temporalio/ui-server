package tag

import (
	"fmt"
	"strings"
	"time"
)

// All logging tags are defined in this file.
// To help finding available tags, we recommend that all tags to be categorized and placed in the corresponding section.
// We currently have those categories:
//   0. Common tags that can't be categorized(or belong to more than one)
//   1. Workflow: these tags are information that are useful to our customer, like workflow-id/run-id/task-queue/...
//   2. System : these tags are internal information which usually cannot be understood by our customers,

// LoggingCallAtKey is reserved tag
const (
	LoggingCallAtKey = "logging-call-at"

	getType     = "%T"
	errorPrefix = "*"
)

// ==========  Common tags defined here ==========

// Operation returns tag for Operation
func Operation(operation string) ZapTag {
	return NewStringTag("operation", operation)
}

// Error returns tag for Error
func Error(err error) ZapTag {
	return NewErrorTag(err)
}

// ErrorType returns tag for ErrorType
func ErrorType(err error) ZapTag {
	return NewStringTag("service-error-type", strings.TrimPrefix(fmt.Sprintf(getType, err), errorPrefix))
}

// IsRetryable returns tag for IsRetryable
func IsRetryable(isRetryable bool) ZapTag {
	return NewBoolTag("is-retryable", isRetryable)
}

// ClusterName returns tag for ClusterName
func ClusterName(clusterName string) ZapTag {
	return NewStringTag("cluster-name", clusterName)
}

// Timestamp returns tag for Timestamp
func Timestamp(timestamp time.Time) ZapTag {
	return NewTimeTag("timestamp", timestamp)
}

// ==========  System tags defined here:  ==========
// Tags with pre-define values

// Component returns tag for Component
func component(component string) ZapTag {
	return NewStringTag("component", component)
}

// Lifecycle returns tag for Lifecycle
func lifecycle(lifecycle string) ZapTag {
	return NewStringTag("lifecycle", lifecycle)
}

// OperationResult returns tag for OperationResult
func operationResult(operationResult string) ZapTag {
	return NewStringTag("operation-result", operationResult)
}

// ErrorType returns tag for ErrorType
func errorType(errorType string) ZapTag {
	return NewStringTag("error-type", errorType)
}
