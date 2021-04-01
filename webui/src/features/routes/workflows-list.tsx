interface WorkflowsListProps {
  workflows: { execution: { workflow_id: string; run_id: string } }[];
}

function WorkflowsList({ workflows = [] }: WorkflowsListProps) {
  return (
    <ul>
      {workflows.map((w) => (
        <li>
          {w.execution.run_id}
        </li>
      ))}
    </ul>
  );
}

export { WorkflowsList };
