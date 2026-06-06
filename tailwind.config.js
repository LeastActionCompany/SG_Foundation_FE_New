/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#283C81",
        "primary-dark": "#1F2E63",
        "primary-light": "#3D56B2",
        ink: "#16203B",
        muted: "#5F6B85",
        surface: "#F9FAFB",
        gold: "#E8A838",
        "gold-light": "#F5C55A",
      },
      fontFamily: {
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        xl2: "1.25rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(21, 33, 77, 0.12)",
        panel: "0 24px 48px rgba(21, 33, 77, 0.16)",
        glow: "0 0 40px rgba(40, 60, 129, 0.3)",
        "glow-gold": "0 0 40px rgba(232, 168, 56, 0.4)",
        "card-hover": "0 30px 60px rgba(40, 60, 129, 0.18)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(120deg, rgba(40,60,129,0.88), rgba(40,60,129,0.74)), url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80')",
        volunteer:
          "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.78)), url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=80')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse_glow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        scroll_bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        pulse_glow: "pulse_glow 3s ease-in-out infinite",
        scroll_bounce: "scroll_bounce 1.5s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};
