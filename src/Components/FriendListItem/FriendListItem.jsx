import React from "react";
import PropTypes from "prop-types";
import { Item, Status, Avatar, Name } from "./FriendListItem.styles";

const FriendListItem = ({ id, isOnline, name, avatar }) => {
  return (
    <Item key={id}>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar}></Avatar>
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
