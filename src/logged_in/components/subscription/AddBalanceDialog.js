import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { TextField, Grid, Button, InputAdornment } from "@material-ui/core";
import FormDialog from "../../../shared/components/FormDialog";
import CardTextField from "./CardTextField";

class AddBalanceDialog extends PureComponent {
  state = { value: 0 };

  onChange = event => {
    const { value } = event.target;
    if (value >= 0) {
      this.setState({ value: event.target.value });
    }
  };

  render() {
    const { open } = this.props;
    const { value } = this.state;
    return (
      <FormDialog
        open={open}
        headline="Add Balance"
        content={
          <Fragment>
            <Grid container spacing={0} justify="space-between">
              <Grid item xs={8}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  label="Your Name"
                  fullWidth
                  autoFocus
                  autoComplete="off"
                  type="text"
                  FormHelperTextProps={{ error: true }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  value={value}
                  onChange={this.onChange}
                  variant="outlined"
                  fullWidth
                  type="number"
                  margin="normal"
                  label="amount"
                  style={{ marginTop: 16, marginBottom: 8 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CardTextField />
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
}

AddBalanceDialog.propTypes = {
  open: PropTypes.bool.isRequired
};

export default AddBalanceDialog;
