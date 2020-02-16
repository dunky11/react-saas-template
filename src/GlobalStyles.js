import { withStyles } from "@material-ui/core";

const styles = theme => ({
  "@global": {
    /**
     * Disable the focus outline, which is default on some browsers like
     * chrome when focusing elements
     */
    "*:focus": {
      outline: 0
    },
    ".text-white": {
      color: theme.palette.common.white
    },
    ".listItemLeftPadding": {
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing(2)
      },
      "@media (max-width:  420px)": {
        paddingLeft: theme.spacing(1)
      }
    },
    ".container": {
      width: "100%",
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      marginRight: "auto",
      marginLeft: "auto",
      [theme.breakpoints.up("sm")]: {
        maxWidth: 540
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 720
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: 1170
      }
    },
    ".row": {
      display: "flex",
      flexWrap: "wrap",
      marginRight: -theme.spacing(2),
      marginLeft: -theme.spacing(2)
    },
    ".container-fluid": {
      width: "100%",
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: 1370
    },
    ".lg-mg-top": {
      marginTop: theme.spacing(20),
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(18)
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(16)
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: theme.spacing(14)
      }
    },
    ".lg-mg-bottom": {
      marginBottom: theme.spacing(20),
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(18)
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(16)
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: theme.spacing(14)
      }
    },
    ".lg-p-top": {
      paddingTop: theme.spacing(20),
      [theme.breakpoints.down("md")]: {
        paddingTop: theme.spacing(18)
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(16)
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: theme.spacing(14)
      }
    }
  }
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
