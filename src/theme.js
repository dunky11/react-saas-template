import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const primary = "#b3294e";
const secondary = "#4829B2";
const black = "#343a40";
const darkBlack = "rgb(36, 40, 44)";
const success = "#4caf50";
const borderWidth = 2;
const borderColor = "rgba(0, 0, 0, 0.13)";

const theme = createMuiTheme({
  palette: {
    primary: { main: primary },
    secondary: { main: secondary },
    common: {
      black,
      darkBlack
    },
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    success: { main: success },
    information: {
      background: "rgba(253, 200, 69, .2)",
      border: "rgba(253, 200, 69, .4)"
    },
    background: {
      default: "#f5f5f5"
    },
    accentColor1: {
      main: "#975FE4"
    },
    accentColor2: {
      main: "#26c6da"
    }
  },
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      lg: 1280,
      md: 960,
      sm: 600,
      xl: 1920,
      xs: 0
    }
  },
  border: {
    borderColor: borderColor,
    borderWidth: borderWidth
  },
  overrides: {
    MuiExpansionPanel: {
      root: {
        position: "static"
      }
    },
    MuiTableCell: {
      root: {
        paddingLeft: 16,
        paddingRight: 16,
        borderBottom: `${borderWidth}px solid ${borderColor}`,
        "@media (max-width:  600px)": {
          paddingLeft: 8,
          paddingRight: 8
        }
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: borderColor,
        height: borderWidth
      }
    },
    MuiPrivateNotchedOutline: {
      root: {
        borderWidth: borderWidth
      }
    },
    MuiListItem: {
      root: {
        paddingTop: 16,
        paddingBottom: 16
      },
      divider: {
        borderBottom: `${borderWidth}px solid ${borderColor}`
      }
    },
    MuiDialog: {
      paper: {
        width: "100% !important",
        maxWidth: "430px !important",
        marginLeft: "8px !important",
        marginRight: "8px !important"
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: darkBlack
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        "@media (max-width:  440px)": {
          paddingLeft: 8,
          paddingRight: 8
        }
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default responsiveFontSizes(theme);
