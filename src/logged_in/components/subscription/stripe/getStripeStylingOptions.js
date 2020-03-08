function getStylingOptions(theme, variant) {
  return {
    style: {
      iconStyle: "solid",
      base: {
        fontFamily: theme.typography.fontFamily,
        fontWeight: 400,
        fontSize: "16px",
        color: "rgba(0, 0, 0, 0.87)",
        fontSmoothing: "antialiased",
        letterSpacing: "0.00938em",
        "::placeholder": {
          color: theme.palette.text.secondary
        },
        padding: "10px 14px"
      },
      invalid: {
        iconColor: theme.palette.error.main,
        color: theme.palette.error.main
      }
    }
  };
}

export default getStylingOptions;
