import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { TextField, Grid, Button, OutlinedInput } from "@material-ui/core";
import FormDialog from "../../../shared/FormDialog";

function AddBalanceDialog(props) {
  const { open } = props;
  return (
    <FormDialog
      open={open}
      headline="Add Balance"
      content={
        <Fragment>
          <Grid container spacing={0}>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                label="Your Name"
                fullWidth
                autoFocus
                autoComplete="off"
                type="email"
                FormHelperTextProps={{ error: true }}
              />
            </Grid>
            <Grid item xs={4}>
              <OutlinedInput
                fullWidth
                type="number"
                margin="normal"
                style={{ marginTop: 16, marginBottom: 8 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Your Name"
                autoFocus
                autoComplete="off"
                type="email"
                FormHelperTextProps={{ error: true }}
              />
            </Grid>
          </Grid>
        </Fragment>
      }
      actions={
        <Button fullWidth variant="contained" color="secondary" size="large">
          Update
        </Button>
      }
    />
  );
}

AddBalanceDialog.propTypes = {
  open: PropTypes.bool.isRequired
};

export default AddBalanceDialog;
