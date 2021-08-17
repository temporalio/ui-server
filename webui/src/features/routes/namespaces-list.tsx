import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

interface NamespacesListProps {
  namespaces: { namespaceInfo: { name: string } }[];
}

function NamespacesList({ namespaces = [] }: NamespacesListProps) {
  const { url } = useRouteMatch();
  return (
    <ul>
      {namespaces.map((n) => (
        <li>
          <Link to={`${url}/${n.namespaceInfo.name}/workflows`}>
            {n.namespaceInfo.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { NamespacesList };
