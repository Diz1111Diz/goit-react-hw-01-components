import styled from "styled-components";

export const Item = styled.li``;
export const Status = styled.span`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.isOnline ? "#00ff00" : "#ff0000")};
  display: block;
`;
export const Avatar = styled.img``;
export const Name = styled.p``;
