module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        link: {
          100: "var(--color-link-100)",
          200: "var(--color-link-200)",
        },
        background: "var(--color-bg)",
        btn: "oklch(0.769 0.188 70.08);",
      },
      screen: {
        sm: "640px", // Small devices (landscape phones)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (small laptops)
        xl: "1280px", // Extra large devices (desktops)
        "2xl": "1536px", // Larger desktops
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px", // New breakpoint for even larger screens
        },
      },
    },
  },
};
