import React, { useEffect, useState } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { API_URL, FRONTEND_URL, getStoredToken, saveAuthTokenFromUrl } from "../auth";

const Home = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urlToken = saveAuthTokenFromUrl();
    const token = urlToken || getStoredToken();

    if (!token) {
      window.location.href = `${FRONTEND_URL}/signup`;
      return;
    }

    fetch(`${API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Session expired.");
        localStorage.setItem("authUser", JSON.stringify(data.user));
        setUser(data.user);
      })
      .catch(() => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser");
        window.location.href = `${FRONTEND_URL}/signup`;
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div className="auth-loading">Loading dashboard...</div>;
  }

  return (
    <>
      <TopBar user={user} />
      <Dashboard user={user} />
    </>
  );
};

export default Home;
