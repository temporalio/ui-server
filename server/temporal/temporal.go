// The MIT License
//
// Copyright (c) 2020 Temporal Technologies Inc.  All rights reserved.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

package temporal

import (
	"context"
	"time"

	"github.com/temporalio/web-go/api/workflowservice/v1"
	"github.com/temporalio/web-go/server/rpc"
)

const (
	// DefaultTimeout is the default timeout used to make calls
	DefaultTimeout = 10 * time.Second
	// DefaultLongPollTimeout is the long poll default timeout used to make calls
	DefaultLongPollTimeout = time.Minute * 3
)

type (
	// Client temporal frontend client
	Client struct {
		timeout  time.Duration
		frontend workflowservice.WorkflowServiceClient
	}
)

// NewClient creates a new frontend service gRPC client
func NewClient(
	rpcAddress string,
) (*Client, error) {
	connection := rpc.CreateFrontendGRPCConnection(rpcAddress)
	frontend := workflowservice.NewWorkflowServiceClient(connection)
	client := Client{frontend: frontend, timeout: DefaultTimeout}
	return &client, nil
}

func (c *Client) createContext(parent context.Context) (context.Context, context.CancelFunc) {
	if parent == nil {
		return context.WithTimeout(context.Background(), c.timeout)
	}
	return context.WithTimeout(parent, c.timeout)
}

func (c *Client) createLongPollContext(parent context.Context) (context.Context, context.CancelFunc) {
	if parent == nil {
		return context.WithTimeout(context.Background(), c.timeout)
	}
	return context.WithTimeout(parent, c.timeout)
}

// DeprecateNamespace deprecate namespace
func (c *Client) DeprecateNamespace(request *workflowservice.DeprecateNamespaceRequest) (*workflowservice.DeprecateNamespaceResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.DeprecateNamespace(ctx, request)
}

// DescribeNamespace describe namespace
func (c *Client) DescribeNamespace(request *workflowservice.DescribeNamespaceRequest) (*workflowservice.DescribeNamespaceResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.DescribeNamespace(ctx, request)
}

// DescribeTaskQueue describe task queue
func (c *Client) DescribeTaskQueue(request *workflowservice.DescribeTaskQueueRequest) (*workflowservice.DescribeTaskQueueResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.DescribeTaskQueue(ctx, request)
}

// DescribeWorkflowExecution describe workflow
func (c *Client) DescribeWorkflowExecution(request *workflowservice.DescribeWorkflowExecutionRequest) (*workflowservice.DescribeWorkflowExecutionResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.DescribeWorkflowExecution(ctx, request)
}

// GetWorkflowExecutionHistory fetch workflow history
func (c *Client) GetWorkflowExecutionHistory(request *workflowservice.GetWorkflowExecutionHistoryRequest) (*workflowservice.GetWorkflowExecutionHistoryResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.GetWorkflowExecutionHistory(ctx, request)
}

// ListArchivedWorkflowExecutions fetch archived workflows
func (c *Client) ListArchivedWorkflowExecutions(
	request *workflowservice.ListArchivedWorkflowExecutionsRequest,
) (*workflowservice.ListArchivedWorkflowExecutionsResponse, error) {
	ctx, cancel := c.createLongPollContext(nil)
	defer cancel()
	return c.frontend.ListArchivedWorkflowExecutions(ctx, request)
}

// ListClosedWorkflowExecutions fetch open workflows
func (c *Client) ListClosedWorkflowExecutions(request *workflowservice.ListClosedWorkflowExecutionsRequest) (*workflowservice.ListClosedWorkflowExecutionsResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.ListClosedWorkflowExecutions(ctx, request)
}

// ListNamespaces fetch namespaces
func (c *Client) ListNamespaces(
	request *workflowservice.ListNamespacesRequest,
) (*workflowservice.ListNamespacesResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.ListNamespaces(ctx, request)
}

// ListOpenWorkflowExecutions fetch open workflows
func (c *Client) ListOpenWorkflowExecutions(request *workflowservice.ListOpenWorkflowExecutionsRequest) (*workflowservice.ListOpenWorkflowExecutionsResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.ListOpenWorkflowExecutions(ctx, request)
}

