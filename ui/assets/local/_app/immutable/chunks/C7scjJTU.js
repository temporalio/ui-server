import{Vt as e,ct as t}from"./DuH9JC7s.js";var n=`# Terraform AWS IAM Role Module for Serverless Workers on Bedrock AgentCore.
# Creates the IAM role Temporal assumes to invoke your AgentCore Runtimes.
#
# This is not the AgentCore execution role, which AgentCore assumes to pull
# your image. This role is assumed by Temporal to start a session.
module "serverless-worker-agentcore" {
  source = "terraform-modules/modules/serverless-workers/aws/agentcore"

  external_id = "<external-id>"

  # IAM principals allowed to assume this role to invoke your workers.
  # Temporal Cloud provides these values; for self-hosted deployments,
  # use the IAM identity your Temporal service runs as.
  temporal_cloud_principals = [
    "<principal-arn>",
  ]

  # Runtime Endpoint ARNs, the same four-part value the Version takes.
  agent_runtime_arns = [
    "arn:aws:bedrock-agentcore:us-west-2:123456789012:runtime/my-worker-abc123/runtime-endpoint/DEFAULT",
  ]

  # Optional: override the default role name
  # role_name = "Temporal-Cloud-Serverless-Worker-AgentCore"
}

# Once applied, provide the role_arn output value to Temporal.
`,r=`# Terraform GCP Service Account Module for Cloud Run Serverless Workers.
module "serverless-worker-cloud-run" {
  source = "github.com/temporalio/terraform-modules//modules/serverless-workers/gcp/cloud-run"

  project_id                   = "__TEMPORAL_GCP_PROJECT_ID__"
  invoker_account_id           = "temporal-worker-pool-invoker"
  runner_service_account_email = ""

  # REPLACE BEFORE APPLY with the email of the service account permitted to impersonate the invoker.
  impersonator_service_account_emails = [
    "<REPLACE-WITH-IMPERSONATOR-SERVICE-ACCOUNT-EMAIL>",
  ]
}

# Once applied, use the invoker_email output value as the Service Account for the Worker deployment.
`,i=`# Terraform AWS IAM Role Module for Serverless Workers.
# Creates the IAM role Temporal Cloud assumes to invoke your Lambda functions.
module "serverless-worker-lambda" {
  source = "terraform-modules/modules/serverless-workers/aws/lambda"

  external_id = "<external-id>"

  # IAM principals allowed to assume this role to invoke your workers.
  # Temporal Cloud provides these values; for self-hosted deployments,
  # use the IAM identity your Temporal service runs as.
  temporal_cloud_principals = [
    "<principal-arn>",
  ]

  lambda_function_arns = [
    "arn:aws:lambda:us-east-1:123456789012:function:my-worker-1",
    "arn:aws:lambda:us-east-1:123456789012:function:my-worker-2",
  ]

  # Optional: override the default role name
  # role_name = "Temporal-Cloud-Serverless-Worker"
}

# Once applied, provide the role_arn output value to Temporal Cloud.
`,a=`AWSTemplateFormatVersion: '2010-09-09'
Description: >-
  The IAM role Temporal assumes to invoke your Bedrock AgentCore Runtimes.
  This is not the AgentCore execution role, which AgentCore itself assumes to
  pull your image; this one is assumed by Temporal to start a session.
Parameters:
  AssumeRoleExternalId:
    Type: String
    MinLength: 1
    Description: >-
      The External ID Temporal presents when assuming this role. It must match
      the External ID on the Worker Deployment Version, or the assume fails.
  TemporalPrincipal:
    Type: String
    Default: temporal.io
    Description: >-
      Temporal Cloud: leave this as temporal.io. Self-hosted: the ARN of the
      IAM identity your Temporal service runs as, for example
      arn:aws:iam::123456789012:role/temporal-server.
  AgentRuntimeArns:
    Type: CommaDelimitedList
    Default: '*'
    Description: >-
      Runtime ARNs this role may invoke. Narrow this to your runtimes rather
      than leaving it as *.
Conditions:
  # Temporal Cloud assumes the role as a service principal. A self-hosted
  # server assumes it as whatever IAM identity it runs as, which is an AWS
  # principal rather than a service, so the trust policy differs by key.
  TemporalIsService: !Equals [!Ref TemporalPrincipal, 'temporal.io']
Resources:
  TemporalAgentCoreRole:
    Type: AWS::IAM::Role
    Properties:
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Effect: Allow
            Principal: !If
              - TemporalIsService
              - Service: temporal.io
              - AWS: !Ref TemporalPrincipal
            Action: sts:AssumeRole
            Condition:
              StringEquals:
                sts:ExternalId: !Ref AssumeRoleExternalId
      Policies:
        - PolicyName: InvokeAgentCore
          PolicyDocument:
            Version: '2012-10-17'
            Statement:
              # InvokeAgentRuntime starts the session. GetAgentRuntimeEndpoint
              # is what validation calls first, so a role without it fails when
              # the Version is created rather than when a Worker is needed.
              - Effect: Allow
                Action:
                  - bedrock-agentcore:InvokeAgentRuntime
                  - bedrock-agentcore:GetAgentRuntimeEndpoint
                Resource: !Ref AgentRuntimeArns
Outputs:
  RoleArn:
    Description: Put this in the IAM Role ARN field on the Worker Deployment Version.
    Value: !GetAtt TemporalAgentCoreRole.Arn
`,o=`AWSTemplateFormatVersion: '2010-09-09'
Resources:
  TemporalWorkerRole:
    Type: AWS::IAM::Role
    Properties:
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Effect: Allow
            Principal:
              Service: temporal.io
            Action: sts:AssumeRole
            Condition:
              StringEquals:
                sts:ExternalId: <your-external-id>
      Policies:
        - PolicyName: InvokeLambda
          PolicyDocument:
            Version: '2012-10-17'
            Statement:
              - Effect: Allow
                Action: lambda:InvokeFunction
                Resource: '*'
`,s=[`lambda`,`agentcore`,`cloud-run`],c=`https://github.com/temporalio/terraform-modules/tree/main/modules/serverless-workers`,l={lambda:{value:`lambda`,providerType:`aws-lambda`,icon:e,labelKey:`workers.provider-lambda`,descriptionKey:`workers.provider-lambda-description`,badgeLabel:`Lambda`,releaseStage:`public-preview`,templates:{terraform:i,cloudFormation:{template:o,fileName:`temporal-worker-role.yaml`}},terraformModuleHref:`${c}/aws/lambda`},agentcore:{value:`agentcore`,providerType:`aws-agentcore`,icon:e,labelKey:`workers.provider-agentcore`,descriptionKey:`workers.provider-agentcore-description`,badgeLabel:`AgentCore`,releaseStage:`pre-release`,templates:{terraform:n,cloudFormation:{template:a,fileName:`temporal-agentcore-role.yaml`}},terraformModuleHref:`${c}/aws/agentcore`},"cloud-run":{value:`cloud-run`,providerType:`gcp-cloud-run`,icon:t,labelKey:`workers.provider-cloud-run`,descriptionKey:`workers.provider-cloud-run-description`,badgeLabel:`Cloud Run`,releaseStage:`public-preview`,templates:{terraform:r}}},u={lambda:l.lambda.templates,agentcore:l.agentcore.templates,"cloud-run":l[`cloud-run`].templates},d=new Map(s.flatMap(e=>[[l[e].providerType,e],[e,e]])),f=e=>e===void 0?void 0:d.get(e);export{u as a,f as i,s as n,c as r,l as t};