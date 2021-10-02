export const theme = Object.freeze({
  colors: {
    main: "rgb(33, 83, 128)",
    dark: "rgb(39, 49, 64)",
    accent: "rgb(252, 151, 0)",
    milkAccent: " rgba(255, 255, 255, 0.6)",
  },

  boxShadow: {
    backdrop: "rgba(0, 0, 0, 0.5)",
    content:
      "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
    footer: " 0px 15px 10px 2px rgba(34, 60, 80, 0.26) inset",
    item: "0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
    text: " 2px 8px 6px rgba(0, 0, 0, 0.2),0px -5px 35px rgba(255, 255, 255, 0.3)",
  },
  transaction: {
    time: "250ms",
    timeFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
});
