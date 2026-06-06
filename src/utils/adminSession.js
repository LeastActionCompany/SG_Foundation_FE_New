const STORAGE_KEY = "sg-foundation-admin-session";

export function getAdminSession() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return null;
    }

    const session = JSON.parse(raw);

    if (!session?.token || !session?.expiresAt) {
      return null;
    }

    if (session.expiresAt < Date.now()) {
      clearAdminSession();
      return null;
    }

    return session;
  } catch (error) {
    return null;
  }
}

export function setAdminSession(session) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function clearAdminSession() {
  window.localStorage.removeItem(STORAGE_KEY);
}
