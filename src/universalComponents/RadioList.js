import React from "react";
import PropTypes from "prop-types";
import {
  List,
  Radio,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import ClickableComponent from "./ClickableComponent";

function RadioList(props) {
  const { dense, items, selectItem, selectedItem } = props;
  return (
    <List dense={dense}>
      {items.map((item, index) => (
        <ClickableComponent
          function={selectItem}
          parameters={[item.name]}
          key={index}
        >
          <ListItem button divider={index !== items.length - 1}>
            <ListItemText primary={item.name} secondary={item.subtitle} />
            <ListItemSecondaryAction>
              <Radio checked={item.name === selectedItem} />
            </ListItemSecondaryAction>
          </ListItem>
        </ClickableComponent>
      ))}
    </List>
  );
}

RadioList.propTypes = {
  dense: PropTypes.bool,
  selectItem: PropTypes.func,
  selectedItem: PropTypes.string,
  items: PropTypes.array
};

export default RadioList;
