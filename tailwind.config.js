module.exports = {
  theme: {
    extend: {
      colors: {
        link: {
          100: "var(--color-link-100)",
          200: "var(--color-link-200)",
        },
        background: "var(--color-bg)",
        btn: "#FFBF00;",
        icon: "#E0B84D",
        secondary: "#06402B",
      },
      screen: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
};
