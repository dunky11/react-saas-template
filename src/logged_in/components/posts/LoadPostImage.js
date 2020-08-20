import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";
import SelfAligningImage from "../../../shared/components/SelfAligningImage";

function LoadPostImage(props) {
  const { post, onDelete } = props;
  const [src, setSrc] = useState("");

  const dynLoadImage = useCallback(() => {
    post.importImage.then((mod) => {
      setSrc(mod.default);
    });
  }, [post.importImage, setSrc]);

  useEffect(() => {
    dynLoadImage();
  }, [dynLoadImage]);

  return (
    <SelfAligningImage
      src={src}
      title={post.name}
      timeStamp={post.timestamp}
      options={[
        {
          name: "Delete",
          onClick: onDelete,
          icon: <DeleteIcon />,
        },
      ]}
    />
  );
}

LoadPostImage.propTypes = {
  post: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default LoadPostImage;
