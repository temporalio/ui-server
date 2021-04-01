import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

interface NamespacesListProps {
  namespaces: { namespace_info: { name: string } }[];
}

function NamespacesList({ namespaces = [] }: NamespacesListProps) {
  const { url } = useRouteMatch();
  return (
    <ul>
      {namespaces.map((n) => (
        <li>
          <Link to={`${url}/${n.namespace_info.name}/workflows`}>
            {n.namespace_info.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { NamespacesList };
