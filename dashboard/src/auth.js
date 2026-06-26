export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
export const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

export const getStoredToken = () => localStorage.getItem("authToken");

export const saveAuthTokenFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  if (token) {
    localStorage.setItem("authToken", token);
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  return token;
};

export const logout = async () => {
  const token = getStoredToken();

  try {
    await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  } finally {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    window.location.href = `${FRONTEND_URL}/signup`;
  }
};
