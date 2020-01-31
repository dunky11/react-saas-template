import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";
import { GridListTileBar } from "@material-ui/core";
import format from "date-fns/format";
import VertOptions from "./VertOptions";

const styles = {
  imageContainer: {
    width: "100%",
    paddingTop: "100%",
    overflow: "hidden",
    position: "relative"
  },
  image: {
    position: "absolute",
    top: -9999,
    bottom: -9999,
    left: -9999,
    right: -9999,
    margin: "auto"
  }
};

class SelfAligningImage extends PureComponent {
  state = { moreWidthThanHeight: null, loaded: false };

  onEdit = () => {
    const { onEdit, id } = this.props;
    onEdit(id);
  };

  onDelete = () => {
    const { onDelete, id } = this.props;
    onDelete(id);
  };

  render() {
    const { moreWidthThanHeight, loaded } = this.state;
    const {
      classes,
      src,
      title,
      timeStamp,
      onEdit,
      onDelete,
      roundedBorder,
      theme
    } = this.props;
    const options = [];
    if (onEdit) {
      options.push({
        name: "Edit",
        onClick: this.onEdit,
        icon: <EditIcon />
      });
    }
    if (onDelete) {
      options.push({
        name: "Delete",
        onClick: this.onDelete,
        icon: <DeleteIcon />
      });
    }
    return (
      <div className={classes.imageContainer}>
        <img
          style={{
            height: moreWidthThanHeight ? "100%" : "auto",
            width: moreWidthThanHeight ? "auto" : "100%",
            display: loaded ? "block" : "none",
            borderRadius: roundedBorder ? theme.shape.borderRadius : 0
          }}
          ref={node => {
            this.img = node;
          }}
          className={classes.image}
          onLoad={() => {
            if (this.img.naturalHeight > this.img.naturalWidth) {
              this.setState({
                moreWidthThanHeight: false,
                loaded: true
              });
            } else {
              this.setState({
                moreWidthThanHeight: true,
                loaded: true
              });
            }
          }}
          src={src}
          alt=""
        />
        {title && (
          <GridListTileBar
            title={title}
            subtitle={format(new Date(timeStamp * 1000), "PP - k:mm", {
              awareOfUnicodeTokens: true
            })}
            actionIcon={options.length > 0 && <VertOptions items={options} />}
          />
        )}
      </div>
    );
  }
}

SelfAligningImage.propTypes = {
  classes: PropTypes.object,
  src: PropTypes.string,
  title: PropTypes.string,
  timeStamp: PropTypes.number,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  id: PropTypes.number,
  roundedBorder: PropTypes.bool,
  theme: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(SelfAligningImage);
