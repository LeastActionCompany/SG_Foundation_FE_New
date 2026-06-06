import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import { ToastProvider } from "./components/ToastProvider";
import { useEffect, useState } from "react";

function getPathname() {
  return window.location.pathname || "/";
}

export default function App() {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    const handleRouteChange = () => setPathname(getPathname());
    window.addEventListener("popstate", handleRouteChange);

    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <ToastProvider>
      {isAdminRoute ? <AdminPage /> : <HomePage />}
    </ToastProvider>
  );
}
