import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  width: 400px;
  margin: 15px;
  align-items: center;
  box-shadow: 0px -1px 13px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 10px;
`;
export const Status = styled.span`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.isOnline ? "#00ff00" : "#ff0000")};
  display: block;
`;
export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 5px;
  border-radius: 5px;
`;
export const Name = styled.p`
  font: 500 28px "Montserrat", sans-serif;
  color: black;
  line-height: 20px;
`;
