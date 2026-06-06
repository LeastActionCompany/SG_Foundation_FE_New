import { createContext, useCallback, useContext, useMemo, useState } from "react";

const ToastContext = createContext(null);

const toneMap = {
  success: {
    card: "border-emerald-200 bg-emerald-50 text-emerald-900",
    badge: "bg-emerald-600",
  },
  error: {
    card: "border-rose-200 bg-rose-50 text-rose-900",
    badge: "bg-rose-600",
  },
  info: {
    card: "border-sky-200 bg-sky-50 text-sky-900",
    badge: "bg-sky-600",
  },
};

function ToastViewport({ toasts, removeToast }) {
  return (
    <div className="pointer-events-none fixed right-4 top-4 z-[100] flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-3">
      {toasts.map((toast) => {
        const tone = toneMap[toast.type] ?? toneMap.info;

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto overflow-hidden rounded-lg border shadow-soft ${tone.card}`}
            role="status"
            aria-live="polite"
          >
            <div className="flex items-start gap-3 p-4">
              <span
                className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${tone.badge}`}
                aria-hidden="true"
              />
              <div className="min-w-0 flex-1">
                {toast.title ? (
                  <p className="text-sm font-semibold">{toast.title}</p>
                ) : null}
                <p className="text-sm leading-6">{toast.message}</p>
              </div>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className="rounded-md px-2 py-1 text-xs font-semibold text-current/70 transition hover:bg-black/5 hover:text-current"
              >
                Close
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(({ type = "info", title, message, duration = 4000 }) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    setToasts((current) => [...current, { id, type, title, message }]);

    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, duration);
  }, []);

  const value = useMemo(
    () => ({
      toast: {
        success: (message, title = "Success") =>
          showToast({ type: "success", title, message }),
        error: (message, title = "Something went wrong") =>
          showToast({ type: "error", title, message }),
        info: (message, title = "Heads up") =>
          showToast({ type: "info", title, message }),
      },
    }),
    [showToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context.toast;
}
