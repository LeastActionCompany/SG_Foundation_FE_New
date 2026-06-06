import { useEffect, useMemo, useState } from "react";
import {
  CircleDollarSign,
  HandHeart,
  LogOut,
  Mail,
  RefreshCcw,
  ShieldCheck,
  Users,
} from "lucide-react";
import { adminLogin, getAdminDashboardData } from "../api/api";
import { useToast } from "../components/ToastProvider";
import {
  clearAdminSession,
  getAdminSession,
  setAdminSession,
} from "../utils/adminSession";
import { navigateTo } from "../utils/navigation";
import logo from "../assest/logo.jpeg";

const shellClass =
  "min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(40,60,129,0.12),_transparent_32%),linear-gradient(180deg,_#f5f7ff_0%,_#eef3ff_100%)] text-ink";

const panelClass =
  "rounded-[28px] border border-white/70 bg-white/90 shadow-panel backdrop-blur";

const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10";

function formatDate(value) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(amount) || 0);
}

function StatCard({ icon: Icon, label, value, accent }) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {label}
          </p>
          <p className="mt-3 text-3xl font-bold text-ink">{value}</p>
        </div>
        <div className={`rounded-2xl p-3 ${accent}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

function EmptyState({ label }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-muted">
      No {label} found yet.
    </div>
  );
}

function TableSection({ title, count, columns, rows, renderRow, emptyLabel }) {
  return (
    <section className={`${panelClass} overflow-hidden`}>
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="text-xl font-bold text-ink">{title}</h2>
          <p className="text-sm text-muted">{count} records</p>
        </div>
      </div>

      {rows.length ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column}
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-[0.18em] text-muted"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {rows.map(renderRow)}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="p-6">
          <EmptyState label={emptyLabel} />
        </div>
      )}
    </section>
  );
}

function AdminLogin({ onLogin }) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const username = form.username.value.trim();
    const password = form.password.value;

    try {
      setLoading(true);
      const { data } = await adminLogin({ username, password });
      const session = {
        token: data.token,
        username: data.admin.username,
        expiresAt: Date.now() + data.expiresIn,
      };

      setAdminSession(session);
      onLogin(session);
      navigateTo("/admin");
      toast.success("Admin login successful.", "Welcome back");
    } catch (error) {
      toast.error(
        error?.response?.data?.error || "Unable to sign in to the admin panel.",
        "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={shellClass}>
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center">
            {/* <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-primary shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              SG Foundation Admin
            </div> */}
                   <a href="/" className="flex items-center gap-3">
                     <div className="flex items-center justify-center rounded-2xl bg-white p-1.5 shadow-md        ring-1 ring-primary/10">
                <img
                  src={logo}
                  alt="SG Foundation Logo"
                  className="h-14 w-auto object-contain sm:h-16"
                />
                     </div>
                   
                     <div className="leading-tight">
                <h1 className="text-lg font-bold tracking-wide text-ink sm:text-xl">
                  SG Foundation
                </h1>
            
                <p className="hidden text-sm font-medium text-muted sm:block">
                  Spread Goodness...
                </p>
                     </div>
                   </a>
            <h1 className="mt-6 max-w-xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Manage contact, volunteer, and donation records from one place.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted">
              This admin area gives you a live view of incoming messages, volunteer requests,
              and donation activity stored by your backend.
            </p>
          </div>

          <div className={`${panelClass} p-8 sm:p-10`}>
            <h2 className="text-2xl font-bold text-ink">Admin Login</h2>
            <p className="mt-2 text-sm text-muted">
              Sign in with the backend admin credentials configured for this project.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-muted">
                  Username
                </label>
                <input
                  className={inputClass}
                  name="username"
                  placeholder="Enter admin username"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-muted">
                  Password
                </label>
                <input
                  className={inputClass}
                  type="password"
                  name="password"
                  placeholder="Enter admin password"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white shadow-lg transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Signing In..." : "Open Dashboard"}
              </button>
            </form>

            <button
              type="button"
              onClick={() => navigateTo("/")}
              className="mt-4 w-full rounded-2xl border border-slate-200 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-slate-50"
            >
              Back to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminDashboard({ session, onLogout }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      const response = await getAdminDashboardData(session.token);
      setData(response.data);
    } catch (error) {
      const message = error?.response?.data?.error || "Unable to load admin data.";

      if (error?.response?.status === 401) {
        clearAdminSession();
        onLogout();
        navigateTo("/admin/login");
      }

      toast.error(message, "Dashboard error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const stats = useMemo(
    () => [
      {
        label: "Contact Messages",
        value: data?.stats.totalContacts ?? 0,
        icon: Mail,
        accent: "bg-blue-50 text-primary",
      },
      {
        label: "Volunteer Requests",
        value: data?.stats.totalVolunteers ?? 0,
        icon: Users,
        accent: "bg-amber-50 text-amber-600",
      },
      {
        label: "Donation Records",
        value: data?.stats.totalDonations ?? 0,
        icon: HandHeart,
        accent: "bg-emerald-50 text-emerald-600",
      },
      {
        label: "Donation Total",
        value: formatCurrency(data?.stats.donationTotal ?? 0),
        icon: CircleDollarSign,
        accent: "bg-violet-50 text-violet-600",
      },
    ],
    [data]
  );

  return (
    <div className={shellClass}>
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className={`${panelClass} mb-6 px-6 py-5 sm:px-8`}>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                Admin Dashboard
              </p>
              <h1 className="mt-2 text-3xl font-bold text-ink">
                SG Foundation control panel
              </h1>
              <p className="mt-2 text-sm text-muted">
                Signed in as {session.username}. Review all latest submissions and donation activity here.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigateTo("/")}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-ink transition hover:bg-slate-50"
              >
                View Website
              </button>
              <button
                type="button"
                onClick={fetchDashboard}
                className="inline-flex items-center gap-2 rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                <RefreshCcw className="h-4 w-4" />
                Refresh
              </button>
              <button
                type="button"
                onClick={() => {
                  clearAdminSession();
                  onLogout();
                  navigateTo("/admin/login");
                }}
                className="inline-flex items-center gap-2 rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className={`${panelClass} px-6 py-16 text-center text-sm text-muted`}>
            Loading dashboard data...
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            <TableSection
              title="Contact Messages"
              count={data?.contacts.length ?? 0}
              columns={["Name", "Email", "Message", "Received"]}
              rows={data?.contacts ?? []}
              emptyLabel="contact messages"
              renderRow={(row) => (
                <tr key={row._id} className="align-top">
                  <td className="px-6 py-4 text-sm font-semibold text-ink">{row.name || "-"}</td>
                  <td className="px-6 py-4 text-sm text-muted">{row.email || "-"}</td>
                  <td className="px-6 py-4 text-sm text-muted">{row.message || "-"}</td>
                  <td className="px-6 py-4 text-sm text-muted">{formatDate(row.createdAt)}</td>
                </tr>
              )}
            />

            <TableSection
              title="Volunteer Requests"
              count={data?.volunteers.length ?? 0}
              columns={["Name", "Email", "Phone", "Received"]}
              rows={data?.volunteers ?? []}
              emptyLabel="volunteer requests"
              renderRow={(row) => (
                <tr key={row._id} className="align-top">
                  <td className="px-6 py-4 text-sm font-semibold text-ink">{row.name || "-"}</td>
                  <td className="px-6 py-4 text-sm text-muted">{row.email || "-"}</td>
                  <td className="px-6 py-4 text-sm text-muted">{row.phone || "-"}</td>
                  <td className="px-6 py-4 text-sm text-muted">{formatDate(row.createdAt)}</td>
                </tr>
              )}
            />

            <TableSection
              title="Donation Details"
              count={data?.donations.length ?? 0}
              columns={["Donor", "Email", "Contact", "Type", "Amount", "Status", "Received"]}
              rows={data?.donations ?? []}
              emptyLabel="donations"
              renderRow={(row) => (
                <tr key={row._id} className="align-top">
                  <td className="px-6 py-4 text-sm font-semibold text-ink">{row.donorName || "Anonymous"}</td>
                  <td className="px-6 py-4 text-sm text-muted">{row.donorEmail || "-"}</td>
                  <td className="px-6 py-4 text-sm text-muted">{row.donorContact || "-"}</td>
                  <td className="px-6 py-4 text-sm text-muted">{row.type || "-"}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-ink">{formatCurrency(row.amount)}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${
                        row.status === "success"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {row.status || "pending"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted">{formatDate(row.createdAt)}</td>
                </tr>
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [session, setSession] = useState(() => getAdminSession());
  const isLoggedIn = Boolean(session?.token);

  return isLoggedIn ? (
    <AdminDashboard session={session} onLogout={() => setSession(null)} />
  ) : (
    <AdminLogin onLogin={setSession} />
  );
}
