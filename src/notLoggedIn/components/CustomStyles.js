import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  "@global": {
    ".white-bg": {
      backgroundColor: "#FFFFFF"
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
      marginTop: `${theme.spacing(20)}px !important`,
      [theme.breakpoints.down("md")]: {
        marginTop: `${theme.spacing(18)}px !important`
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: `${theme.spacing(16)}px !important`
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: `${theme.spacing(14)}px !important`
      }
    },
    ".lg-mg-bottom": {
      marginBottom: `${theme.spacing(20)}px !important`,
      [theme.breakpoints.down("md")]: {
        marginBottom: `${theme.spacing(18)}px !important`
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: `${theme.spacing(16)}px !important`
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: `${theme.spacing(14)}px !important`
      }
    },
    ".lg-p-top": {
      paddingTop: `${theme.spacing(20)}px !important`,
      [theme.breakpoints.down("md")]: {
        paddingTop: `${theme.spacing(18)}px !important`
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: `${theme.spacing(16)}px !important`
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: `${theme.spacing(14)}px !important`
      }
    },
    ".blog-content .h1": {
      ...theme.typography.h1
    },
    ".blog-content .h2": {
      ...theme.typography.h2
    },
    ".blog-content .h3": {
      ...theme.typography.h3
    },
    ".blog-content .h4": {
      ...theme.typography.h4
    },
    ".blog-content .h5": {
      ...theme.typography.h5
    },
    ".blog-content .h6": {
      ...theme.typography.h6
    },
    ".blog-content .subtitle1": {
      ...theme.typography.subtitle1
    },
    ".blog-content .body1": {
      ...theme.typography.body1
    },
    ".blog-content .body2": {
      ...theme.typography.body2
    }
  }
});

function CustomStyles() {
  return <Fragment />;
}

export default withStyles(styles, { withTheme: true })(CustomStyles);
