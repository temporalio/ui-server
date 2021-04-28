import { useState, useEffect } from "react";

interface User {
  picture?: string;
  name?: string;
  email?: string;
}

function Account() {
  const [user, setUser] = useState<User | undefined>(undefined);

  const login = () => {
    window.location.assign("/auth/sso");
  };
  const logout = () => {
    window.location.assign("/auth/logout");
  };

  const fetchUser = async () => {
    const res = await fetch("http://localhost:8080/api/me");
    const body = await res.json();
    const user: User = {
      email: body?.Email,
      picture: body?.Picture,
      name: body?.Name,
    };
    setUser(user.email ? user : undefined);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {user && (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      )}

      <div>
        {user ? (
          <button onClick={logout}>Sign Out</button>
        ) : (
          <button onClick={login}>Continue to SSO</button>
        )}
      </div>
    </div>
  );
}

export { Account };
