import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import WomenEmpowermentPage from "./pages/WomenEmpowermentPage";
import VolunteerSupportPage from "./pages/VolunteerSupportPage";
import SkillDevelopmentPage from "./pages/SkillDevelopment";
import HealthCarePage from "./pages/HealthCare";
import EducationalSupportPage from "./pages/EducationalSupport";
import DifferentlyAbledCarePage from "./pages/DifferentlyAbledCare";
import ChildWomenWelfarePage from "./pages/ChildWomenWelfare";
import DonationAndSponsorshipPage from "./pages/DonationAndSponsorship";
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
  const isWomenEmpowermentRoute = pathname === "/women-empowerment";
  const isVolunteerSupportRoute = pathname === "/volunteer-support";
  const isSkillDevelopmentRoute = pathname === "/skill-development";
  const isHealthCareRoute = pathname === "/health-care";
  const isEducationalSupportRoute = pathname === "/educational-support";
  const isDifferentlyAbledCareRoute = pathname === "/differently-abled-care";
  const isChildWomenWelfareRoute = pathname === "/child-women-welfare";
  const isDonationSponsorshipRoute = pathname === "/donation-sponsorship";

  return (
    <ToastProvider>
      {isAdminRoute ? (
        <AdminPage />
      ) : isWomenEmpowermentRoute ? (
        <WomenEmpowermentPage />
      ) : isVolunteerSupportRoute ? (
        <VolunteerSupportPage />
      ) : isSkillDevelopmentRoute ? (
        <SkillDevelopmentPage />
      ) : isHealthCareRoute ? (
        <HealthCarePage />
      ) : isEducationalSupportRoute ? (
        <EducationalSupportPage />
      ) : isDifferentlyAbledCareRoute ? (
        <DifferentlyAbledCarePage />
      ) : isChildWomenWelfareRoute ? (
        <ChildWomenWelfarePage />
      ) : isDonationSponsorshipRoute ? (
        <DonationAndSponsorshipPage />
      ) : (
        <HomePage />
      )}
    </ToastProvider>
  );
}