// ListWorkflowExecutions fetch workflows using query
func (c *Client) ListWorkflowExecutions(request *workflowservice.ListWorkflowExecutionsRequest) (*workflowservice.ListWorkflowExecutionsResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.ListWorkflowExecutions(ctx, request)
}

// ScanWorkflowExecutions quick fetch workflows (ES enabled)
func (c *Client) ScanWorkflowExecutions(request *workflowservice.ScanWorkflowExecutionsRequest) (*workflowservice.ScanWorkflowExecutionsResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.ScanWorkflowExecutions(ctx, request)
}

// CountWorkflowExecutions count workflows
func (c *Client) CountWorkflowExecutions(request *workflowservice.CountWorkflowExecutionsRequest) (*workflowservice.CountWorkflowExecutionsResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.CountWorkflowExecutions(ctx, request)
}

// GetSearchAttributes fetch search attributes
func (c *Client) GetSearchAttributes(request *workflowservice.GetSearchAttributesRequest) (*workflowservice.GetSearchAttributesResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.GetSearchAttributes(ctx, request)
}

// PollActivityTaskQueue poll activity task queue
func (c *Client) PollActivityTaskQueue(request *workflowservice.PollActivityTaskQueueRequest) (*workflowservice.PollActivityTaskQueueResponse, error) {
	ctx, cancel := c.createLongPollContext(nil)
	defer cancel()
	return c.frontend.PollActivityTaskQueue(ctx, request)
}

// PollWorkflowTaskQueue  poll workflow task queue
func (c *Client) PollWorkflowTaskQueue(request *workflowservice.PollWorkflowTaskQueueRequest) (*workflowservice.PollWorkflowTaskQueueResponse, error) {
	ctx, cancel := c.createLongPollContext(nil)
	defer cancel()
	return c.frontend.PollWorkflowTaskQueue(ctx, request)
}

// QueryWorkflow query workflow
func (c *Client) QueryWorkflow(request *workflowservice.QueryWorkflowRequest) (*workflowservice.QueryWorkflowResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.QueryWorkflow(ctx, request)
}

// RecordActivityTaskHeartbeat record activity task heartbeat
func (c *Client) RecordActivityTaskHeartbeat(request *workflowservice.RecordActivityTaskHeartbeatRequest) (*workflowservice.RecordActivityTaskHeartbeatResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.RecordActivityTaskHeartbeat(ctx, request)
}

// RecordActivityTaskHeartbeatByID record activity task heartbeat by ID
func (c *Client) RecordActivityTaskHeartbeatByID(request *workflowservice.RecordActivityTaskHeartbeatByIdRequest) (*workflowservice.RecordActivityTaskHeartbeatByIdResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.RecordActivityTaskHeartbeatById(ctx, request)
}

// RegisterNamespace register namespace
func (c *Client) RegisterNamespace(request *workflowservice.RegisterNamespaceRequest) (*workflowservice.RegisterNamespaceResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.RegisterNamespace(ctx, request)
}

// RequestCancelWorkflowExecution request cancel workflow
func (c *Client) RequestCancelWorkflowExecution(request *workflowservice.RequestCancelWorkflowExecutionRequest) (*workflowservice.RequestCancelWorkflowExecutionResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.RequestCancelWorkflowExecution(ctx, request)
}

// ResetStickyTaskQueue reset sticky task queue
func (c *Client) ResetStickyTaskQueue(request *workflowservice.ResetStickyTaskQueueRequest) (*workflowservice.ResetStickyTaskQueueResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.ResetStickyTaskQueue(ctx, request)
}

// ResetWorkflowExecution reset workflow
func (c *Client) ResetWorkflowExecution(request *workflowservice.ResetWorkflowExecutionRequest) (*workflowservice.ResetWorkflowExecutionResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.ResetWorkflowExecution(ctx, request)
}

// RespondActivityTaskCanceled respond activity task canceled
func (c *Client) RespondActivityTaskCanceled(request *workflowservice.RespondActivityTaskCanceledRequest) (*workflowservice.RespondActivityTaskCanceledResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.RespondActivityTaskCanceled(ctx, request)
}

// RespondActivityTaskCanceledByID respond activity task canceled by ID
func (c *Client) RespondActivityTaskCanceledByID(request *workflowservice.RespondActivityTaskCanceledByIdRequest) (*workflowservice.RespondActivityTaskCanceledByIdResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.RespondActivityTaskCanceledById(ctx, request)
}

