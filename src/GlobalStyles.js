import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  "@global": {
    /**
     * Disable the focus outline, which is default on some browsers like
     * chrome when focusing elements
     */
    "*:focus": {
      outline: 0
    },
    ".d-block": {
      display: "block !important"
    },
    ".w-auto": {
      width: "auto !important"
    },
    "h-auto": {
      height: "auto !important"
    },
    ".w-100": {
      width: "100% !important"
    },
    ".w-50": {
      width: "50% !important"
    },
    ".w-25": {
      width: "25% !important"
    },
    ".h-100": {
      height: "100% !important"
    },
    ".text-white": {
      color: `${theme.palette.common.white} !important`
    },
    ".d-flex": {
      display: "flex !important"
    },
    ".flex-row": {
      flexDirection: "row !important"
    },
    ".flex-column": {
      flexDirection: "column !important"
    },
    ".justify-content-start": {
      justifyContent: "flex-start !important"
    },
    ".justify-content-end": {
      justifyContent: "flex-end !important"
    },
    ".justify-content-center": {
      justifyContent: "center !important"
    },
    ".justify-content-between": {
      justifyContent: "space-between !important"
    },
    ".justify-content-around": {
      justifyContent: "space-around !important"
    },
    ".align-items-start": {
      alignItems: "flex-start !important"
    },
    ".align-items-end": {
      alignItems: "flex-end !important"
    },
    ".align-items-center": {
      alignItems: "center !important"
    },
    ".align-items-baseline": {
      alignItems: "baseline !important"
    },
    ".align-items-stretch": {
      alignItems: "stretch !important"
    },
    ".flex-grow-1": {
      flexGrow: "1 !important"
    },
    ".flex-grow-2": {
      flexGrow: "2 !important"
    },
    ".flex-grow-3": {
      flexGrow: "3 !important"
    },
    ".flex-grow-4": {
      flexGrow: "4 !important"
    },
    ".mt-auto:": {
      marginTop: "auto !important"
    },
    ".mr-auto": {
      marginRight: "auto !important"
    },
    "mb-auto": {
      marginBottom: "auto !important"
    },
    ".ml-auto": {
      marginLeft: "auto !important"
    },
    ".mx-auto": {
      marginLeft: "auto !important",
      marginRight: "auto !important"
    },
    ".my-auto": {
      marginTop: "auto !important",
      marginBottom: "auto !important"
    },
    ".m-auto": {
      marginTop: "auto !important",
      marginRight: "auto !important",
      marginBottom: "auto !important",
      marginLeft: "auto !important"
    },
    ".pt-0": {
      paddingTop: "0 !important"
    },
    ".pr-0": {
      paddingRight: "0 !important"
    },
    ".pb-0": {
      paddingBottom: "0 !important"
    },
    ".pl-0": {
      paddingLeft: "0 !important"
    },
    ".px-0": {
      paddingRight: "0 !important",
      paddingLeft: "0 !important"
    },
    ".py-0": {
      paddingBottom: "0 !important",
      paddingTop: "0 !important"
    },
    ".p-0": {
      paddingTop: "0 !important",
      paddingRight: "0 !important",
      paddingBottom: "0 !important",
      paddingLeft: "0 !important"
    },
    ".mt-0": {
      marginTop: "0 !important"
    },
    ".mr-0": {
      marginRight: "0 !important"
    },
    ".mb-0": {
      marginBottom: "0 !important"
    },
    ".ml-0": {
      marginLeft: "0 !important"
    },
    ".mx-0": {
      marginRight: "0 !important",
      marginLeft: "0 !important"
    },
    ".my-0": {
      marginBottom: "0 !important",
      marginTop: "0 !important"
    },
    ".m-0": {
      marginTop: "0 !important",
      marginRight: "0 !important",
      marginBottom: "0 !important",
      marginLeft: "0 !important"
    },
    ".pt-1": {
      paddingTop: `${theme.spacing(1)}px !important`
    },
    ".pr-1": {
      paddingRight: `${theme.spacing(1)}px !important`
    },
    ".pb-1": {
      paddingBottom: `${theme.spacing(1)}px !important`
    },
    ".pl-1": {
      paddingLeft: `${theme.spacing(1)}px !important`
    },
    ".px-1": {
      paddingRight: `${theme.spacing(1)}px !important`,
      paddingLeft: `${theme.spacing(1)}px !important`
    },
    ".py-1": {
      paddingBottom: `${theme.spacing(1)}px !important`,
      paddingTop: `${theme.spacing(1)}px !important`
    },
    ".p-1": {
      paddingTop: `${theme.spacing(1)}px !important`,
      paddingRight: `${theme.spacing(1)}px !important`,
      paddingBottom: `${theme.spacing(1)}px !important`,
      paddingLeft: `${theme.spacing(1)}px !important`
    },
    ".mt-1": {
      marginTop: `${theme.spacing(1)}px !important`
    },
    ".mr-1": {
      marginRight: `${theme.spacing(1)}px !important`
    },
    ".mb-1": {
      marginBottom: `${theme.spacing(1)}px !important`
    },
    ".ml-1": {
      marginLeft: `${theme.spacing(1)}px !important`
    },
    ".mx-1": {
      marginRight: `${theme.spacing(1)}px !important`,
      marginLeft: `${theme.spacing(1)}px !important`
    },
    ".my-1": {
      marginBottom: `${theme.spacing(1)}px !important`,
      marginTop: `${theme.spacing(1)}px !important`
    },
    ".m-1": {
      marginTop: `${theme.spacing(1)}px !important`,
      marginRight: `${theme.spacing(1)}px !important`,
      marginBottom: `${theme.spacing(1)}px !important`,
      marginLeft: `${theme.spacing(1)}px !important`
    },
    ".pt-2": {
      paddingTop: `${theme.spacing(2)}px !important`
    },
    ".pr-2": {
      paddingRight: `${theme.spacing(2)}px !important`
    },
    ".pb-2": {
      paddingBottom: `${theme.spacing(2)}px !important`
    },
    ".pl-2": {
      paddingLeft: `${theme.spacing(2)}px !important`
    },
    ".px-2": {
      paddingRight: `${theme.spacing(2)}px !important`,
      paddingLeft: `${theme.spacing(2)}px !important`
    },
    ".py-2": {
      paddingBottom: `${theme.spacing(2)}px !important`,
      paddingTop: `${theme.spacing(2)}px !important`
    },
    ".p-2": {
      paddingTop: `${theme.spacing(2)}px !important`,
      paddingRight: `${theme.spacing(2)}px !important`,
      paddingBottom: `${theme.spacing(2)}px !important`,
      paddingLeft: `${theme.spacing(2)}px !important`
    },
    ".mt-2": {
      marginTop: `${theme.spacing(2)}px !important`
    },
    ".mr-2": {
      marginRight: `${theme.spacing(2)}px !important`
    },
    ".mb-2": {
      marginBottom: `${theme.spacing(2)}px !important`
    },
    ".ml-2": {
      marginLeft: `${theme.spacing(2)}px !important`
    },
    ".mx-2": {
      marginRight: `${theme.spacing(2)}px !important`,
      marginLeft: `${theme.spacing(2)}px !important`
    },
    ".my-2": {
      marginBottom: `${theme.spacing(2)}px !important`,
      marginTop: `${theme.spacing(2)}px !important`
    },
    ".m-2": {
      marginTop: `${theme.spacing(2)}px !important`,
      marginRight: `${theme.spacing(2)}px !important`,
      marginBottom: `${theme.spacing(2)}px !important`,
      marginLeft: `${theme.spacing(2)}px !important`
    },
    ".pt-3": {
      paddingTop: `${theme.spacing(3)}px !important`
    },
    ".pr-3": {
      paddingRight: `${theme.spacing(3)}px !important`
    },
    ".pb-3": {
      paddingBottom: `${theme.spacing(3)}px !important`
    },
    ".pl-3": {
      paddingLeft: `${theme.spacing(3)}px !important`
    },
    ".px-3": {
      paddingRight: `${theme.spacing(3)}px !important`,
      paddingLeft: `${theme.spacing(3)}px !important`
    },
    ".py-3": {
      paddingBottom: `${theme.spacing(3)}px !important`,
      paddingTop: `${theme.spacing(3)}px !important`
    },
    ".p-3": {
      paddingTop: `${theme.spacing(3)}px !important`,
      paddingRight: `${theme.spacing(3)}px !important`,
      paddingBottom: `${theme.spacing(3)}px !important`,
      paddingLeft: `${theme.spacing(3)}px !important`
    },
    ".mt-3": {
      marginTop: `${theme.spacing(3)}px !important`
    },
    ".mr-3": {
      marginRight: `${theme.spacing(3)}px !important`
    },
    ".mb-3": {
      marginBottom: `${theme.spacing(3)}px !important`
    },
    ".ml-3": {
      marginLeft: `${theme.spacing(3)}px !important`
    },
    ".mx-3": {
      marginRight: `${theme.spacing(3)}px !important`,
      marginLeft: `${theme.spacing(3)}px !important`
    },
    ".my-3": {
      marginBottom: `${theme.spacing(3)}px !important`,
      marginTop: `${theme.spacing(3)}px !important`
    },
    ".m-3": {
      marginTop: `${theme.spacing(3)}px !important`,
      marginRight: `${theme.spacing(3)}px !important`,
      marginBottom: `${theme.spacing(3)}px !important`,
      marginLeft: `${theme.spacing(3)}px !important`
    },
    ".pt-4": {
      paddingTop: `${theme.spacing(4)}px !important`
    },
    ".pr-4": {
      paddingRight: `${theme.spacing(4)}px !important`
    },
    ".pb-4": {
      paddingBottom: `${theme.spacing(4)}px !important`
    },
    ".pl-4": {
      paddingLeft: `${theme.spacing(4)}px !important`
    },
    ".px-4": {
      paddingRight: `${theme.spacing(4)}px !important`,
      paddingLeft: `${theme.spacing(4)}px !important`
    },
    ".py-4": {
      paddingBottom: `${theme.spacing(4)}px !important`,
      paddingTop: `${theme.spacing(4)}px !important`
    },
    ".p-4": {
      paddingTop: `${theme.spacing(4)}px !important`,
      paddingRight: `${theme.spacing(4)}px !important`,
      paddingBottom: `${theme.spacing(4)}px !important`,
      paddingLeft: `${theme.spacing(4)}px !important`
    },
    ".mt-4": {
      marginTop: `${theme.spacing(4)}px !important`
    },
    ".mr-4": {
      marginRight: `${theme.spacing(4)}px !important`
    },
    ".mb-4": {
      marginBottom: `${theme.spacing(4)}px !important`
    },
    ".ml-4": {
      marginLeft: `${theme.spacing(4)}px !important`
    },
    ".mx-4": {
      marginRight: `${theme.spacing(4)}px !important`,
      marginLeft: `${theme.spacing(4)}px !important`
    },
    ".my-4": {
      marginBottom: `${theme.spacing(4)}px !important`,
      marginTop: `${theme.spacing(4)}px !important`
    },
    ".m-4": {
      marginTop: `${theme.spacing(4)}px !important`,
      marginRight: `${theme.spacing(4)}px !important`,
      marginBottom: `${theme.spacing(4)}px !important`,
      marginLeft: `${theme.spacing(4)}px !important`
    },
    ".pt-5": {
      paddingTop: `${theme.spacing(5)}px !important`
    },
    ".pr-5": {
      paddingRight: `${theme.spacing(5)}px !important`
    },
    ".pb-5": {
      paddingBottom: `${theme.spacing(5)}px !important`
    },
    ".pl-5": {
      paddingLeft: `${theme.spacing(5)}px !important`
    },
    ".px-5": {
      paddingRight: `${theme.spacing(5)}px !important`,
      paddingLeft: `${theme.spacing(5)}px !important`
    },
    ".py-5": {
      paddingBottom: `${theme.spacing(5)}px !important`,
      paddingTop: `${theme.spacing(5)}px !important`
    },
    ".p-5": {
      paddingTop: `${theme.spacing(5)}px !important`,
      paddingRight: `${theme.spacing(5)}px !important`,
      paddingBottom: `${theme.spacing(5)}px !important`,
      paddingLeft: `${theme.spacing(5)}px !important`
    },
    ".mt-5": {
      marginTop: `${theme.spacing(5)}px !important`
    },
    ".mr-5": {
      marginRight: `${theme.spacing(5)}px !important`
    },
    ".mb-5": {
      marginBottom: `${theme.spacing(5)}px !important`
    },
    ".ml-5": {
      marginLeft: `${theme.spacing(5)}px !important`
    },
    ".mx-5": {
      marginRight: `${theme.spacing(5)}px !important`,
      marginLeft: `${theme.spacing(5)}px !important`
    },
    ".my-5": {
      marginBottom: `${theme.spacing(5)}px !important`,
      marginTop: `${theme.spacing(5)}px !important`
    },
    ".m-5": {
      marginTop: `${theme.spacing(5)}px !important`,
      marginRight: `${theme.spacing(5)}px !important`,
      marginBottom: `${theme.spacing(5)}px !important`,
      marginLeft: `${theme.spacing(5)}px !important`
    },
    ".d-none": {
      display: "none !important"
    },
    ".listItemSecondaryPadding": {
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: `${theme.spacing(4)}px !important`,
      [theme.breakpoints.down("sm")]: {
        paddingLeft: `${theme.spacing(2)}px !important`
      },
      "@media (max-width:  420px)": {
        paddingLeft: `${theme.spacing(1)}px !important`
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
    }
  }
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
