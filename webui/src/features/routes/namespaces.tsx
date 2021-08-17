import { useState, useEffect } from "react";
import {
  Switch,
  Link,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import { Workflows, NamespacesList } from "features/routes";

interface Namespace {
  namespaceInfo: { name: string } ;
}

interface Params {
  namespace: string;
}

function Namespaces() {
  const { path } = useRouteMatch();
  let { namespace } = useParams<Params>();

  const [namespaces, setNamespaces] = useState<Namespace[]>([]);

  const fetchNamespaces = async () => {
    const res = await fetch("http://localhost:8080/api/v1/namespaces");
    const body = await res.json();
    setNamespaces(body?.namespaces);
  };

  useEffect(() => {
    fetchNamespaces();
  }, []);

  return (
    <div>
      <h4>
        <Link to="/namespaces">Namespaces</Link> : {namespace}
      </h4>
      <Switch>
        <Route path={`${path}/workflows`}>
          <Workflows />
        </Route>
        <Route exact path={path}>
          <NamespacesList namespaces={namespaces} />
        </Route>
      </Switch>
    </div>
  );
}

export { Namespaces };
