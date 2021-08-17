import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { WorkflowsList } from "features/routes";

interface Workflow {
  execution: { workflow_id: string; run_id: string };
}

interface Params {
  namespace: string;
}

function Workflows() {
  let { namespace } = useParams<Params>();
  const [workflows, setWorkflows] = useState<Workflow[]>([]);

  const fetchWorkflows = async () => {
    const res = await fetch(`http://localhost:8080/api/v1/namespaces/${namespace}/workflows`);
    const body = await res.json();
    setWorkflows(body.executions);
  };

  useEffect(() => {
    fetchWorkflows();
  }, [namespace]);

  return (
    <div>
      <h4>Workflows:</h4>
      <WorkflowsList workflows={workflows} />
    </div>
  );
}

export { Workflows };
