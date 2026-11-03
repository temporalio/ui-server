import{Ht as e,lt as t}from"./C_ba8hqD.js";import{t as n}from"./BOdSC-Jx.js";var r=`# Terraform AWS IAM Role Module for Serverless Workers on Bedrock AgentCore.
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
`,i=`# Terraform GCP Service Account Module for Cloud Run Serverless Workers.
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
`,a=`# Terraform AWS IAM Role Module for Serverless Workers.
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
`,o=`AWSTemplateFormatVersion: '2010-09-09'
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
`,s=`AWSTemplateFormatVersion: '2010-09-09'
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
`,c=[`lambda`,`agentcore`,`cloud-run`],l=`https://github.com/temporalio/terraform-modules/tree/main/modules/serverless-workers`,u={lambda:{value:`lambda`,providerType:`aws-lambda`,icon:e,labelKey:`workers.provider-lambda`,descriptionKey:`workers.provider-lambda-description`,badgeLabel:`Lambda`,releaseStage:`public-preview`,templates:{terraform:a,cloudFormation:{template:s,fileName:`temporal-worker-role.yaml`}},terraformModuleHref:`${l}/aws/lambda`},agentcore:{value:`agentcore`,providerType:`aws-agentcore`,icon:e,labelKey:`workers.provider-agentcore`,descriptionKey:`workers.provider-agentcore-description`,badgeLabel:`AgentCore`,releaseStage:`pre-release`,templates:{terraform:r,cloudFormation:{template:o,fileName:`temporal-agentcore-role.yaml`}},terraformModuleHref:`${l}/aws/agentcore`},"cloud-run":{value:`cloud-run`,providerType:`gcp-cloud-run`,icon:t,labelKey:`workers.provider-cloud-run`,descriptionKey:`workers.provider-cloud-run-description`,badgeLabel:`Cloud Run`,releaseStage:`public-preview`,templates:{terraform:i}}},d={lambda:u.lambda.templates,agentcore:u.agentcore.templates,"cloud-run":u[`cloud-run`].templates},f=new Map(c.flatMap(e=>[[u[e].providerType,e],[e,e]])),p=e=>e===void 0?void 0:f.get(e),m=e=>Object.entries((e==null?void 0:e.scalingGroups)??{}).map(([e,t])=>{var n;return{name:e,regionIds:((t==null?void 0:t.regionIds)??[]).filter(Boolean),providerType:(t==null?void 0:t.providerType)??(t==null||(n=t.provider)==null?void 0:n.type),group:t}}),h=e=>m(e).some(({regionIds:e})=>e.length>0),g=(e,t)=>{let n=m(e),r=n.filter(({regionIds:e})=>e.length===0);return t.map(({regionId:e,role:t=`replica`,label:i})=>{let a=i??e,o=n.filter(({regionIds:t})=>t.includes(e));return o.length?{regionId:e,label:a,role:t,match:`region`,groups:o}:r.length?{regionId:e,label:a,role:t,match:`catch-all`,groups:r}:{regionId:e,label:a,role:t,match:`none`,groups:[]}})},_=e=>{let t=p(e);return t?n(u[t].labelKey):e},v=e=>{let t=p(e);return t?u[t].badgeLabel:e},y=e=>{let t=[[36e5,`h`],[6e4,`m`],[1e3,`s`]].find(([t])=>e>=t&&e%t===0);return t?`${e/t[0]}${t[1]}`:`${e}ms`},b=[],x=e=>(e==null?void 0:e.regions)??b,S=(e,t)=>{var n;let r=e==null||(n=e.providers)==null||(n=n.find(({value:e})=>e===t))==null?void 0:n.deployRegions;return r?[...r]:void 0};export{y as a,g as c,l as d,p as f,v as i,u as l,S as n,m as o,d as p,_ as r,h as s,x as t,c as u};