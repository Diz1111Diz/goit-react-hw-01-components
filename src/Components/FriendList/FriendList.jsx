import React from "react";
import PropTypes from "prop-types";

import { List } from "./FriendList.styles";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map((el) => (
        <FriendListItem {...el} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default FriendList;
