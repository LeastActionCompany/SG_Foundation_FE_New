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
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
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

  const renderServicePage = (Page) => (
    <div className="min-h-screen text-ink">
      <Header />
      <Page />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );

  return (
    <ToastProvider>
      {isAdminRoute ? (
        <AdminPage />
      ) : isWomenEmpowermentRoute ? (
        renderServicePage(WomenEmpowermentPage)
      ) : isVolunteerSupportRoute ? (
        renderServicePage(VolunteerSupportPage)
      ) : isSkillDevelopmentRoute ? (
        renderServicePage(SkillDevelopmentPage)
      ) : isHealthCareRoute ? (
        renderServicePage(HealthCarePage)
      ) : isEducationalSupportRoute ? (
        renderServicePage(EducationalSupportPage)
      ) : isDifferentlyAbledCareRoute ? (
        renderServicePage(DifferentlyAbledCarePage)
      ) : isChildWomenWelfareRoute ? (
        renderServicePage(ChildWomenWelfarePage)
      ) : isDonationSponsorshipRoute ? (
        renderServicePage(DonationAndSponsorshipPage)
      ) : (
        <HomePage />
      )}
    </ToastProvider>
  );
}