// RespondActivityTaskCompleted respond activity task completed
func (c *Client) RespondActivityTaskCompleted(request *workflowservice.RespondActivityTaskCompletedRequest) (*workflowservice.RespondActivityTaskCompletedResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.RespondActivityTaskCompleted(ctx, request)
}

// RespondActivityTaskCompletedByID respond activity task completed by ID
func (c *Client) RespondActivityTaskCompletedByID(request *workflowservice.RespondActivityTaskCompletedByIdRequest) (*workflowservice.RespondActivityTaskCompletedByIdResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.RespondActivityTaskCompletedById(ctx, request)
}

// RespondActivityTaskFailed respond activity task failed
func (c *Client) RespondActivityTaskFailed(request *workflowservice.RespondActivityTaskFailedRequest) (*workflowservice.RespondActivityTaskFailedResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.RespondActivityTaskFailed(ctx, request)
}

// RespondActivityTaskFailedByID  respond activity task failed by ID
func (c *Client) RespondActivityTaskFailedByID(request *workflowservice.RespondActivityTaskFailedByIdRequest) (*workflowservice.RespondActivityTaskFailedByIdResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.RespondActivityTaskFailedById(ctx, request)
}

// RespondWorkflowTaskCompleted respond workflow task completed
func (c *Client) RespondWorkflowTaskCompleted(request *workflowservice.RespondWorkflowTaskCompletedRequest) (*workflowservice.RespondWorkflowTaskCompletedResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.RespondWorkflowTaskCompleted(ctx, request)
}

// RespondWorkflowTaskFailed respond workflow task failed
func (c *Client) RespondWorkflowTaskFailed(request *workflowservice.RespondWorkflowTaskFailedRequest) (*workflowservice.RespondWorkflowTaskFailedResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.RespondWorkflowTaskFailed(ctx, request)
}

// RespondQueryTaskCompleted respond query task completed
func (c *Client) RespondQueryTaskCompleted(request *workflowservice.RespondQueryTaskCompletedRequest) (*workflowservice.RespondQueryTaskCompletedResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.RespondQueryTaskCompleted(ctx, request)
}

// SignalWithStartWorkflowExecution signal with start workflow execution
func (c *Client) SignalWithStartWorkflowExecution(request *workflowservice.SignalWithStartWorkflowExecutionRequest) (*workflowservice.SignalWithStartWorkflowExecutionResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.SignalWithStartWorkflowExecution(ctx, request)
}

// SignalWorkflowExecution signal workflow execution
func (c *Client) SignalWorkflowExecution(request *workflowservice.SignalWorkflowExecutionRequest) (*workflowservice.SignalWorkflowExecutionResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.SignalWorkflowExecution(ctx, request)
}

// StartWorkflowExecution start workflow execution
func (c *Client) StartWorkflowExecution(request *workflowservice.StartWorkflowExecutionRequest) (*workflowservice.StartWorkflowExecutionResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.StartWorkflowExecution(ctx, request)
}

// TerminateWorkflowExecution terminate workflow execution
func (c *Client) TerminateWorkflowExecution(request *workflowservice.TerminateWorkflowExecutionRequest) (*workflowservice.TerminateWorkflowExecutionResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.TerminateWorkflowExecution(ctx, request)
}

// UpdateNamespace update namespace
func (c *Client) UpdateNamespace(request *workflowservice.UpdateNamespaceRequest) (*workflowservice.UpdateNamespaceResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.UpdateNamespace(ctx, request)
}

// GetClusterInfo get cluster info
func (c *Client) GetClusterInfo(request *workflowservice.GetClusterInfoRequest) (*workflowservice.GetClusterInfoResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.GetClusterInfo(ctx, request)
}

// ListTaskQueuePartitions list task queue partitions
func (c *Client) ListTaskQueuePartitions(request *workflowservice.ListTaskQueuePartitionsRequest) (*workflowservice.ListTaskQueuePartitionsResponse, error) {
	ctx, cancel := c.createContext(nil)
	defer cancel()
	return c.frontend.ListTaskQueuePartitions(ctx, request)
}
